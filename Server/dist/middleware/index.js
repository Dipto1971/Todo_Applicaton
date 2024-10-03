"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateJwt = exports.SECRET = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.SECRET = "SECr3t";
const authenticateJwt = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jsonwebtoken_1.default.verify(token, exports.SECRET, (err, user) => {
            if (!user) { // When it is null or undefined
                return res.sendStatus(403);
            }
            if (typeof user === "string") {
                // When it is a string. .id will be undefined 
                return res.sendStatus(403);
            }
            // These two checks are necessary because jwt.verify 
            // will return a string if the token is invalid
            if (err) {
                return res.sendStatus(403);
            }
            // Problem: req.userId = user.id;
            // Giving a userId key to the request object
            // which is not applicable in Ts because it is not defined in the Request interface
            // Solution:
            req.headers["userId"] = user.id;
            // Setting the custom key in the headers object,
            // because we know headers is an object and it will not throw an error
            next();
        });
    }
    else {
        res.sendStatus(401);
    }
};
exports.authenticateJwt = authenticateJwt;
