// src/utils/data.js

// Dashboard Stats
export const dashboardStats = {
  customers: {
    value: 3781,
    change: 11.01,
    trend: 'up',
    label: 'Customers'
  },
  orders: {
    value: 1219,
    change: -0.03,
    trend: 'down',
    label: 'Orders'
  },
  revenue: {
    value: 695,
    change: 15.03,
    trend: 'up',
    label: 'Revenue',
    prefix: '$'
  },
  growth: {
    value: 30.1,
    change: 6.08,
    trend: 'up',
    label: 'Growth',
    suffix: '%'
  }
};

// Revenue Chart Data
export const revenueData = [
  { month: 'Jan', current: 12000, previous: 8000 },
  { month: 'Feb', current: 15000, previous: 12000 },
  { month: 'Mar', current: 18000, previous: 15000 },
  { month: 'Apr', current: 22000, previous: 18000 },
  { month: 'May', current: 19000, previous: 20000 },
  { month: 'Jun', current: 25000, previous: 22000 },
];

// Projections vs Actuals Data
export const projectionsData = [
  { month: 'Jan', projections: 18000, actuals: 16000 },
  { month: 'Feb', projections: 20000, actuals: 19000 },
  { month: 'Mar', projections: 22000, actuals: 24000 },
  { month: 'Apr', projections: 25000, actuals: 23000 },
  { month: 'May', projections: 24000, actuals: 26000 },
  { month: 'Jun', projections: 28000, actuals: 27000 },
];

// Revenue by Location
export const revenueByLocation = [
  { location: 'New York', revenue: 72000, percentage: 36.6 },
  { location: 'San Francisco', revenue: 39000, percentage: 19.8 },
  { location: 'Sydney', revenue: 25000, percentage: 12.7 },
  { location: 'Singapore', revenue: 61000, percentage: 31.0 },
];

// Top Selling Products
export const topProducts = [
  {
    id: 1,
    name: 'ASOS Ridley High Waist',
    price: 79.49,
    quantity: 82,
    amount: 6518.18,
    image: '/api/placeholder/40/40'
  },
  {
    id: 2,
    name: 'Marco Lightweight Shirt',
    price: 128.50,
    quantity: 37,
    amount: 4754.50,
    image: '/api/placeholder/40/40'
  },
  {
    id: 3,
    name: 'Half Sleeve Shirt',
    price: 39.99,
    quantity: 64,
    amount: 2559.36,
    image: '/api/placeholder/40/40'
  },
  {
    id: 4,
    name: 'Lightweight Jacket',
    price: 20.00,
    quantity: 184,
    amount: 3680.00,
    image: '/api/placeholder/40/40'
  },
  {
    id: 5,
    name: 'Marco Shoes',
    price: 79.49,
    quantity: 64,
    amount: 1965.81,
    image: '/api/placeholder/40/40'
  }
];

// Orders Data
export const ordersData = [
  {
    id: 'CM9801',
    customer: {
      name: 'Natali Craig',
      email: 'natali.craig@example.com',
      avatar: '/api/placeholder/32/32'
    },
    project: 'Landing Page',
    address: 'Meadow Lane Oakland',
    date: new Date(Date.now() - 60000), // 1 minute ago
    status: 'in_progress',
    amount: 2847.50
  },
  {
    id: 'CM9802',
    customer: {
      name: 'Kate Morrison',
      email: 'kate.morrison@example.com',
      avatar: '/api/placeholder/32/32'
    },
    project: 'CRM Admin pages',
    address: 'Larry San Francisco',
    date: new Date(Date.now() - 3600000), // 1 hour ago
    status: 'complete',
    amount: 1247.85
  },
  {
    id: 'CM9803',
    customer: {
      name: 'Drew Cano',
      email: 'drew.cano@example.com',
      avatar: '/api/placeholder/32/32'
    },
    project: 'Client Project',
    address: 'Bagwell Avenue Ocala',
    date: new Date(Date.now() - 86400000), // 1 day ago
    status: 'pending',
    amount: 3247.12
  },
  {
    id: 'CM9804',
    customer: {
      name: 'Orlando Diggs',
      email: 'orlando.diggs@example.com',
      avatar: '/api/placeholder/32/32'
    },
    project: 'Admin Dashboard',
    address: 'Washburn Baton Rouge',
    date: new Date(Date.now() - 172800000), // 2 days ago
    status: 'approved',
    amount: 1847.99
  },
  {
    id: 'CM9805',
    customer: {
      name: 'Andi Lane',
      email: 'andi.lane@example.com',
      avatar: '/api/placeholder/32/32'
    },
    project: 'App Landing Page',
    address: 'Nest Lane Olivette',
    date: new Date('2023-02-02'),
    status: 'rejected',
    amount: 2247.33
  }
];

// Generate more orders for pagination testing
const generateMoreOrders = () => {
  const customers = [
    'Sarah Johnson', 'Mike Chen', 'Emma Wilson', 'Alex Rodriguez', 
    'Lisa Thompson', 'David Kim', 'Maria Garcia', 'James Brown',
    'Sophie Turner', 'Ryan Murphy', 'Hannah Davis', 'Chris Lee'
  ];
  
  const projects = [
    'E-commerce Site', 'Portfolio Website', 'Mobile App', 'Dashboard',
    'Landing Page', 'Blog Platform', 'CRM System', 'Analytics Tool'
  ];
  
  const statuses = ['pending', 'in_progress', 'complete', 'approved', 'rejected'];
  
  const moreOrders = [];
  
  for (let i = 6; i <= 50; i++) {
    const randomCustomer = customers[Math.floor(Math.random() * customers.length)];
    const randomProject = projects[Math.floor(Math.random() * projects.length)];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    const randomAmount = Math.floor(Math.random() * 5000) + 500;
    const randomDaysAgo = Math.floor(Math.random() * 90);
    
    moreOrders.push({
      id: `CM98${i.toString().padStart(2, '0')}`,
      customer: {
        name: randomCustomer,
        email: `${randomCustomer.toLowerCase().replace(' ', '.')}@example.com`,
        avatar: '/api/placeholder/32/32'
      },
      project: randomProject,
      address: `${Math.floor(Math.random() * 9999)} Random St, City`,
      date: new Date(Date.now() - (randomDaysAgo * 24 * 60 * 60 * 1000)),
      status: randomStatus,
      amount: randomAmount
    });
  }
  
  return moreOrders;
};

// Export all orders
export const allOrders = [...ordersData, ...generateMoreOrders()];

// Recent Activities
export const recentActivities = [
  {
    id: 1,
    user: {
      name: 'John Doe',
      avatar: '/api/placeholder/32/32'
    },
    action: 'You have a bug that needs to be fixed',
    time: 'Just now',
    type: 'bug'
  },
  {
    id: 2,
    user: {
      name: 'System',
      avatar: '/api/placeholder/32/32'
    },
    action: 'New user registered',
    time: '57 minutes ago',
    type: 'user'
  },
  {
    id: 3,
    user: {
      name: 'Admin',
      avatar: '/api/placeholder/32/32'
    },
    action: 'Released a new version',
    time: '57 minutes ago',
    type: 'release'
  },
  {
    id: 4,
    user: {
      name: 'User',
      avatar: '/api/placeholder/32/32'
    },
    action: 'Submitted a bug',
    time: '12 hours ago',
    type: 'bug'
  },
  {
    id: 5,
    user: {
      name: 'Developer',
      avatar: '/api/placeholder/32/32'
    },
    action: 'Modified a data in Page X',
    time: 'Today, 11:59 AM',
    type: 'edit'
  }
];

// Status configurations
export const orderStatuses = {
  pending: { 
    label: 'Pending', 
    color: 'warning',
    bgColor: 'var(--color-warning-light)',
    textColor: 'var(--color-warning)'
  },
  in_progress: { 
    label: 'In Progress', 
    color: 'info',
    bgColor: 'var(--color-info-light)',
    textColor: 'var(--color-info)'
  },
  complete: { 
    label: 'Complete', 
    color: 'success',
    bgColor: 'var(--color-success-light)',
    textColor: 'var(--color-success)'
  },
  approved: { 
    label: 'Approved', 
    color: 'success',
    bgColor: 'var(--color-success-light)',
    textColor: 'var(--color-success)'
  },
  rejected: { 
    label: 'Rejected', 
    color: 'error',
    bgColor: 'var(--color-error-light)',
    textColor: 'var(--color-error)'
  }
};

// Navigation items
export const navigationItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    path: '/',
    icon: 'LayoutDashboard'
  },
  {
    id: 'orders',
    label: 'Orders',
    path: '/orders',
    icon: 'ShoppingCart'
  },
  {
    id: 'analytics',
    label: 'Analytics',
    path: '/analytics',
    icon: 'BarChart3'
  },
  {
    id: 'customers',
    label: 'Customers',
    path: '/customers',
    icon: 'Users'
  },
  {
    id: 'settings',
    label: 'Settings',
    path: '/settings',
    icon: 'Settings'
  }
];