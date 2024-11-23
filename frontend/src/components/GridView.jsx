import React from "react";
import useBookStore from "../store/bookStore";

const GridView = () => {
  const { books } = useBookStore();
  return (
    <div className="w-full px-20 py-10">
      <div className="grid xl:grid-cols-3 2xl:grid-cols-4 md:grid-cols-2 lg:gap-8 md:gap-4 gap-5 ">
        {books.map((book) => (
          <div className="card  card-side bg-base-100 md:w-[350px]  shadow-xl">
            <figure className="flex-1">
              <img
                src="./book-cover.webp"
                className="object-contain w-full h-auto"
                alt=""
              />
            </figure>
            <div className="card-body flex-1 ">
              <h2 className="card-title  font-bold font-serif">{book.title}</h2>
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
