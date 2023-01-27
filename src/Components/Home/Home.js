import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../Common/API/MovieApi";
import { movieApiKey } from "../../Common/API/MovieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../../Features/Movies/movieSlice";

const Home = () => {
  const movieText = "War";
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovie = async () => {
      const response = await movieApi
        .get(`?apiKey=${movieApiKey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log(err);
        });
      console.log("Response from API  : ", response);
      dispatch(addMovies(response.data));
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
