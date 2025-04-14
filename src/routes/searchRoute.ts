import { Router } from "express";
import { searchMovies } from "../controllers/Controller.js";

const router = Router();

router.get("/", searchMovies);

export default router;
