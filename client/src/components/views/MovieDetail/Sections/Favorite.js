import React, { useEffect } from "react";
import axios from "axios";

function Favorite(props) {
  const movieId = props.movieId;
  const userFrom = props.userFrom;
  const movieTitle = props.movieInfo.title;
  const moviePost = props.movieInfo.backdrop_path;
  const movieRunTime = props.movieInfo.runtime;
  useEffect(() => {
    let variables = {
      userFrom,
      movieId,
    };
    axios.post("/api/favorite/favoriteNumber", variables).then((response) => {
      console.log(response);
      if (response.data.success) {
      } else {
        alert("Failed to get favorite number information");
      }
    });
  }, []);
  return (
    <div>
      <button
        onClick={() => {
          alert("Added to favorites successfully");
        }}
      >
        Favorite
      </button>
    </div>
  );
}

export default Favorite;
