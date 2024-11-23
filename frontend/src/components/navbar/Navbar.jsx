import React from "react";
import { IoShuffle } from "react-icons/io5";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";
import SliderCopm from "./SliderCopm";
import useBookStore from "../../store/bookStore";
import { FaFileCsv } from "react-icons/fa6";
import { CSVLink } from "react-csv";
import { IoSettings } from "react-icons/io5";
const Navbar = () => {
  const {
    seed,
    setSeed,
    lang,
    setLang,
    averageReviews,
    setAverageReviews,
    books,
  } = useBookStore();

  const shuffle = () => {
    setSeed(Math.floor(Math.random() * 1000000) + 1);
  };

  return (
    <>
      <div className="flex items-center bg-base-200 w-full py-5 px-10 justify-between  sticky top-0 z-50 shadow-md">
        <IoSettings
          className=" cursor-pointer size-8 md:hidden"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        />
        <Logo />
        <div className="md:flex items-center hidden lg:gap-6 gap-3">
          <div className="bg-base-100  border-1 border-gray-400 lg:w-[200px] w-[100px] py-2 flex items-center justify-between px-3 rounded-lg ">
            <div className="flex flex-col gap-0 text-start">
              <p className="text-sm text-gray-500">Seed</p>
              <input
                className="textarea-lg bg-base-100 p-0 outline-none border-none w-full text-sm"
                placeholder="Enter seed or shuffle..."
                value={seed}
                onChange={(e) => setSeed(e.target.value)}
              />
            </div>
            <IoShuffle onClick={shuffle} size={24} />
          </div>
          <div className="md:w-40 w-[100px] ">
            <p className="text-gray-500 text-start text-sm">Likes</p>
            <SliderCopm />
          </div>
          <div className="bg-base-100 border-1 border-gray-400 lg:w-[200px] w-[100px] py-3 px-3 rounded-lg ">
            <p className="text-gray-500 text-start text-sm -mb-1">Review</p>
            <input
              type="number"
              min={0}
              max={5}
              step={0.1}
              value={averageReviews}
              onChange={(e) => setAverageReviews(e.target.value)}
              className="border-none bg-inherit p-0 w-full outline-none text-md"
            />
          </div>
        </div>

        <div className="flex sm:gap-10 gap-4 items-center">
          <select
            className="select select-info md:max-w-30 w-15 "
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
          <div className="flex sm:gap-5 gap-2 ">
            <ThemeToggle />
            <CSVLink data={books}>
              <FaFileCsv className="size-7 cursor-pointer" />
            </CSVLink>
          </div>
        </div>
      </div>
      <dialog id="my_modal_1" className="modal ">
        <div className="modal-box bg-base-300">
          <h3 className="text-xl mb-5">Set parameters</h3>

          <div className="flex flex-col items-center gap-3 ">
            <div className="bg-base-100    w-[200px]  py-2 flex items-center justify-between px-3 rounded-lg ">
              <div className="flex flex-col gap-0 text-start">
                <p className="text-sm text-gray-500">Seed</p>
                <input
                  className="textarea-lg bg-base-100 p-0 outline-none border-none w-full text-sm"
                  placeholder="Enter seed or shuffle..."
                  value={seed}
                  onChange={(e) => setSeed(e.target.value)}
                />
              </div>
              <IoShuffle onClick={shuffle} size={24} />
            </div>
            <div className="md:w-40 w-[100px] ">
              <p className="text-gray-500 text-start text-sm">Likes</p>
              <SliderCopm />
            </div>
            <div className="bg-base-100 border-1 border-gray-400 w-[200px]  py-3 px-3 rounded-lg ">
              <p className="text-gray-500 text-start text-sm -mb-1">Review</p>
              <input
                type="number"
                min={0}
                max={5}
                step={0.1}
                value={averageReviews}
                onChange={(e) => setAverageReviews(e.target.value)}
                className="border-none bg-inherit p-0 w-full outline-none text-md"
              />
            </div>
          </div>
          <form method="dialog" >
            <button className="btn mt-5">Close</button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Navbar;
