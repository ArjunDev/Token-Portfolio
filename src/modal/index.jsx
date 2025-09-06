import React from "react";

const CustomModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-black/25 bg-opacity-50 z-50"
      onClick={onClose} // closes when clicking outside
    >
      <div
        className="bg-[rgba(39,39,42,1)] w-[402px] rounded-2xl flex flex-col shadow-lg shadow-black border-[rgba(161,161,170,0.3)] border"
        onClick={(e) => e.stopPropagation()} // prevents closing when clicking inside
      >
        <input
          placeholder="Search Tokens (e.g., ETH, SOL)..." 
          className="flex flex-col overflow-hidden text-[rgba(161,161,170,1)] h-8 p-4">
        </input>

        <div 
          className="flex flex-col p-4 h-20 border-[rgba(161,161,170,0.3)] border-b border-t"
        ></div>

        <div className="flex justify-end items-end p-2">
          <button className="flex justify-center items-center p-4 rounded-lg h-8 w-max bg-[rgba(169,232,1,1)] text-sm hover:cursor-pointer">Add to Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
