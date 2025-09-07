import React, { useState } from "react";
import WatchListHeader from "./watch-list-header";
import WatchListTable from "./watch-list-table";
import CustomModal from "../modal";
import { useDispatch } from "react-redux";
import { addToWatchlist } from "../store/watchlistSlice";

const WatchListCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleAddToWatchlist = (coins) => {
    const formatCoinData = (coin) => ({
      id: coin.id,
      name: coin.name,
      symbol: coin.symbol,
      image: coin.small, // logo
      price: coin.data?.price ?? 0,
      change24h: coin.data?.price_change_percentage_24h?.usd ?? 0,
      sparkline: coin.data?.sparkline ?? null,
      holdings: 0,
      value: 0,
    });

    coins.forEach((coin) => {
      const formatted = formatCoinData(coin);
      dispatch(addToWatchlist(formatted));
    });

    setIsOpen(false);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-auto lg:w-[1384px]">
      <WatchListHeader onOpenModal={() => setIsOpen(true)} />

      <WatchListTable />

      <CustomModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onAdd={handleAddToWatchlist}
      />
    </div>
  );
};

export default WatchListCard;
