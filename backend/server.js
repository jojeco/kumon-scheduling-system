import express from "express";
import cors from "cors";
import admin from "./firebaseAdmin.js"; // ✅ make sure this is the correct path

import { pool } from "./db.js"; // Make sure the import path matches your project structure

app.get("/db-test", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ connected: true, time: result.rows[0].now });
  } catch (error) {
    console.error("❌ DB connection failed:", error.message);
    res.status(500).json({ connected: false, error: error.message });
  }
});
const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is working");
});

// ✅ THIS MUST EXIST
app.get("/profile", async (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    res.json({
      uid: decodedToken.uid,
      email: decodedToken.email,
    });
  } catch (error) {
    console.error("Token verification failed:", error);
    res.status(403).json({ error: "Unauthorized" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});