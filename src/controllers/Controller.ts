import { Request, Response, NextFunction } from "express";
import { fetchFromTMDB } from "../services/tmdbService.js";
import { Movie } from "../types/types.js";
type TMDBResponse = {
  results: Movie[];
};
// Get allpopular movies for the homepage
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
// Search movies/tv shows by title
export const searchMovies = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const query = req.query.q;
  const type = req.query.type || "multi";
  try {
    const data = await fetchFromTMDB(
      `/search/${type}?query=${encodeURIComponent(
        query as string
      )}&include_adult=true&language=en-US&page=1`
    );
    res.json(data);
  } catch (err) {
    next(err);
  }
};

// Get all top-rated tv-shows
export const getTopRatedTV = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = (await fetchFromTMDB(
      "/tv/top_rated?page=1&language=en-US"
    )) as TMDBResponse;
    res.json(data.results);
  } catch (err) {
    next(err);
  }
};

// Get all top-rated movies
export const getTopRatedMovies = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = (await fetchFromTMDB(
      "/movie/top_rated?page=1&language=en-US"
    )) as TMDBResponse;
    res.json(data.results);
  } catch (err) {
    next(err);
  }
};
