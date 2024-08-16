import React from "react";

const Pagination = ({
  products,
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalBtns = Math.ceil(totalItems / itemsPerPage);

  const callPreviousPage = () => {
    onPageChange(Math.max(currentPage - 1, 0));
  };

  const callNextPage = () => {
    onPageChange(Math.min(currentPage + 1, totalBtns - 1));
  };

  const btnArray = Array.from({ length: totalBtns }, (_, i) => i + 1);

  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={callPreviousPage}
        disabled={currentPage === 0}
        className="px-4 py-2 mx-1 bg-blue-500 text-white rounded disabled:opacity-50"
      >
        Prev
      </button>
      {btnArray.map((item, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index)}
          className={`px-4 py-2 mx-1 ${
            currentPage === index
              ? "bg-blue-700 text-white"
              : "bg-gray-200 text-gray-700"
          } rounded`}
        >
          {item}
        </button>
      ))}
      <button
        onClick={callNextPage}
        disabled={currentPage === totalBtns - 1}
        className="px-4 py-2 mx-1 bg-blue-500 text-white rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
