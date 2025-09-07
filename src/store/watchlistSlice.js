import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], 
};

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    setWatchlist: (state, action) => {
      state.items = action.payload; // replace all
    },
    addToWatchlist: (state, action) => {
      state.items.push(action.payload); // add one coin
    },
    removeFromWatchlist: (state, action) => {
      state.items = state.items.filter(
        (coin) => coin.id !== action.payload
      );
    },
  },
});

export const {
  setWatchlist,
  addToWatchlist,
  removeFromWatchlist,
} = watchlistSlice.actions;

export default watchlistSlice.reducer;
