// src/hooks/usePagination.js
import { useState, useMemo } from 'react';
import { paginate } from '../utils/helpers';

export const usePagination = (data, initialPageSize = 10) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(initialPageSize);

  const paginatedData = useMemo(() => {
    return paginate(data, currentPage, pageSize);
  }, [data, currentPage, pageSize]);

  const goToPage = (page) => {
    const maxPage = Math.ceil(data.length / pageSize);
    const validPage = Math.max(1, Math.min(page, maxPage));
    setCurrentPage(validPage);
  };

  const goToNext = () => {
    if (paginatedData.pagination.hasNextPage) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const goToPrevious = () => {
    if (paginatedData.pagination.hasPreviousPage) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const changePageSize = (newSize) => {
    setPageSize(newSize);
    setCurrentPage(1); // Reset to first page when changing page size
  };

  // Reset page when data changes
  useMemo(() => {
    if (currentPage > Math.ceil(data.length / pageSize)) {
      setCurrentPage(1);
    }
  }, [data, currentPage, pageSize]);

  return {
    ...paginatedData,
    currentPage,
    pageSize,
    goToPage,
    goToNext,
    goToPrevious,
    changePageSize,
  };
};