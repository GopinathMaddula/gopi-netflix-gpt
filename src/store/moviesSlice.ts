import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMOvies: {},
  },
  reducers: {
    addNowPlayingMovies: (state, action: PayloadAction) => {
      state.nowPlayingMOvies = action?.payload;
    },
  },
});

export const { addNowPlayingMovies } = moviesSlice?.actions;
export default moviesSlice?.reducer;
