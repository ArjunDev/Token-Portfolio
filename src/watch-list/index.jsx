import React, { useState } from "react";
import WatchListHeader from "./watch-list-header";
import WatchListTable from "./watch-list-table";
import CustomModal from "../modal";
import { useDispatch } from "react-redux";
import { addToWatchlist } from "../store/watchlistSlice";

const WatchListCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  //to send it the store
  const handleAddToWatchlist = (coins) => {
    coins.forEach((coin) => {
      dispatch(addToWatchlist(coin));
    });
    setIsOpen(false);
    console.log(coins)
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-auto lg:w-[1384px]">
      <WatchListHeader 
        onOpenModal={() => setIsOpen(true)} />

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
