import React from "react";
import { BiSolidLike } from "react-icons/bi";
import Review from "./Review";

const ExpandedRow = ({ book }) => {
  return (
    <tr className="bg-slate-100 w-full">
      <td colSpan="6">
        <div className="collapse collapse-open grid grid-cols-5 px-14 py-2">
          <div className="col-span-1 flex flex-col gap-4 items-center py-5">
            <div className="relative">
              <img
                className="w-40 h-auto"
                src="/book-cover.webp"
                alt={book.title}
              />
              <p className="absolute top-10 px-3 font-bold   text-center font-serif  ">{book.title}</p>
              <p className="absolute top-20 px-3 py-3 text-center italic  ">{book.author}</p>
            </div>
            <p className="bg-blue-600 flex gap-2  px-2 py-1 rounded-full">
              <span className="text-white font-bold">{book.likes}</span>
              <BiSolidLike className="text-white" size={18} />
            </p>
          </div>
          <div className="col-span-4 px-6">
            <div className=" font-medium text-lg">
              <h3 className="font-bold font-serif text-xl">{book.title}</h3>
              <p>
                by <span className="italic">{book.author}</span>
              </p>
              <p className="text-gray-500 font-thin">{book.publisher}</p>
            </div>
            <div className="flex flex-col gap-3 mt-4">
              <h3 className="tetx-2xl font-bold">Review</h3>
              {book?.reviews.map((review, index) => (
                <div key={index} className="flex flex-col  gap-1 ">
                  <p>
                    Review from{" "}
                    <span className="text-gray-600"> - {review.reviewer}</span>
                  </p>
                  <Review review={review} index={index} />

                  <p className="italic">{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default ExpandedRow;
