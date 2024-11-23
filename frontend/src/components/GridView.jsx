import React from "react";
import useBookStore from "../store/bookStore";

const GridView = () => {
  const { books } = useBookStore();
  return (
    <div className="w-full lg:px-20 py-10 md:px-10 sm:px-5 px-0">
      <div className="grid xl:grid-cols-3 2xl:grid-cols-4 md:grid-cols-2 lg:gap-8 md:gap-4 gap-5 ">
        {books.map((book) => (
          <div className="card  card-side bg-base-100 md:w-[350px] w-full shadow-xl">
            <figure className="flex-1">
              <div className="relative">
                <img
                  src="./book-cover.webp"
                  className="object-contain w-full h-auto"
                  alt=""
                />
                <div className="absolute top-10 left-4 text-gray-800 text-center flex flex-col gap-2">
                  <p className="">
                    {book.title}
                  </p>
                  <p className=" italic text-gray-600">
                    {book.auhtor}
                  </p>
                </div>
              </div>
            </figure>
            <div className="card-body flex-1 md:text-sm text-md bg-base-300">
              <h2 className="card-title  font-bold font-serif  md:text-sm text-md">
                {book.title}
              </h2>
              <p className="italic font-thin">{book.author}</p>
              <p className="text-info">{book.publisher}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridView;
