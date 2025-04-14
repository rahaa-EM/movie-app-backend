import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import topMoviesRoute from "./routes/topMoviesRoute.js";
import searchRoute from "./routes/searchRoute.js";
import moviesRoute from "./routes/moviesRoute.js";
import tvShowsRoute from "./routes/tvshowsRoute.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/top-movies", topMoviesRoute);
app.use("/api/movies", moviesRoute);
app.use("/api/search", searchRoute);
app.use("/api/tv-shows", tvShowsRoute);

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
export default app;
