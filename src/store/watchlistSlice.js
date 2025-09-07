import { createSlice } from "@reduxjs/toolkit";

// Load from localStorage if available
const initialState = {
  items: JSON.parse(localStorage.getItem("watchlist")) || [],
};

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    setWatchlist: (state, action) => {
      state.items = action.payload;
      localStorage.setItem("watchlist", JSON.stringify(state.items));
    },
    addToWatchlist: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem("watchlist", JSON.stringify(state.items));
    },
    removeFromWatchlist: (state, action) => {
      state.items = state.items.filter((coin) => coin.id !== action.payload);
      localStorage.setItem("watchlist", JSON.stringify(state.items));
    },
    updateHoldings: (state, action) => {
      const { id, holdings } = action.payload;
      const coin = state.items.find((c) => c.id === id);
      if (coin) {
        coin.holdings = holdings;
        coin.value = holdings * coin.price;
        localStorage.setItem("watchlist", JSON.stringify(state.items));
      }
    },
  },
});

export const {
  setWatchlist,
  addToWatchlist,
  removeFromWatchlist,
  updateHoldings,
} = watchlistSlice.actions;

export default watchlistSlice.reducer;
