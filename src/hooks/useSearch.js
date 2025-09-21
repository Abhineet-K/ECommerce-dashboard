// src/hooks/useSearch.js
import { useState, useMemo } from 'react';
import { filterBySearch } from '../utils/helpers';
import { useDebounce } from './useDebounce';

export const useSearch = (data, searchFields, debounceDelay = 300) => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, debounceDelay);

  const filteredData = useMemo(() => {
    return filterBySearch(data, debouncedSearchTerm, searchFields);
  }, [data, debouncedSearchTerm, searchFields]);

  const clearSearch = () => setSearchTerm('');

  return {
    searchTerm,
    setSearchTerm,
    filteredData,
    clearSearch,
    isSearching: debouncedSearchTerm.length > 0,
  };
};