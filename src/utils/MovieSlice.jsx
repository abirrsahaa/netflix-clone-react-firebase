import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
  name: "MovieSlice",
  initialState: {
    NowPlayingMovie: null,
    TopRatedMovie: null,
    PopularMovie: null,
    UpcomingMovie: null,
    MovieTrailer: null,
  },
  reducers: {
    setNowPlayingMovie: (state, action) => {
      state.NowPlayingMovie = action.payload;
    },
    setTopRatedMovie: (state, action) => {
      state.TopRatedMovie = action.payload;
    },
    setPopularMovie: (state, action) => {
      state.PopularMovie = action.payload;
    },
    setUpcomingMovie: (state, action) => {
      state.UpcomingMovie = action.payload;
    },
    setMovieTrailer: (state, action) => {
      state.MovieTrailer = action.payload;
    },
  },
});

export const {
  setNowPlayingMovie,
  setTopRatedMovie,
  setPopularMovie,
  setUpcomingMovie,
  setMovieTrailer,
} = MovieSlice.actions;

export default MovieSlice.reducer;
