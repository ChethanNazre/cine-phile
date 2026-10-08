import React, { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";
import { API_URL, IMAGE_BASE_URL } from "../../Config";
import MainImage from "./Sections/MainImage";
import GridCards from "../commons/GridCards";
import { Row } from "antd";

function LandingPage() {
  const [Movies, setMovies] = useState([]);
  const [MainMovieImage, setMainMovieImage] = useState(null);
  const [CurrentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const endpoint = `${API_URL}/popular?page=1`;
    fetchMovies(endpoint);
  }, []);

  const fetchMovies = (endpoint) => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((response) => {
        if (!response.success) {
          throw new Error(response.error || "Failed to load movies.");
        }

        const results = response.data.results || [];
        setMovies((prevMovies) => [...prevMovies, ...results]);
        setMainMovieImage(results[0] || null);
        setCurrentPage(response.data.page || 1);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  };

  const loadMoreItems = () => {
    const endpoint = `${API_URL}/popular?page=${CurrentPage + 1}`;
    fetchMovies(endpoint);
  };

  return (
    <div stlye={{ width: "100%", margin: "0" }}>
      {MainMovieImage && (
        <MainImage
          image={`${IMAGE_BASE_URL}w1280${MainMovieImage.backdrop_path}`}
          title={MainMovieImage.original_title}
          text={MainMovieImage.overview}
        />
      )}
      <div style={{ width: "85%", margin: "1rem auto" }}>
        <h2>Movie by latest</h2>
        <hr />
        <Row gutter={[16, 16]}>
          {Movies &&
            Movies.map((movie, index) => (
              <React.Fragment key={index}>
                <GridCards
                  landingpage
                  image={
                    movie.poster_path ? `${IMAGE_BASE_URL}w500${movie.poster_path}` : null
                  }
                  movieId={movie.id}
                  movieName={movie.original_title}
                />
              </React.Fragment>
            ))}
        </Row>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={loadMoreItems}>Load More</button>
      </div>
    </div>
  );
}

export default LandingPage;
