import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../Features/Movies/movieSlice";

export const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
});
