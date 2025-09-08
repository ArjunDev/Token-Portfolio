import React from "react";
import StarIcon from "@mui/icons-material/Star";
import LoopIcon from "@mui/icons-material/Loop";
import AddIcon from "@mui/icons-material/Add";

const WatchListHeader = ({ onOpenModal }) => {

  
  return (
    <div className="w-[370px] h-9 lg:w-full flex justify-between items-start">
      <span className="text-white font-medium flex items-center gap-1"
      ><StarIcon fontSize="small" className="text-[rgba(169,232,1,1)]" />WatchList</span>

      <div className="flex gap-4">
        <button className="bg-[#FFFFFF0A] rounded-lg h-full text-xs p-1.5 px-2 text-white flex items-center gap-1 hover:cursor-pointer"
        ><LoopIcon fontSize="small" className="text-[rgba(161,161,170,1)]" />Refresh Prices</button>
        <button
          onClick={onOpenModal}
          className="bg-[rgba(169,232,1,1)] rounded-lg h-full text-xs p-1 px-2 hover:cursor-pointer flex items-center gap-1"
        ><AddIcon fontSize="small" className="text-black" 
        />Add Token</button>
      </div>
    </div>
  );
};

export default WatchListHeader;
