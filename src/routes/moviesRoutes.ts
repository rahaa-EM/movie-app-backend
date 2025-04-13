import { Router } from "express";
import {
  getPopularMovies,
  searchMovies,
  getTopRatedMovie,
} from "../controllers/moviesController.js";

const router = Router();

router.get("/", getPopularMovies);
router.get("/search", searchMovies);
router.get("/topRated", getTopRatedMovie);

export default router;
