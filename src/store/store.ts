import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.ts";
import moviesReducer from "./moviesSlice.ts";

export const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
