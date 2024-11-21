import React from "react";
import { IoShuffle } from "react-icons/io5";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";
import SliderCopm from "./SliderCopm";
import useBookStore from "../../store/bookStore";

const Navbar = () => {
  const {
    seed,
    setSeed,
    lang,
    setLang,
    averageLikes,
    setAverageLikes,
    averageReviews,
    setAverageReviews,
  } = useBookStore();

  return (
    <div className="flex items-center bg-base-200 w-full py-5 px-10 justify-between  sticky top-0 z-50 shadow-md">
      <Logo />
      <div className="flex items-center gap-10">
        <div className="bg-white border-1 border-gray-400 w-[200px] py-2 flex items-center justify-between px-3 rounded-lg ">
          <div className="flex flex-col gap-0 text-start">
            <p className="text-sm text-gray-500">Seed</p>
            <input
              className="textarea-lg p-0 outline-none border-none w-full text-sm"
              placeholder="Enter seed or shuffle..."
              value={seed}
              onChange={(e) => setSeed(e.target.value)}
            />
          </div>
          <IoShuffle size={24}/>
        </div>
        <div className="w-40 ">
          <p className="text-gray-500 text-start text-sm">Likes</p>
          <SliderCopm />
        </div>
        <div className="bg-white border-1 border-gray-400 w-[200px] py-1 px-3 rounded-lg ">
          <p className="text-gray-500 text-start text-sm -mb-3">Review</p>
          <input
            type="number"
            min={0}
            max={5}
            step={0.1}
            value={averageReviews}
            onChange={(e) => setAverageReviews(e.target.value)}
            className="border-none bg-inherit w-full outline-none text-lg"
          />
        </div>
      </div>

      <div className="flex gap-10 items-center">
        <select
          className="select select-info max-w-30 "
          value={lang}
          onChange={(e) => setLang(e.target.value)}
        >
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
          <option value="de">German</option>
          <option value="it">Italian</option>
          <option value="ru">Russian</option>
        </select>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
