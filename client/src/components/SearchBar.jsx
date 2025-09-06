// src/components/SearchBar.jsx
import React from "react";
import { TravelExplore } from "@mui/icons-material";

const SearchBar = ({ search, handleChange }) => {
  return (
    <div className="mt-5 flex justify-center">
      <div
        className="border-2 border-orange-500 rounded-4xl p-1 flex items-center w-full max-w-md
                   transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:border-pink-800"
      >
        <input
          type="text"
          value={search}
          onChange={handleChange}
          placeholder="Search..."
          className="text-white p-2 flex-1 focus:outline-none focus:ring-0 bg-transparent placeholder-gray-400"
        />
        <span className="ml-2 px-2 cursor-pointer inline-block 
                         transform transition-transform duration-300 
                         hover:scale-125 hover:rotate-12 active:scale-95">
          <TravelExplore className="text-purple-500 hover:text-pink-500 transition-colors duration-300" />
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
