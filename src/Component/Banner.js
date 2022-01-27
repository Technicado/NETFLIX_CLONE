import React, { useState, useEffect } from "react";
import axios from "../axios";
import apiRequests from "../apiRequests";
import "../Styling/Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const getBanner = async () => {
      const res = await axios.get(apiRequests.fetchNetflixOriginals);
      setMovie(
        res.data.results[
          Math.floor(Math.random() * res.data.results.length - 1)
        ]
      );
      return res;
    };
    getBanner();
  }, []);

  console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__content">
        <div className="banner__title">
          <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        </div>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">MyList</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="fader" />
    </header>
  );
};

export default Banner;
