import React, { useState, useMemo, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';

const Table = ({
  data = [],
  columns = [],
  defaultPageSize = 10,
  pageSizeOptions = [5, 10, 15, 20, 25],
  enableSorting = true,
  enableFiltering = true,
  enableSearch = true,
  enablePagination = true,
  enableRowSelection = true,
  onRowClick,
  onSelectionChange,
  customStyles = {},
  loading = false,
  showEnteriesStats = false,
  emptyMessage = "No data available"
}) => {
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(defaultPageSize);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [filters, setFilters] = useState({});
  const [hoveredRow, setHoveredRow] = useState(null);

  const theme = useTheme();
  // Get nested value from object
  const getNestedValue = (obj, path) => {
    return path.split('.').reduce((current, key) => current?.[key], obj);
  };

  // Filtered and sorted data
  const processedData = useMemo(() => {
    let filtered = [...data];

    // Apply search
    if (searchTerm && enableSearch) {
      filtered = filtered.filter(row =>
        columns.some(col => {
          const value = getNestedValue(row, col.sortKey || col.key);
          if (typeof value === 'string') {
            return value.toLowerCase().includes(searchTerm.toLowerCase());
          }
          if (typeof value === 'object' && value?.name) {
            return value.name.toLowerCase().includes(searchTerm.toLowerCase());
          }
          return false;
        })
      );
    }

    // Apply filters
    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        filtered = filtered.filter(row => getNestedValue(row, key) === value);
      }
    });

    // Apply sorting
    if (sortConfig.key && enableSorting) {
      filtered.sort((a, b) => {
        const aVal = getNestedValue(a, sortConfig.key);
        const bVal = getNestedValue(b, sortConfig.key);

        if (aVal === bVal) return 0;

        let comparison = 0;
        if (typeof aVal === 'string' && typeof bVal === 'string') {
          comparison = aVal.localeCompare(bVal);
        } else if (aVal instanceof Date && bVal instanceof Date) {
          comparison = aVal.getTime() - bVal.getTime();
        } else {
          comparison = aVal < bVal ? -1 : 1;
        }

        return sortConfig.direction === 'desc' ? -comparison : comparison;
      });
    }

    return filtered;
  }, [data, searchTerm, filters, sortConfig, columns, enableSearch, enableSorting]);

  // Reset page when data changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filters]);



  // Check for missing data or columns
  if (!data || !Array.isArray(data)) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '300px',
        backgroundColor: theme.palette.background.paper,
        borderRadius: '12px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        padding: '40px',
        textAlign: 'center'
      }}>
        <svg width="64" height="64" viewBox="0 0 24 24" fill="#EF4444" style={{ marginBottom: '16px' }}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
        <h3 style={{ color: '#EF4444', marginBottom: '8px', fontSize: '18px' }}>Data Missing</h3>
        <p style={{ color: '#6B7280', fontSize: '14px', margin: 0 }}>
          Please provide a valid data array to display the table.
        </p>
      </div>
    );
  }

  if (!columns || !Array.isArray(columns) || columns.length === 0) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '300px',
        backgroundColor: theme.palette.background.paper,
        borderRadius: '12px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        padding: '40px',
        textAlign: 'center'
      }}>
        <svg width="64" height="64" viewBox="0 0 24 24" fill="#EF4444" style={{ marginBottom: '16px' }}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
        <h3 style={{ color: '#EF4444', marginBottom: '8px', fontSize: '18px' }}>Columns Missing</h3>
        <p style={{ color: '#6B7280', fontSize: '14px', margin: 0 }}>
          Please provide a valid columns array to configure the table structure.
        </p>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '300px',
        backgroundColor: theme.palette.background.paper,
        borderRadius: '12px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        padding: '40px',
        textAlign: 'center'
      }}>
        <svg width="64" height="64" viewBox="0 0 24 24" fill="#9CA3AF" style={{ marginBottom: '16px' }}>
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
        </svg>
        <h3 style={{ color: '#9CA3AF', marginBottom: '8px', fontSize: '18px' }}>No Data Available</h3>
        <p style={{ color: '#6B7280', fontSize: '14px', margin: 0 }}>
          {emptyMessage}
        </p>
      </div>
    );
  }

  // Pagination
  const totalPages = Math.ceil(processedData.length / pageSize);
  const paginatedData = enablePagination
    ? processedData.slice((currentPage - 1) * pageSize, currentPage * pageSize)
    : processedData;

  // Event handlers
  const handleSort = (key) => {
    if (!enableSorting) return;

    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  const handleRowSelect = (index) => {
    if (!enableRowSelection) return;

    const newSelected = new Set(selectedRows);
    if (newSelected.has(index)) {
      newSelected.delete(index);
    } else {
      newSelected.add(index);
    }
    setSelectedRows(newSelected);
    onSelectionChange?.(Array.from(newSelected));
  };

  const handleSelectAll = () => {
    if (!enableRowSelection) return;

    if (selectedRows.size === paginatedData.length && paginatedData.length > 0) {
      setSelectedRows(new Set());
      onSelectionChange?.([]);
    } else {
      const allIndices = new Set(paginatedData.map((_, index) => index));
      setSelectedRows(allIndices);
      onSelectionChange?.(Array.from(allIndices));
    }
  };

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(Math.max(1, Math.min(totalPages, page)));
  };

  const handlePageSizeChange = (size) => {
    setPageSize(size);
    setCurrentPage(1);
  };

  // Components
  const StatusBadge = ({ status, color }) => (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      padding: '4px 0',
      fontSize: '14px',
      fontWeight: '500',
      color: color,
    }}>
      <span style={{
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        backgroundColor: color,
        marginRight: '8px'
      }} />
      {status}
    </span>
  );

  const SortIcon = ({ column }) => {
    if (!enableSorting || !column.sortable) return null;

    const sortKey = column.sortKey || column.key;
    const isActive = sortConfig.key === sortKey;

    return (
      <span style={{
        marginLeft: '4px',
        opacity: isActive ? 1 : 0.3,
        fontSize: '12px'
      }}>
        {isActive && sortConfig.direction === 'desc' ? '↓' : '↑'}
      </span>
    );
  };

  const FilterDropdown = ({ column }) => {
    if (!enableFiltering || !column.filterable) return null;

    return (
      <select
        value={filters[column.key] || ''}
        onChange={(e) => handleFilterChange(column.key, e.target.value)}
        style={{
          marginLeft: '8px',
          padding: '2px 4px',
          fontSize: '12px',
          border: '1px solid #D1D5DB',
          borderRadius: '4px',
          backgroundColor: theme.palette.background.paper
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <option value="">All</option>
        {column.filterOptions?.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    );
  };

  const Pagination = () => {
    if (!enablePagination) return null;

    const getPageNumbers = () => {
      const pages = [];
      const maxVisible = 5;

      if (totalPages <= maxVisible) {
        for (let i = 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        if (currentPage <= 3) {
          for (let i = 1; i <= Math.min(maxVisible, totalPages); i++) {
            pages.push(i);
          }
        } else if (currentPage >= totalPages - 2) {
          for (let i = Math.max(1, totalPages - maxVisible + 1); i <= totalPages; i++) {
            pages.push(i);
          }
        } else {
          for (let i = currentPage - 2; i <= currentPage + 2; i++) {
            pages.push(i);
          }
        }
      }

      return pages;
    };

    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px 20px',
        backgroundColor: theme.palette.background.default,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {showEnteriesStats && (
            <>
              <span style={{ fontSize: '14px', color: theme.palette.text.secondary }}>
                Showing {((currentPage - 1) * pageSize) + 1} to {Math.min(currentPage * pageSize, processedData.length)} of {processedData.length} entries
              </span>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '14px', color: theme.palette.text.secondary }}>Show:</span>
                <select
                  value={pageSize}
                  onChange={(e) => handlePageSizeChange(Number(e.target.value))}
                  style={{
                    padding: '4px 8px',
                    fontSize: '14px',
                    border: '1px solid #D1D5DB',
                    borderRadius: '4px',
                    backgroundColor: theme.palette.background.paper
                  }}
                >
                  {pageSizeOptions.map(size => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
                <span style={{ fontSize: '14px', color: theme.palette.text.secondary }}>entries</span>
              </div>
            </>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            style={{
              padding: '8px 12px',
              border: 'none',
              backgroundColor: 'transparent',
              color: '#6B7280',
              borderRadius: '6px',
              cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
              fontSize: '14px',
              opacity: currentPage === 1 ? 0.5 : 1
            }}
          >
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" class="theme-contrast--icon"><path id="icon--border" fill-rule="evenodd" clip-rule="evenodd" d="M6.925.558a.59.59 0 0 1 0 .884L2.438 5.558a.59.59 0 0 0 0 .884l4.487 4.116a.59.59 0 0 1 0 .884.726.726 0 0 1-.963 0L1.474 7.326a1.767 1.767 0 0 1 0-2.652L5.962.558a.726.726 0 0 1 .963 0" /></svg>
          </button>

          {getPageNumbers().map(page => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              style={{
                padding: '8px 12px',
                border: 'none',
                backgroundColor: currentPage === page ? theme.palette.background.paper : 'transparent',
                color: theme.palette.text.primary,
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500'
              }}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            style={{
              padding: '8px 12px',
              border: 'none',
              backgroundColor: 'transparent',
              color: '#6B7280',
              borderRadius: '6px',
              cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
              fontSize: '14px',
              opacity: currentPage === totalPages ? 0.5 : 1
            }}
          >
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" class="theme-contrast--icon"><path id="icon--border" fill-rule="evenodd" clip-rule="evenodd" d="M1.075 11.442a.59.59 0 0 1 0-.884l4.488-4.116a.59.59 0 0 0 0-.884L1.074 1.442a.59.59 0 0 1 0-.884.726.726 0 0 1 .963 0l4.488 4.116c.799.732.799 1.92 0 2.652l-4.488 4.116a.726.726 0 0 1-.963 0" /></svg>
          </button>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '200px',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        Loading...
      </div>
    );
  }

  return (
    <div style={{
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      ...customStyles.container
    }}>
      {/* Header Controls */}
      <div style={{
        padding: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px',
        borderRadius: '12px',
        backgroundColor: theme.palette.mode === 'dark' ? '#494949ff' : theme.palette.primary.light,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <button style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '8px 12px',
            backgroundColor: 'transparent',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '14px',
            color: theme.palette.text.secondary
          }}>
            <span style={{ fontSize: '24px' }}>+</span>
          </button>

          {/* Action Buttons */}
          <button style={{
            padding: '8px',
            backgroundColor: 'transparent',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            color: '#6B7280'
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z" />
            </svg>
          </button>

          <button style={{
            padding: '8px',
            backgroundColor: 'transparent',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            color: '#6B7280'
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" />
            </svg>
          </button>

          {/* Clear Filters Button */}
          {Object.values(filters).some(Boolean) && (
            <button
              onClick={() => setFilters({})}
              style={{
                padding: '8px 12px',
                backgroundColor: '#EF4444',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              Clear Filters
            </button>
          )}
        </div>

        {enableSearch && (
          <div style={{ position: 'relative' }}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="#9CA3AF"
              style={{
                position: 'absolute',
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)'
              }}
            >
              <path d="M21 21L16.514 16.506L21 21ZM18 10.5C18 15.194 14.194 19 9.5 19C4.806 19 1 15.194 1 10.5C1 5.806 4.806 2 9.5 2C14.194 2 18 5.806 18 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                paddingLeft: '36px',
                paddingRight: '16px',
                paddingTop: '8px',
                paddingBottom: '8px',
                border: '1px solid',
                borderColor: theme.palette.mode === 'dark' ? '#FFFFFF1A' : '#1C1C1C1A',
                borderRadius: '8px',
                fontSize: '14px',
                width: '250px',
                outline: 'none',
                background: theme.palette.mode === 'dark' ? '#1C1C1C66' : '#FFFFFF66',
                color: theme.palette.text.primary
              }}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                style={{
                  position: 'absolute',
                  right: '8px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  border: 'none',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  color: '#9CA3AF'
                }}
              >
                ✕
              </button>
            )}
          </div>
        )}
      </div>

      {/* Table */}
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: theme.palette.background.default }}>
              {enableRowSelection && (
                <th style={{
                  padding: '12px 20px',
                  textAlign: 'left',
                  width: '50px'
                }}>
                  <input
                    type="checkbox"
                    checked={selectedRows.size === paginatedData.length && paginatedData.length > 0}
                    onChange={handleSelectAll}
                    style={{ width: '16px', height: '16px', cursor: 'pointer' }}
                  />
                </th>
              )}
              {columns.map((column) => (
                <th
                  key={column.key}
                  style={{
                    padding: '12px 20px',
                    textAlign: column.align || 'left',
                    fontWeight: '500',
                    fontSize: '12px',
                    color: theme.palette.text.secondary,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    cursor: column.sortable ? 'pointer' : 'default',
                    width: column.width,
                    ...customStyles.header
                  }}
                  onClick={() => column.sortable && handleSort(column.sortKey || column.key)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', width: 'max-content', gap: '4px' }}>
                    {column.label}
                    <SortIcon column={column} />
                    <FilterDropdown column={column} />
                  </div>
                </th>
              ))}
              <th style={{ width: '50px', padding: '12px 20px' }}></th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length + (enableRowSelection ? 1 : 0) + 1}
                  style={{
                    padding: '60px 20px',
                    textAlign: 'center',
                    color: theme.palette.text.secondary,
                    fontSize: '16px',
                  }}
                >
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              paginatedData.map((row, index) => (
                <tr
                  key={row.id || index}
                  style={{
                    borderBottom: '1px solid',
                    borderColor: theme.palette.divider,
                    backgroundColor: selectedRows.has(index)
                      ? theme.palette.background.paper
                      : theme.palette.background.default,
                    cursor: onRowClick ? 'pointer' : 'default',
                  }}
                  onClick={() => onRowClick?.(row, index)}
                  onMouseEnter={() => setHoveredRow(index)}
                  onMouseLeave={() => setHoveredRow(null)}
                >
                  {enableRowSelection && (
                    <td style={{ padding: '16px 20px' }}>
                      <input
                        type="checkbox"
                        checked={selectedRows.has(index)}
                        onChange={() => handleRowSelect(index)}
                        onClick={(e) => e.stopPropagation()}
                        style={{
                          width: '16px',
                          height: '16px',
                          cursor: 'pointer',
                          visibility:
                            selectedRows.has(index) || hoveredRow === index
                              ? 'visible'
                              : 'hidden',
                        }}
                      />
                    </td>
                  )}

                  {columns.map((column) => (
                    <td
                      key={column.key}
                      style={{
                        padding: '16px 20px',
                        textAlign: column.align || 'left',
                        ...customStyles.cell
                      }}
                    >
                      {column.render
                        ? column.render(getNestedValue(row, column.key), row, index)
                        : getNestedValue(row, column.key)
                      }
                    </td>
                  ))}
                  <td style={{ padding: '16px 20px', textAlign: 'right' }}>
                    <button style={{
                      padding: '4px',
                      backgroundColor: 'transparent',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      color: '#6B7280'
                    }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ transform: 'rotate(90deg)' }}>
                        <path d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <Pagination />
    </div>
  );
};

export default Table;