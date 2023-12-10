import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./User";
import MovieReducer from "./MovieSlice";
import GptReducer from "./GptSlice";
import ConfigReducer from "./Config";

export const store = configureStore({
  reducer: {
    User: userReducer,
    Movie: MovieReducer,
    Gpt: GptReducer,
    Config: ConfigReducer,
  },
});
