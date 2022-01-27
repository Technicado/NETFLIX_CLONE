import React from "react";
import Row from "./Row";
import apiRequests from "../apiRequests";
import Banner from "./Banner";
import NavBar from "./NavBar";

const Homepage = () => {
  return (
    <div>
      <NavBar />

      <Banner />

      <Row
        title="NETFLIX ORIGINAL"
        fetchUrl={apiRequests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={apiRequests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={apiRequests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={apiRequests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={apiRequests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={apiRequests.fetchHorrorMovies} />
      <Row title="Romantic Movies" fetchUrl={apiRequests.fetchRomanceMovies} />
      <Row
        title="Documentary Movies"
        fetchUrl={apiRequests.fetchDocumentaries}
      />
    </div>
  );
};

export default Homepage;
