import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <img src={"./logo.svg"} className="w-10 h-10 fill-green-700" alt="" />
      <p className="text-green-600 text-3xl font-bold ">
        good<span className="text-slate-700">Reads</span>
      </p>
    </div>
  );
};

export default Logo;
