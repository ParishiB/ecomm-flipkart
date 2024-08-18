// import React from "react";
// import { GrFormNextLink } from "react-icons/gr";
// import { IoArrowBackSharp } from "react-icons/io5";
// const Pagination = ({
//   products,
//   totalItems,
//   itemsPerPage,
//   currentPage,
//   onPageChange,
// }) => {
//   const totalBtns = Math.ceil(totalItems / itemsPerPage);

//   const callPreviousPage = () => {
//     onPageChange(Math.max(currentPage - 1, 0));
//   };

//   const callNextPage = () => {
//     onPageChange(Math.min(currentPage + 1, totalBtns - 1));
//   };

//   const btnArray = Array.from({ length: totalBtns }, (_, i) => i + 1);

//   return (
//     <div className="flex justify-center mt-4">
//       <button
//         onClick={callPreviousPage}
//         disabled={currentPage === 0}
//         className="px-3 py-1 mx-1 bg-gray-300 text-black rounded-full disabled:opacity-50"
//       >
//         <IoArrowBackSharp />
//       </button>
//       {btnArray.map((item, index) => (
//         <button
//           key={index}
//           onClick={() => onPageChange(index)}
//           className={`px-3 py-1 mx-1 rounded-full ${
//             currentPage === index
//               ? "bg-blue-700 text-white"
//               : "bg-gray-200 text-gray-700"
//           } rounded`}
//         >
//           {item}
//         </button>
//       ))}
//       <button
//         onClick={callNextPage}
//         disabled={currentPage === totalBtns - 1}
//         className="px-3 py-1 mx-1 bg-gray-300 text-black rounded-full disabled:opacity-50"
//       >
//         <GrFormNextLink />
//       </button>
//     </div>
//   );
// };

// export default Pagination;

import React from "react";
import { GrFormNextLink } from "react-icons/gr";
import { IoArrowBackSharp } from "react-icons/io5";
import usePagination from "../../hooks/usePagination";

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const {
    currentPage: page,
    totalPages,
    goToPreviousPage,
    goToNextPage,
    goToPage,
  } = usePagination(totalItems, itemsPerPage, currentPage);

  const btnArray = Array.from({ length: totalPages }, (_, i) => i + 1);

  // Sync external state with hook state
  React.useEffect(() => {
    onPageChange(page);
  }, [page, onPageChange]);

  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={goToPreviousPage}
        disabled={page === 0}
        className="px-3 py-1 mx-1 bg-gray-300 text-black rounded-full disabled:opacity-50"
      >
        <IoArrowBackSharp />
      </button>
      {btnArray.map((item, index) => (
        <button
          key={index}
          onClick={() => goToPage(index)}
          className={`px-3 py-1 mx-1 rounded-full ${
            page === index
              ? "bg-blue-700 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {item}
        </button>
      ))}
      <button
        onClick={goToNextPage}
        disabled={page === totalPages - 1}
        className="px-3 py-1 mx-1 bg-gray-300 text-black rounded-full disabled:opacity-50"
      >
        <GrFormNextLink />
      </button>
    </div>
  );
};

export default Pagination;
