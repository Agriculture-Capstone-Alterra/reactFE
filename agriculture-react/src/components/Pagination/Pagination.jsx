
import React from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa6';
import styles from './style.module.css';

const Pagination = ({ totalItems, itemsPerPage, currentPage, setCurrentPage }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handleEllipsisClick = (direction) => {
    if (direction === 'left' && currentPage > 2) {
      setCurrentPage((prevPage) => prevPage - 2);
    } else if (direction === 'right' && currentPage < totalPages - 1) {
      setCurrentPage((prevPage) => prevPage + 2);
    }
  };

  const generatePageNumbers = () => {
    const pageNumbers = [];
    const totalPagesToShow = Math.min(totalPages, 4);

    if (totalPages <= 6) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else if (currentPage <= 3) {
      for (let i = 1; i <= Math.min(totalPagesToShow, totalPages); i++) {
        pageNumbers.push(i);
      }
      if (totalPages > totalPagesToShow) {
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
    } else if (currentPage > 3 && currentPage <= totalPages - 2) {
      pageNumbers.push(1);
      pageNumbers.push('...');
      for (let i = currentPage - 1; i <= Math.min(currentPage + 1, totalPages); i++) {
        pageNumbers.push(i);
      }
      if (totalPages > currentPage + 1) {
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
    } else {
      pageNumbers.push(1);
      pageNumbers.push('...');
      for (let i = Math.max(totalPages - totalPagesToShow + 2, 2); i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    }

    return pageNumbers;
  };

  return (
    <div className="d-flex justify-content-center mt-4 gap-2">
      <button
        className={`btn d-flex align-items-center justify-content-around ${styles.btnPagination}`}
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        <FaChevronLeft className="me-2 pt-1" fontSize={16} />
        <span className={`${styles.paginationButtonText}`}>Prev</span>
      </button>
      <div className="pagination d-flex">
        {generatePageNumbers().map((pageNumber, index) => (
          <div
            key={index}
            className={`btn ${styles.paginationButtonText} ${currentPage === pageNumber && 'active'}`}
            onClick={() => (pageNumber === '...' ? handleEllipsisClick(index === 1 ? 'left' : 'right') : setCurrentPage(pageNumber))}
          >
            {pageNumber === '...' ? (
              <div className={styles.ellipsis}>...</div>
            ) : (
              pageNumber
            )}
          </div>
        ))}
      </div>

      <button
        className={`btn d-flex align-items-center justify-content-around ${styles.btnPagination}`}
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        <span className={`${styles.paginationButtonText}`}>Next</span>
        <FaChevronRight className="ms-2 pt-1" />
      </button>
    </div>
  );
};

export default Pagination;
