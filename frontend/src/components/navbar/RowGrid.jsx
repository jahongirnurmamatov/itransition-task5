import React, { useState } from "react";
import { FiGrid } from "react-icons/fi";
import { HiBarsArrowDown } from "react-icons/hi2";
import useNavStore from "../../store/navbarStore";

const RowGrid = () => {
  const {grid,setGrid} = useNavStore();

  return (
    <div className="flex gap-0 bg-gray-400 text-white rounded-lg p-1">
      <button
        className={`w-full flex justify-center items-center p-2 rounded-md  transition-colors ${
          grid === "row" ? "bg-blue-600 text-white" : "bg-gray-600 text-gray-300"
        }`}
        onClick={() => setGrid("row")}
      >
        <HiBarsArrowDown className="md:size-5 size-3" />
      </button>

      <button
        className={`w-full flex justify-center items-center p-2 rounded-md transition-colors ${
          grid === "grid" ? "bg-blue-600 text-white" : "bg-gray-600 text-gray-300"
        }`}
        onClick={() => setGrid("grid")}
      >
        <FiGrid className="md:size-5 size-3" />
      </button>
    </div>
  );
};

export default RowGrid;
