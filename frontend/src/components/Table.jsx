import React, { useEffect, useState } from "react";
import { tableData } from "../../public/assets";
import ExpandedRow from "./ExpandedRow";
import useBookStore from "../store/bookStore";
import { IoIosArrowDown } from "react-icons/io";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchBooks } from "../middleware/apiFetching";
import useNavStore from "../store/navbarStore";
const Table = () => {
  const [expandedRow, setExpandedRow] = useState(null);
  const {setBooks} = useBookStore();
  const { averageLikes, averageReviews, seed, lang } = useNavStore();

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
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.books.length < 10) {
        return undefined;
      }
      return pages.length + 1;
    },
  });

  const books = data?.pages?.flatMap((page) => page.books) || [];
 

  useEffect(()=>{
   if(books)  setBooks(books)
  },[data])
  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;

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
      className="overflow-x-auto h-[90vh] lg:px-20 md:px-10 px-0 py-2 mt-10 bg-base-100 overflow-y-auto"
      onScroll={handleScroll}
    >
      <table className="table w-full border-t ">
        {/* Table Header */}
        <thead className="font-extrabold z-12 texts-accent-content  sticky top-0 border-b-2 bg-base-100 border-gray-900 py-2 ">
          <tr className="">
            <th>#</th>
            <th>ISBN</th>
            <th>Title</th>
            <th>Author(s)</th>
            <th className="md:block hidden">Publisher</th>
          </tr>
        </thead>

        {/* Table Body */}
        {isError && <p className="p-4 text-xl text-red-500">{error}</p>}
        <tbody>
          {books.map((book, index) => (
            <React.Fragment key={index}>
              <tr
                className={`cursor-pointer  py-2 ${
                  expandedRow === index ? "bg-gray-400 dark:text-gray-700" : ""
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
                  <p className="md:block hidden">{book.publisher}</p>{" "}
                  <IoIosArrowDown
                    className={`w-5 h-5 shrink-0 transform transition-transform duration-300 ${
                      expandedRow === index ? "rotate-180" : ""
                    }`}
                  />
                </td>
                
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
