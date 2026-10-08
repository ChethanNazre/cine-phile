import React, { useEffect, useState } from "react";
import { API_URL, IMAGE_BASE_URL } from "../../Config";
import MainImage from "../LandingPage/Sections/MainImage";
import MovieInfo from "./Sections/MovieInfo";
import GridCards from "../commons/GridCards";
import { Row } from "antd";
import Favorite from "./Sections/Favorite";

function MovieDetail(props) {
  let movieId = props.match.params.movieId;
  const [Movie, setMovie] = useState([]);
  const [Casts, setCasts] = useState([]);
  const [ActorToggle, setActorToggle] = useState(false);

  useEffect(() => {
    let endpointCrew = `${API_URL}/${movieId}/credits`;
    let endpointInfo = `${API_URL}/${movieId}`;

    fetch(endpointInfo)
      .then((response) => response.json())
      .then((response) => {
        if (response.success) {
          setMovie(response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });

    fetch(endpointCrew)
      .then((response) => response.json())
      .then((response) => {
        if (response.success) {
          setCasts(response.data.cast || []);
        }
      })
      .catch((error) => {
        console.error("Error fetching movie credits:", error);
      });
  }, [movieId]);

  const toggleActorView = () => {
    setActorToggle(!ActorToggle);
  };

  return (
    <div>
      <MainImage
        image={`${IMAGE_BASE_URL}w1280${Movie.backdrop_path}`}
        title={Movie.original_title}
        text={Movie.overview}
      />
      <div style={{ width: "85%", margin: "1rem auto" }}>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Favorite
            movieInfo={Movie}
            movieId={movieId}
            userFrom={localStorage.getItem("userId")}
          />
        </div>
        <MovieInfo movie={Movie} movieId={movieId} userFrom={"userId"} />
        <br />
        <div style={{ display: "flex", justifyContent: "center", margin: "2rem" }}>
          <button onClick={toggleActorView}> Toggle Actor View</button>
        </div>

        {ActorToggle && (
          <Row gutter={[16, 16]}>
            {Casts &&
              Casts.map((cast, index) => (
                <React.Fragment key={index}>
                  <GridCards
                    image={
                      cast.profile_path ? `${IMAGE_BASE_URL}w500${cast.profile_path}` : null
                    }
                    characterName={cast.name}
                  />
                </React.Fragment>
              ))}
          </Row>
        )}
      </div>
    </div>
  );
}

export default MovieDetail;
