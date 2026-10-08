# Cine-Phile

A cinematic MERN web app to explore, rate, and manage your favorite movies with a futuristic UI.

## Overview

Cine-Phile is a full-stack movie app built with MongoDB, Express, React, and Node.js. It lets users browse trending movies, search for titles, view cast and details, save favorites, and authenticate securely.

The app now uses a secure server-side TMDb integration so the movie API key is not exposed in the browser.

## Features

- Browse popular movies from TMDb
- Search movies by name
- View movie details, credits, and posters
- Favorite/unfavorite movies per user
- JWT-based authentication
- Protected routes and secure cookies
- Responsive movie grid and detail views
- Production-ready server configuration and env-based setup

## Tech Stack

- Frontend: React.js, Redux, Ant Design, Axios
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT + bcrypt
- Movie Data: TMDb API
- Deployment: Vercel/Netlify (frontend), Render/Railway/Heroku (backend)

## Project Structure

```bash
cine-phile/
├── client/                  # React frontend
│   ├── src/
│   ├── public/
│   └── package.json
├── server/                  # Express backend
│   ├── config/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── index.js
├── .env.example
├── .gitignore
├── package.json
├── README.md
├── screenshots/
└── vercel.json
```

## Prerequisites

- Node.js 18+
- npm 9+
- MongoDB instance (local or Atlas)
- TMDb API key

## Environment Setup

Copy `.env.example` to a real `.env` file in the project root and set the values:

```env
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://localhost:27017/cine-phile
JWT_SECRET=change_this_to_a_strong_secret
JWT_EXPIRY=1h
CLIENT_URL=http://localhost:3000
TMDB_API_KEY=your_tmdb_api_key_here
TMDB_IMAGE_BASE=https://image.tmdb.org/t/p
```

## Local Development

Install dependencies:

```bash
npm install
cd client && npm install && cd ..
```

Start both services together:

```bash
npm run dev
```

Or run them separately:

```bash
npm run backend
npm run frontend
```

The app is available at:

- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## API Routes

The backend exposes movie routes through the server, keeping the TMDb API secret on the server side:

- `GET /api/movies/popular`
- `GET /api/movies/search?q=...`
- `GET /api/movies/:id`
- `GET /api/movies/:id/credits`

## Production Deployment

Recommended deployment setup:

- Frontend: Vercel or Netlify
- Backend: Render, Railway, or Heroku
- Database: MongoDB Atlas

Required production env variables:

- `NODE_ENV=production`
- `PORT=5000`
- `MONGO_URI`
- `JWT_SECRET`
- `CLIENT_URL`
- `TMDB_API_KEY`
- `TMDB_IMAGE_BASE`

## Screenshots

The app screenshots are stored in the `screenshots/` folder.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a pull request

## License

This project is licensed under the MIT License.

## Author

Chethan Nazre
