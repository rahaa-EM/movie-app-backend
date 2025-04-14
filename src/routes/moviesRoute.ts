import { Router } from "express";
import { getTopRatedMovies } from "../controllers/Controller.js";

const router = Router();

router.get("/", getTopRatedMovies);

export default router;
