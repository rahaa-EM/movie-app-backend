# Movie App Server (TMDB API Wrapper)

This is the backend server for the Movie App, built with **Node.js + Express + TypeScript**. It connects to **The Movie Database (TMDB)** API and exposes custom endpoints for the frontend to use.

## Tech Stack
- Node.js
- TypeScript
- Express
- node-fetch
- CORS

## Setup Instructions

1. **Clone the repo**
    ```bash
    git clone https://github.com/rahaa-EM/movie-app-backend.git
    cd movieAppServer
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