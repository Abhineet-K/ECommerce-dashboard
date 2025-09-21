// Format currency
export const formatCurrency = (
  amount,
  currency = 'USD',
  locale = 'en-US'
) => {
  if (amount >= 100000) {
    // Compact notation for large numbers (100K, 1M, etc.)
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      notation: 'compact',
      compactDisplay: 'short',
      maximumFractionDigits: 1, // e.g., 1.2M
    }).format(amount);
  }

  // Normal currency formatting for smaller numbers
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};


/**
 * Format numbers with K/M suffix and control digit + decimal limits
 * 
 * @param {number} num - The number to format
 * @param {number} digitLimit - Max digits before shortening (default: 3)
 * @param {number} decimalLimit - Decimal places for shortened numbers (default: 0)
 * @returns {string} - Formatted number
 */
export const formatNumber = (num, digitLimit = 3, decimalLimit = 0) => {
  if (num === null || num === undefined || isNaN(num)) return "0";

  const absNum = Math.abs(num);
  const sign = num < 0 ? "-" : "";

  // Convert number to string to check digit length
  const digitCount = absNum.toString().length;

  // If within digit limit → return raw number
  if (digitCount <= digitLimit) {
    return sign + absNum.toString();
  }

  // Otherwise format into K / M
  if (absNum >= 1_000_000) {
    return (
      sign +
      (absNum / 1_000_000).toFixed(decimalLimit) +
      "M"
    );
  }
  if (absNum >= 1_000) {
    return (
      sign +
      (absNum / 1_000).toFixed(decimalLimit) +
      "K"
    );
  }

  return sign + absNum.toString();
};

export const COLORSLIST = [
  '#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399'
];


// Format percentage
export const formatPercentage = (value, decimals = 1) => {
  return `${value.toFixed(decimals)}%`;
};

// Format relative time (e.g., "2 hours ago", "just now")
export const formatRelativeTime = (date) => {
  const now = new Date();
  const diff = now - new Date(date);
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (seconds < 60) return 'Just now';
  if (minutes < 60) return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
  if (hours < 24) return `${hours} hour${hours === 1 ? '' : 's'} ago`;
  if (days < 7) return days === 1 ? 'Yesterday' : `${days} days ago`;
  if (weeks < 4) return `${weeks} week${weeks === 1 ? '' : 's'} ago`;
  if (months < 12) return `${months} month${months === 1 ? '' : 's'} ago`;
  return `${years} year${years === 1 ? '' : 's'} ago`;
};

// Format date
/**
 * Formats a date with flexible options for relative or absolute formatting
 * @param {Date|string|number} date - The date to format
 * @param {Object} options - Formatting options
 * @param {boolean} options.relative - Whether to use relative formatting (e.g., "2 hours ago")
 * @param {number} options.relativeThreshold - Days after which to switch to absolute format (default: 7)
 * @param {Intl.DateTimeFormatOptions} options.absolute - Options for absolute date formatting
 * @param {string} options.locale - Locale for formatting (default: 'en-US')
 * @returns {string} Formatted date string
 */
export const formatDate = (date, options = {}) => {
  const {
    relative = true,
    relativeThreshold = 2,
    absolute = { year: 'numeric', month: 'short', day: 'numeric' },
    locale = 'en-US'
  } = options;

  // Handle invalid dates
  const dateObj = new Date(date);
  if (isNaN(dateObj.getTime())) {
    return 'Invalid date';
  }

  // If relative formatting is disabled, return absolute format
  if (!relative) {
    return dateObj.toLocaleDateString(locale, absolute);
  }

  // Calculate time differences
  const now = new Date();
  const diff = now - dateObj;
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  // Handle future dates
  if (diff < 0) {
    return dateObj.toLocaleDateString(locale, absolute);
  }

  // Relative formatting for recent dates
  if (minutes < 1) return 'Just now';
  if (minutes < 60) return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
  if (hours < 24) return `${hours} hour${hours === 1 ? '' : 's'} ago`;
  if (days === 1) return 'Yesterday';
  if (days < relativeThreshold) return `${days} day${days === 1 ? '' : 's'} ago`;

  // Fall back to absolute formatting for older dates
  return dateObj.toLocaleDateString(locale, absolute);
};

// Sort array of objects by key
export const sortBy = (array, key, direction = 'asc') => {
  return [...array].sort((a, b) => {
    const aVal = getNestedValue(a, key);
    const bVal = getNestedValue(b, key);

    if (direction === 'asc') {
      return aVal > bVal ? 1 : -1;
    }
    return aVal < bVal ? 1 : -1;
  });
};

// Get nested object value by dot notation
export const getNestedValue = (obj, path) => {
  return path.split('.').reduce((current, key) => current && current[key], obj);
};

// Filter array by search term
export const filterBySearch = (array, searchTerm, searchFields) => {
  if (!searchTerm) return array;

  const term = searchTerm.toLowerCase();

  return array.filter(item => {
    return searchFields.some(field => {
      const value = getNestedValue(item, field);
      return value && value.toString().toLowerCase().includes(term);
    });
  });
};