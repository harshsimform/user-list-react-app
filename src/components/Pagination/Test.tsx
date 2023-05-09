import React from "react";

interface Props {
  currentPage: number;
  totalPage: number;
  onPageChange: (page: number) => void;
}

const Test: React.FC<Props> = ({ currentPage, totalPage, onPageChange }) => {
  const pageNumbers = Array.from(Array(totalPage).keys()).map((num) => num + 1);

  // const pageNumbers = [...Array(totalPage + 1).keys()].slice(1);

  return (
    <div>
      {pageNumbers.map((page) => (
        <button
          key={page}
          className={`btn ${
            currentPage === page
              ? "text-sm font-medium leading-none cursor-pointer text-indigo-700 border-t border-indigo-400 pt-3 mr-4 px-2"
              : "text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2"
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Test;
