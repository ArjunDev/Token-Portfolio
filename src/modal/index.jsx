import React, { useEffect, useState } from "react";
import { useCustomFetch } from "../utilities/customFetch";
import StarIcon from "@mui/icons-material/Star";

const CustomModal = ({ isOpen, onClose, onAdd }) => {
  if (!isOpen) return null;

  const { data, loading, error, refetch } = useCustomFetch();
  const [selectedCoins, setSelectedCoins] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [disableAddWatchlistBtn, setDisableAddWatchlistBtn] = useState(true);

  useEffect(() => {
    if (selectedCoins.length > 0) {
      setDisableAddWatchlistBtn(false);
    } else setDisableAddWatchlistBtn(true);
  }, [selectedCoins]);

  useEffect(() => {
    if (isOpen) {
      refetch("https://api.coingecko.com/api/v3/search/trending");
      setSelectedCoins([]); // reset when modal opens
      setSearchTerm(""); // clear search
    }
  }, [isOpen]);

  const toggleSelect = (coin) => {
    setSelectedCoins((prev) =>
      prev.some((c) => c.id === coin.item.id)
        ? prev.filter((c) => c.id !== coin.item.id) // deselect
        : [...prev, coin.item] // select
    );
  };

  // Filter coins by search term
  const filteredCoins =
    data?.coins?.filter(
      (coin) =>
        coin.item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        coin.item.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-black/25 bg-opacity-50 z-50 m-2"
      onClick={onClose}
    >
      <div
        className="bg-[rgba(39,39,42,1)] w-[402px] lg:w-[640px] lg:h-[480px] rounded-2xl flex flex-col shadow-lg shadow-black border-[rgba(161,161,170,0.3)] border"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Bar */}
        <input
          placeholder="Search Tokens (e.g., ETH, SOL)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="text-[rgba(161,161,170,1)] h-10 px-4 rounded-t-2xl bg-transparent outline-none"
        />

        {/* API Results Section */}
        <div className="flex flex-col p-2 h-[260px] lg:h-full border-[rgba(161,161,170,0.3)] border-b border-t overflow-y-auto">
          <span className="text-[rgba(161,161,170,1)]">Trending</span>

          {loading && <p className="text-gray-400">Loading...</p>}
          {error && <p className="text-red-400">Error: {error}</p>}
          {!loading && filteredCoins.length === 0 && (
            <p className="text-gray-400 text-sm">No matching coins found</p>
          )}

          {filteredCoins.map((coin, idx) => {
            const isSelected = selectedCoins.some(
              (c) => c.id === coin.item.id
            );
            return (
              <div
                key={idx}
                className={`text-white text-xs py-1 flex justify-between items-center gap-2 rounded-lg cursor-pointer transition-colors ${
                  isSelected
                    ? "bg-[rgba(169,232,81,0.15)]"
                    : "hover:bg-[rgba(169,232,81,0.06)]"
                }`}
                onClick={() => toggleSelect(coin)}
              >
                <div className="flex items-center gap-2">
                  <img
                    src={coin.item.small}
                    alt={coin.item.name}
                    className="object-fill w-8 h-8 rounded-lg"
                  />
                  <span>
                    {coin.item.name} ({coin.item.symbol})
                  </span>
                </div>

                <div className="flex items-center gap-2 p-1">
                  <StarIcon
                    fontSize="small"
                    className={`${
                      isSelected
                        ? "text-[rgba(169,232,1,1)]"
                        : "text-gray-500"
                    }`}
                  />
                  <input
                    type="checkbox"
                    checked={isSelected}
                    readOnly
                    className="cursor-pointer appearance-none w-4 h-4 rounded-full border border-gray-400 checked:bg-[rgba(169,232,1,1)] checked:border-transparent"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Button */}
        <div className="flex justify-end items-end p-2">
          <button
            className={`flex justify-center items-center px-4 rounded-lg h-8 w-max text-xs ${
              disableAddWatchlistBtn
                ? "border border-[rgba(161,161,170,0.5)] text-[rgba(161,161,170,0.5)] hover:cursor-not-allowed"
                : "bg-[rgba(169,232,1,1)] hover:cursor-pointer"
            }`}
            disabled={disableAddWatchlistBtn}
            onClick={() => onAdd(selectedCoins)}
          >Add to Watchlist ({selectedCoins.length})
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
