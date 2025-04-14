# Movie App Server (TMDB API)

This is the backend server for the [Movie App](https://github.com/rahaa-EM/movie-app-frontend), built with **Node.js + Express + TypeScript**. It connects to **[The Movie Database (TMDB)](https://www.themoviedb.org/?language=en-CA)** API and exposes custom endpoints for the frontend to use.

## Tech Stack
- Node.js
- TypeScript
- Express

## Setup Instructions

1. **Clone the repo**
    ```bash
    git clone https://github.com/rahaa-EM/movie-app-backend.git
    cd movie-app-backend
2. **Install dev dependencies**
    ```bash
    npm install
3. **Create .env file**
    ```bash
    PORT=3000
    TMDB_API_KEY=your_tmdb_api_key
    TMDB_BEARER_TOKEN=your_tmdb_bearer_token
4. **Run the server**
    ```bash
    npm run dev