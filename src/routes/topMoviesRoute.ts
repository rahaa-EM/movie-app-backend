import { Router } from "express";
import { getPopularMovies } from "../controllers/Controller.js";

const router = Router();

router.get("/", getPopularMovies);

export default router;
