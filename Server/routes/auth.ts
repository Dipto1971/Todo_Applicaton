import jwt from "jsonwebtoken";
import express from "express";
import { authenticateJwt } from "../middleware";
import { SECRET } from "../middleware";
import { User } from "../db";
const router = express.Router();
import { SignupInputProps, LoginInputProps } from "../../Common/types/auth";

router.post("/signup", async (req, res) => {
  // Here the req, res types are inferred from the express.Router() type
  // Means we don't need to import Request and Response from express
  const parsedInput = SignupInputProps.safeParse(req.body);
  if (!parsedInput.success) {
    return res.status(411).json({
      error: parsedInput.error.issues.map((issue: any) => issue.message),
    });
  }
  const username = parsedInput.data.username;
  const password = parsedInput.data.password;

  const user = await User.findOne({ username });

  if (user) {
    res.status(403).json({ message: "User already exists" });
  } else {
    const newUser = new User({ username, password });
    await newUser.save();
    const token = jwt.sign({ id: newUser._id }, SECRET, { expiresIn: "1h" });
    res.json({ message: "User created successfully", token });
  }
});

router.post("/login", async (req, res) => {
  const parsedInput = LoginInputProps.safeParse(req.body);

  if (!parsedInput.success) {
    return res.status(411).json({ error: parsedInput.error });
  }
  const username = parsedInput.data.username;
  const password = parsedInput.data.password;
  const user = await User.findOne({ username, password });

  if (user) {
    const token = jwt.sign({ id: user._id }, SECRET, { expiresIn: "1h" });
    res.json({ message: "Logged in successfully", token });
  } else {
    res.status(403).json({ message: "Invalid username or password" });
  }
});

router.get("/me", authenticateJwt, async (req, res) => {
  const userId = req.headers["userId"];
  // Here we are getting the userId from the headers object
  const user = await User.findOne({ _id: userId });
  if (user) {
    res.json({ username: user.username });
  } else {
    res.status(403).json({ message: "User not logged in" });
  }
});

export default router;
