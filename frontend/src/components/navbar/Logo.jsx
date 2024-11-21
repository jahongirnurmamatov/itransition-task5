import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <img src={"./logo.png"} className="w-10 h-10" alt="" />
      <p className="text-green-600 font-bold">
        good<span className="text-slate-700">Reads</span>
      </p>
    </div>
  );
};

export default Logo;
