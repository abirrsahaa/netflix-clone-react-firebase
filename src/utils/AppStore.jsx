import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./User";
import MovieReducer from "./MovieSlice";

export const store = configureStore({
  reducer: {
    User: userReducer,
    Movie: MovieReducer,
  },
});
