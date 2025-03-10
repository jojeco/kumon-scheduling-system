import { Request, Response, NextFunction } from "express";
import admin from "../config/firebaseAdmin";

// Middleware to verify Firebase JWT
const authenticateUser = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Unauthorized: No token provided" });
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken; // Attach user data to request
    next();
  } catch (error) {
    return res.status(403).json({ error: "Unauthorized: Invalid token" });
  }
};

export default authenticateUser;