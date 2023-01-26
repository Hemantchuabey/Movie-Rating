import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../Common/API/MovieApi";
import { movieApiKey } from "../../Common/API/MovieApiKey";

const Home = () => {
  useEffect(() => {
    const fetchMovie = async () => {
      const movieText = "War";
      const response = await movieApi
        .get(`?apiKey=${movieApiKey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log(err);
        });
      console.log("Response from API  : ", response);
    };
    fetchMovie();
  }, []);
  return (
    <div className="banner-img">
      <MovieListing />
    </div>
  );
};

export default Home;
