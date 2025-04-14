// This file contains the function to fetch data from the TMDB API.
import fetch from "node-fetch";
import { TMDB_API_BASE, TMDB_BEARER_TOKEN } from "../config/tmdbConfig.js";

const headers = {
  accept: "application/json",
  Authorization: `Bearer ${TMDB_BEARER_TOKEN}`,
};

export async function fetchFromTMDB(endpoint: string) {
  const url = `${TMDB_API_BASE}${endpoint}`;
  const res = await fetch(url, { headers });

  if (!res.ok) {
    throw new Error(`Failed to fetch from TMDB: ${res.statusText}`);
  }

  return res.json();
}
