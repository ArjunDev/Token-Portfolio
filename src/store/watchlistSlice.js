import { createSlice } from "@reduxjs/toolkit";

// Load from localStorage if available
const stored = JSON.parse(localStorage.getItem("watchlist"));

const initialState = {
  items: stored?.items || [],
  lastUpdated: stored?.lastUpdated || "",
};

const saveToLocalStorage = (state) => {
  localStorage.setItem("watchlist",JSON.stringify(
    {
      items: state.items,
      lastUpdated: state.lastUpdated,
    }));
};

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    setWatchlist: (state, action) => {
      state.items = action.payload;

      saveToLocalStorage(state);
      state.lastUpdated = new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      });

    },
    addToWatchlist: (state, action) => {
      state.items.push(action.payload);

      state.lastUpdated = new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      });

      saveToLocalStorage(state);
    },
    removeFromWatchlist: (state, action) => {
      state.items = state.items.filter((coin) => coin.id !== action.payload);

      // update lastUpdated
      state.lastUpdated = new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      });

      saveToLocalStorage(state);
    },
    updateHoldings: (state, action) => {
      const { id, holdings } = action.payload;
      const coin = state.items.find((c) => c.id === id);

      if (coin) {
        coin.holdings = holdings;
        coin.value = holdings * coin.price;

        // update lastUpdated
        state.lastUpdated = new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true,
        });
        saveToLocalStorage(state);
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
