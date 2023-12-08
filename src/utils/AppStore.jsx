import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./User";

export const store = configureStore({
  reducer: {
    User: userReducer,
  },
});
