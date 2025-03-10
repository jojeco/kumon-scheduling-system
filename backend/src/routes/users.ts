import express from "express";
import authenticateUser from "../middlewares/authMiddleware";

const router = express.Router();

// Protected Route - Only Authenticated Users Can Access
router.get("/profile", authenticateUser, (req, res) => {
  res.json({ message: "Welcome to your profile!", user: req.user });
});

export default router;