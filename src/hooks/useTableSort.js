// src/hooks/useTableSort.js
import { useState, useMemo } from 'react';
import { sortBy } from '../utils/helpers';

export const useTableSort = (data, defaultSortKey = null, defaultDirection = 'asc') => {
  const [sortConfig, setSortConfig] = useState({
    key: defaultSortKey,
    direction: defaultDirection,
  });

  const sortedData = useMemo(() => {
    if (!sortConfig.key) return data;
    return sortBy(data, sortConfig.key, sortConfig.direction);
  }, [data, sortConfig]);

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return null;
    return sortConfig.direction === 'asc' ? '↑' : '↓';
  };

  return {
    sortedData,
    requestSort,
    sortConfig,
    getSortIcon,
  };
};