import React, { useState, useEffect } from "react";
import axios from "../axios";
import "../Styling/Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const img_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    const getMovies = async () => {
      const res = await axios.get(fetchUrl);
      setMovies(res.data.results);
      return res;
    };
    getMovies();
  }, [fetchUrl]);
  console.log(movies);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      //https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(
        movie?.name ||
          movie?.title ||
          movie?.original_name ||
          movie?.original_title ||
          movie?.source
      )
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__imgs">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__img ${isLargeRow && "large_row_img"}`}
            src={`${img_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
