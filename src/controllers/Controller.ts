import { Request, Response, NextFunction } from "express";
import { fetchFromTMDB } from "../services/tmdbService.js";
import { Movie } from "../types/types.js";
type TMDBResponse = {
  results: Movie[];
};
// Helper function
const handleTMDBRequest = async (
  path: string,
  res: Response,
  next: NextFunction,
  extractResults: boolean = true
) => {
  try {
    const data = await fetchFromTMDB(path);
    res.json(extractResults ? (data as TMDBResponse).results : data);
  } catch (err) {
    next(err);
  }
};

// Get all latest popular movies for the homepage
export const getPopularMovies = (
  req: Request,
  res: Response,
  next: NextFunction
) =>
  handleTMDBRequest(
    "/discover/movie?sort_by=popularity.desc&page=1",
    res,
    next
  );

// Search movies/tv shows by title
// The type will show which category(movie/tv/multi) we are searching for(Multi is defined as both movie and tv in TMDB API)
export const searchMovies = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const query = req.query.q;
  const type = req.query.type || "multi";

  const path = `/search/${type}?query=${encodeURIComponent(
    query as string
  )}&include_adult=true&language=en-US&page=1`;

  return handleTMDBRequest(path, res, next, false);
};

// Get all top-rated tv-shows
export const getTopRatedTV = (
  req: Request,
  res: Response,
  next: NextFunction
) => handleTMDBRequest("/tv/top_rated?page=1&language=en-US", res, next);

// Get all top-rated movies
export const getTopRatedMovies = (
  req: Request,
  res: Response,
  next: NextFunction
) => handleTMDBRequest("/movie/top_rated?page=1&language=en-US", res, next);
