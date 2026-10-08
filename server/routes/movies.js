const express = require("express");
const axios = require("axios");
const router = express.Router();
const config = require("../config/key");

const TMDB_BASE = "https://api.themoviedb.org/3";
const TMDB_API_KEY = config.tmdbApiKey;

const requireTmdbKey = (req, res, next) => {
  if (!TMDB_API_KEY) {
    return res.status(500).json({
      success: false,
      error: "TMDB_API_KEY is not configured on the server.",
    });
  }
  next();
};

router.get("/popular", requireTmdbKey, async (req, res) => {
  try {
    const page = req.query.page || 1;
    const response = await axios.get(`${TMDB_BASE}/movie/popular`, {
      params: {
        api_key: TMDB_API_KEY,
        language: "en-US",
        page,
      },
    });

    return res.status(200).json({ success: true, data: response.data });
  } catch (error) {
    console.error("TMDb popular fetch failed:", error.message || error);
    return res.status(500).json({ success: false, error: "Failed to fetch popular movies." });
  }
});

router.get("/search", requireTmdbKey, async (req, res) => {
  try {
    const query = req.query.q;
    const page = req.query.page || 1;

    if (!query) {
      return res.status(400).json({ success: false, error: "Missing movie search query q." });
    }

    const response = await axios.get(`${TMDB_BASE}/search/movie`, {
      params: {
        api_key: TMDB_API_KEY,
        query,
        page,
        language: "en-US",
      },
    });

    return res.status(200).json({ success: true, data: response.data });
  } catch (error) {
    console.error("TMDb search fetch failed:", error.message || error);
    return res.status(500).json({ success: false, error: "Failed to search movies." });
  }
});

router.get("/:id/credits", requireTmdbKey, async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`${TMDB_BASE}/movie/${id}/credits`, {
      params: {
        api_key: TMDB_API_KEY,
      },
    });

    return res.status(200).json({ success: true, data: response.data });
  } catch (error) {
    console.error("TMDb credits fetch failed:", error.message || error);
    return res.status(500).json({ success: false, error: "Failed to fetch movie credits." });
  }
});

router.get("/:id", requireTmdbKey, async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`${TMDB_BASE}/movie/${id}`, {
      params: {
        api_key: TMDB_API_KEY,
        language: "en-US",
      },
    });

    return res.status(200).json({ success: true, data: response.data });
  } catch (error) {
    console.error("TMDb movie details fetch failed:", error.message || error);
    return res.status(500).json({ success: false, error: "Failed to fetch movie details." });
  }
});

module.exports = router;
