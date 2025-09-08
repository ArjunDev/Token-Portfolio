import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeFromWatchlist } from "../store/watchlistSlice";
import DeleteIcon from '@mui/icons-material/Delete';

const ActionCell = ({ coin }) => {
  const dispatch = useDispatch();
  const [showDeleteBtn, setShowDeleteBtn] = useState(false);


  const toggleDeleteBtn = () => {
    setShowDeleteBtn((prev) => !prev);
  };

  const handleDelete = () => {
    dispatch(removeFromWatchlist(coin.id));
  };

  return (
    <div className="flex items-center justify-between gap-2">

      {/* Delete Btn */}
      {showDeleteBtn && (
        <button
          onClick={handleDelete}
          className="p-1 px-2 text-xs bg-red-500 rounded text-white font-medium hover:cursor-pointer hover:bg-gray-400"
        ><DeleteIcon fontSize="small" className="hover:text-red-500"/></button>
      )}

      {/* Toggle Delete Btn */}
      <button
        onClick={toggleDeleteBtn}
        className={`p-1 px-2 text-xs rounded text-white font-medium hover:cursor-pointer ${showDeleteBtn && "bg-gray-500 p-1"}`}
      >...</button>
    </div>
  );
};

export default ActionCell;
