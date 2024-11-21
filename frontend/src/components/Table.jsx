import React, { useState } from "react";
import { tableData } from "../../public/assets";
import ExpandedRow from "./ExpandedRow";
import useBookStore from "../store/bookStore";
import { IoIosArrowDown } from "react-icons/io";
const Table = () => {
  const [expandedRow, setExpandedRow] = useState(null);
  const { averageLikes, averageReviews, seed, lang } = useBookStore();

  return (
    <div className="overflow-x-auto px-20 mt-10 bg-white">
      <table className="table w-full border ">
        {/* Table Header */}
        <thead className="font-bold text-gray-900 sticky top-0 bg-white z-10 ">
          <tr className="border-b-2 border-gray-900 py-2">
            <th>#</th>
            <th>ISBN</th>
            <th>Title</th>
            <th>Author(s)</th>
            <th>Publisher</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {tableData.map((book, index) => (
            <React.Fragment key={book.id}>
              {/* Collapsible Row */}
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

              {/* Accordion for Expanded Details */}
              {expandedRow === index && <ExpandedRow book={book} />}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
