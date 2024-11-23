import React from "react";

const Logo = () => {
  return (
    <div className="items-center gap-3 xl:flex ">
      <img src={"./logo.svg"} className="w-10 h-10 fill-green-700 hidden sm:block" alt="" />
      <p className=" text-slate-700 text-3xl font-bold hidden  xl:flex">
        good<span className="text-green-600">Reads</span>
      </p>
    </div>
  );
};

export default Logo;
