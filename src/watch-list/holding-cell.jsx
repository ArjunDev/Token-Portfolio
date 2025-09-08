import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateHoldings } from "../store/watchlistSlice";

const HoldingsCell = ({ coin }) => {
  const dispatch = useDispatch();
  const [localHoldings, setLocalHoldings] = useState(coin.holdings || 0);
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
        className="w-20 px-2 py-1 bg-transparent hover:shadow-xs shadow-[rgba(169,232,1,1)] border-[rgba(169,232,1,1)] rounded text-white hover:border"
      />
      {dirty && (
        <button
          onClick={handleSave}
          className="p-1.5 px-3 text-xs bg-[rgba(169,232,1,1)] rounded text-black hover:bg-[rgba(169,232,1,0.75)] font-medium hover:cursor-pointer"
        >Save</button>
      )}
    </div>
  );
};

export default HoldingsCell;
