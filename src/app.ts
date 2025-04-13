import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import moviesRoutes from "./routes/moviesRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/movies", moviesRoutes);

// Error handler
app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error("Error:", err.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
);

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
