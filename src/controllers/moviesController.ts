// This file is part of the Movie App project.
import { Request, Response, NextFunction } from "express";
import { fetchFromTMDB } from "../services/tmdbService.js";
import { Movie } from "../types/types.js";
type TMDBResponse = {
  results: Movie[];
};
export const getPopularMovies = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = (await fetchFromTMDB(
      "/discover/movie?sort_by=popularity.desc&page=1"
    )) as TMDBResponse;
    res.json(data.results);
  } catch (err) {
    next(err);
  }
};

export const searchMovies = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const query = req.query.q;
  try {
    const data = await fetchFromTMDB(
      `/search/movie?query=${encodeURIComponent(
        query as string
      )}&include_adult=true&language=en-US&page=1`
    );
    res.json(data);
  } catch (err) {
    next(err);
  }
};

export const getTopRatedMovie = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = (await fetchFromTMDB(
      "/movie/top_rated?page=1&language=en-US"
    )) as TMDBResponse;
    res.json(data.results[0]);
  } catch (err) {
    next(err);
  }
};
