import jwt from "jsonwebtoken";
import { Request } from "express";
import { Response } from "express";
import { NextFunction } from "express";

export const SECRET = "SECr3t";



export const authenticateJwt = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.userId = user.id;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};
