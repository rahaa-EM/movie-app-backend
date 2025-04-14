import { Router } from "express";
import { getTopRatedTV } from "../controllers/Controller.js";

const router = Router();

router.get("/", getTopRatedTV);

export default router;
