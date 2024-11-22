import React, { useState } from "react";
import { tableData } from "../../public/assets";
import ExpandedRow from "./ExpandedRow";
import useBookStore from "../store/bookStore";
import { IoIosArrowDown } from "react-icons/io";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchBooks } from "../middleware/apiFetching";
const Table = () => {
  const [expandedRow, setExpandedRow] = useState(null);
  const { averageLikes, averageReviews, seed, lang } = useBookStore();

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError,
    error,
  } = useInfiniteQuery({
    queryKey: ["books", seed, lang, averageLikes, averageReviews],
    queryFn: ({ pageParam = 1 }) =>
      fetchBooks({
        pageParam,
        seed,
        lang,
        avgLikes: averageLikes,
        avgReviews: averageReviews,
      }),
    getNextPageParam: (lastPage, pages) =>{
      if (lastPage.books.length < 10) {
        return undefined; 
      }
      return pages.length + 1;
    }
  });

  const books = data?.pages?.flatMap((page) => page.books) || [];

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    console.log(scrollHeight - scrollTop, clientHeight, hasNextPage);
    if (
      scrollHeight - scrollTop <= clientHeight && 
      hasNextPage &&
      !isFetchingNextPage
    ) {
      console.log("hasNextPage", hasNextPage);
      fetchNextPage();
    }
  };
  return (
    <div
       className="overflow-x-auto h-[90vh] px-20 mt-10 bg-white overflow-y-auto"
      onScroll={handleScroll}
    >
      <table className="table w-full border ">
        {/* Table Header */}
        <thead className="font-bold text-gray-900 sticky top-0 bg-white z-10 border-b-2  border-gray-900 py-2 ">
          <tr className="">
            <th>#</th>
            <th>ISBN</th>
            <th>Title</th>
            <th>Author(s)</th>
            <th>Publisher</th>
          </tr>
        </thead>

        {/* Table Body */}
        {isError && <p className="p-4 text-xl text-red-500">{error}</p>}
        <tbody>
          {books.map((book, index) => (
            <React.Fragment key={index}>
              <tr
                className={`cursor-pointer font-semibold py-2 ${
                  expandedRow === index ? "bg-blue-200" : ""
                }`}
                onClick={() =>
                  setExpandedRow(expandedRow === index ? null : index)
                }
              >
                <td className="font-extrabold text-md py-3">{book.id}</td>
                <td>{book.isbn}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td className="flex justify-between">
                  {book.publisher}{" "}
                  <IoIosArrowDown
                    className={`w-5 h-5 shrink-0 transform transition-transform duration-300 ${
                      expandedRow === index ? "rotate-180" : ""
                    }`}
                  />
                </td>
                <td></td>
              </tr>
              {expandedRow === index && <ExpandedRow book={book} />}
            </React.Fragment>
          ))}
          {isFetchingNextPage && (
            <div className="text-center py-4">Loading more books...</div>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
