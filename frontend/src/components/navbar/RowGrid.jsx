import React, { useState } from "react";
import { FiGrid } from "react-icons/fi";
import { HiBarsArrowDown } from "react-icons/hi2";

const RowGrid = () => {
  const [active, setActive] = useState("row"); // Default to "row" or "grid"

  return (
    <div className="flex gap-0 bg-gray-400 text-white rounded-lg p-1">
      {/* Row Button */}
      <button
        className={`w-full flex justify-center items-center p-2 rounded-md  transition-colors ${
          active === "row" ? "bg-blue-600 text-white" : "bg-gray-600 text-gray-300"
        }`}
        onClick={() => setActive("row")}
      >
        <HiBarsArrowDown className="md:size-5 size-3" />
      </button>

      {/* Grid Button */}
      <button
        className={`w-full flex justify-center items-center p-2 rounded-md transition-colors ${
          active === "grid" ? "bg-blue-600 text-white" : "bg-gray-600 text-gray-300"
        }`}
        onClick={() => setActive("grid")}
      >
        <FiGrid className="md:size-5 size-3" />
      </button>
    </div>
  );
};

export default RowGrid;
