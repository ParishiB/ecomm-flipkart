import { useState } from "react";

const usePagination = (totalItems, itemsPerPage, initialPage = 0) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return {
    currentPage,
    totalPages,
    goToPreviousPage,
    goToNextPage,
    goToPage,
  };
};

export default usePagination;
