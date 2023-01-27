import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../Common/API/MovieApi";
import { movieApiKey } from "../../Common/API/MovieApiKey";
export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "War";
    const response = await movieApi.get(
      `?apiKey=${movieApiKey}&s=${movieText}&type=movie`
    );
    // console.log("Response from API  : ", response);
    return response.data;
  }
);
export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
    const seriesText = "War";
    const response = await movieApi.get(
      `?apiKey=${movieApiKey}&s=${seriesText}&type=series`
    );
    // console.log("Response from API  : ", response);
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending...");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully...");
      return { ...state, movies: payload };
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully...");
      return { ...state, shows: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected...");
    },
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export default movieSlice.reducer;
