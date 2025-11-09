import "dotenv/config";
import express from "express";
import cors from "cors";
import healthRouter from "./routes/health.js";
import authRouter from "./routes/auth.js";
import { requireAuth } from "./middleware/requireAuth.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", healthRouter);
app.use("/api/auth", authRouter);

// optional alias if you want /api/users/me
app.get("/api/users/me", requireAuth, (req, res) => res.json({ data: req.user }));

app.use((req, res) => res.status(404).json({ error: "Not Found", path: req.originalUrl }));
app.use((err, _req, res, _next) => {
  const status = err.status || 400;
  res.status(status).json({ error: err.message || "Request error" });
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`API running on http://localhost:${port}`));
