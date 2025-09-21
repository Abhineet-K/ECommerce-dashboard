// File: src/data/dashboardData.js

// Summary Cards Data
export const summaryCardsData = [
  {
    title: 'Customers',
    value: 3781,
    change: 11.01,
    trend: 'up',
    format: 'number',
    icon: '<People />',
    bgColor: 'blue',
    textColor: '#1c1c1c'
  },
  {
    title: 'Orders',
    value: 1219,
    change: -0.03,
    trend: 'down',
    format: 'number',
    icon: '<ShoppingCart />',
    bgColor: 'light',
  },
  {
    title: 'Revenue',
    value: 695000,
    change: 15.03,
    trend: 'up',
    format: 'currency',
    icon: '<AttachMoney />',
    bgColor: 'light',
  },
  {
    title: 'Growth',
    value: 30.1,
    change: 6.08,
    trend: 'up',
    format: 'percentage',
    icon: '<ShowChart />',
    bgColor: 'purple',
    textColor: '#1c1c1c'
  }
];

// Projection vs Actual Data
export const projectionVsActualData = [
  { month: 'Jan', projections: 18, actuals: 15 },
  { month: 'Feb', projections: 22, actuals: 20 },
  { month: 'Mar', projections: 28, actuals: 25 },
  { month: 'Apr', projections: 26, actuals: 22 },
  { month: 'May', projections: 20, actuals: 18 },
  { month: 'Jun', projections: 25, actuals: 23 },
];


// Revenue Comparison Data (Current vs Previous Year)
export const revenueComparisonData = [
  { month: 'Jan', current: 15, previous: 12 },
  { month: 'Feb', current: 18, previous: 14 },
  { month: 'Mar', current: 22, previous: 16 },
  { month: 'Apr', current: 19, previous: 18 },
  { month: 'May', current: 25, previous: 20 },
  { month: 'Jun', current: 28, previous: 22 }
];

export const locationRevenueData = [
  {
    name: 'New York',
    revenue: 72,
    latitude: 40.7128,
    longitude: -74.0060,
    percentage: 0, // Will be calculated
  },
  {
    name: 'San Francisco',
    revenue: 39,
    latitude: 37.7749,
    longitude: -122.4194,
    percentage: 0, // Will be calculated
  },
  {
    name: 'Sydney',
    revenue: 25,
    latitude: -33.8688,
    longitude: 151.2093,
    percentage: 0, // Will be calculated
  },
  {
    name: 'Singapore',
    revenue: 61,
    latitude: 1.3521,
    longitude: 103.8198,
    percentage: 0, // Will be calculated
  }
];


// Top Selling Products Data
export const topSellingProductsData = [
  {
    id: 'p1',
    name: 'ASOS Ridley High Waist',
    price: 79.49,
    quantity: 82,
    amount: 6518.18,
    category: 'Fashion'
  },
  {
    id: 'p2',
    name: 'Marco Lightweight Shirt',
    price: 128.50,
    quantity: 37,
    amount: 4754.50,
    category: 'Fashion'
  },
  {
    id: 'p3',
    name: 'Half Sleeve Shirt',
    price: 39.99,
    quantity: 64,
    amount: 2559.36,
    category: 'Fashion'
  },
  {
    id: 'p4',
    name: 'Lightweight Jacket',
    price: 20.00,
    quantity: 184,
    amount: 3680.00,
    category: 'Outerwear'
  },
  {
    id: 'p5',
    name: 'Marco Shoes',
    price: 79.49,
    quantity: 64,
    amount: 1965.81,
    category: 'Footwear'
  }
];

// Sales Type Data for Pie Chart
export const salesTypeData = [
  {
    name: 'Direct',
    value: 300.56,
    percentage: 38.6
  },
  {
    name: 'Affiliate',
    value: 135.18,
    percentage: 22.5
  },
  {
    name: 'Sponsored',
    value: 154.02,
    percentage: 18.7
  },
  {
    name: 'E-mail',
    value: 48.96,
    percentage: 20.2
  }
];

// Additional Mock Data for Enhanced Experience
export const monthlyGrowthData = [
  { month: 'Jan', growth: 12.5 },
  { month: 'Feb', growth: 15.2 },
  { month: 'Mar', growth: 18.7 },
  { month: 'Apr', growth: 22.1 },
  { month: 'May', growth: 25.8 },
  { month: 'Jun', growth: 30.1 }
];

export const customerSegmentData = [
  { segment: 'Premium', count: 1134, percentage: 30 },
  { segment: 'Regular', count: 1890, percentage: 50 },
  { segment: 'Basic', count: 757, percentage: 20 }
];

export const orderStatusData = [
  { status: 'Completed', count: 854, color: '#4CAF50' },
  { status: 'Processing', count: 243, color: '#2196F3' },
  { status: 'Pending', count: 89, color: '#FF9800' },
  { status: 'Cancelled', count: 33, color: '#F44336' }
];

export const topCategoriesData = [
  { category: 'Fashion', revenue: 245000, growth: 15.3 },
  { category: 'Electronics', revenue: 189000, growth: 8.7 },
  { category: 'Home & Garden', revenue: 134000, growth: 12.1 },
  { category: 'Sports', revenue: 98000, growth: 6.5 },
  { category: 'Books', revenue: 29000, growth: -2.1 }
];