import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateHoldings } from "../store/watchlistSlice";

const HoldingsCell = ({ coin }) => {
  const dispatch = useDispatch();
  const [localHoldings, setLocalHoldings] = useState(coin.holdings || "");
  const [dirty, setDirty] = useState(false);

  const handleSave = () => {
    dispatch(
      updateHoldings({
        id: coin.id,
        holdings: parseFloat(localHoldings) || 0,
      })
    );
    setDirty(false); 
  };

  return (
    <div className="flex items-center gap-2">
      <input
        type="number"
        min="0"
        value={localHoldings}
        onChange={(e) => {
          setLocalHoldings(e.target.value);
          setDirty(true);
        }}
        className="w-20 px-2 py-1 bg-transparent border border-gray-600 rounded text-white"
      />
      {dirty && (
        <button
          onClick={handleSave}
          className="px-2 py-1 text-xs bg-blue-600 rounded text-white hover:bg-blue-500"
        >Save</button>
      )}
    </div>
  );
};

export default HoldingsCell;
