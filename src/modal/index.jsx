import React, { useEffect } from "react";
import { useCustomFetch } from "../utilities/customFetch";
import StarIcon from '@mui/icons-material/Star';

const CustomModal = ({ isOpen, onClose }) => {

  if (!isOpen) return null;

  const { data, loading, error, refetch } = useCustomFetch();

  useEffect(() => {
    if (isOpen) {
      refetch("https://api.coingecko.com/api/v3/search/trending");
    }
  }, [isOpen]);

  console.log(data);

  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-black/25 bg-opacity-50 z-50 m-2"
      onClick={onClose} // closes when clicking outside
    >
      <div
        className="bg-[rgba(39,39,42,1)] w-[402px] lg:w-[640px] lg:h-[480px] rounded-2xl flex flex-col shadow-lg shadow-black border-[rgba(161,161,170,0.3)] border"
        onClick={(e) => e.stopPropagation()} // prevents closing when clicking inside
      >
        {/* Search Bar */}
        <input
          placeholder="Search Tokens (e.g., ETH, SOL)..."
          className="text-[rgba(161,161,170,1)] h-10 px-4 rounded-t-2xl bg-transparent outline-none"
        />

        {/* API Results Section */}
        <div className="flex flex-col p-2 h-[260px] lg:h-full border-[rgba(161,161,170,0.3)] border-b border-t overflow-y-auto ">

          <span className="text-[rgba(161,161,170,1)]">Trending</span>

          {loading && <p className="text-gray-400">Loading...</p>}

          {error && <p className="text-red-400">Error: {error}</p>}

          {data &&
            data.coins &&
            data.coins.map((coin, idx) => (
              <div key={idx} className="text-white text-xs py-1 flex justify-between items-center gap-2 hover:bg-[rgba(169,232,81,0.06))] hover:cursor-pointer hover:transition-colors">

                <div className="flex justify-center items-center gap-2">
                  <img 
                  src={coin.item.small} 
                  alt={coin.item.name}  
                  className="object-fill w-8 h-8 rounded-lg"
                />
                <span>{coin.item.name} ({coin.item.symbol})</span>
                </div>
                
                <div className="flex justify-center items-center gap-4 p-1">
                  <StarIcon fontSize="small" className=""/>
                  <input type="radio" className=""/>
                </div>
              </div>
            ))}
        </div>

        {/* Footer Button */}
        <div className="flex justify-end items-end p-2">
          <button className="flex justify-center items-center px-4 rounded-lg h-8 w-max bg-[rgba(169,232,1,1)] text-sm hover:cursor-pointer">Add to Wishlist
          </button>

        </div>
      </div>
    </div>
  );
};

export default CustomModal;
