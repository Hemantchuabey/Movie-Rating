import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";

import { fetchAsyncMovies } from "../../Features/Movies/movieSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies());
  }, [dispatch]);
  return (
    <div className="banner-img">
      <MovieListing />
    </div>
  );
};

export default Home;
