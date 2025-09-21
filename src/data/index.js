// Navigation Data
export const navigationData = {
  dashboard: {
    title: 'Dashboard',
    items: [
      {
        id: 'default',
        title: 'Default',
        path: '/dashboard/default',
        icon: 'Dashboard'
      },
      {
        id: 'ecommerce',
        title: 'eCommerce',
        icon: 'ShoppingCart',
        subItems: [
          {
            id: 'orders',
            title: 'Orders',
            path: '/dashboard/e-commerce/orders',
            icon: 'Receipt'
          },
          {
            id: 'products',
            title: 'Products',
            path: '/dashboard/e-commerce/products',
            icon: 'Inventory',
            dummy: true
          },
          {
            id: 'customers',
            title: 'Customers',
            path: '/dashboard/e-commerce/customers',
            icon: 'People'
          },
          {
            id: 'reviews',
            title: 'Reviews',
            path: '/dashboard/e-commerce/reviews',
            icon: 'RateReview',
            dummy: true
          }
        ]
      },
      {
        id: 'projects',
        title: 'Projects',
        icon: 'Folder',
        dummy: true,
        subItems: [
          {
            id: 'tasks',
            title: 'Tasks',
            icon: 'Task',
            dummy: true
          },
          {
            id: 'teams',
            title: 'Teams',
            icon: 'Group',
            dummy: true
          },
          {
            id: 'reports',
            title: 'Reports',
            icon: 'Assessment',
            dummy: true
          }
        ]
      },
      {
        id: 'online-courses',
        title: 'Online Courses',
        icon: 'School',
        dummy: true,
        subItems: [
          {
            id: 'content',
            title: 'Content',
            icon: 'MenuBook',
            dummy: true
          },
          {
            id: 'students',
            title: 'Students',
            icon: 'Person',
            dummy: true
          },
          {
            id: 'assessment',
            title: 'Assessment',
            icon: 'Quiz',
            dummy: true
          }
        ]
      }
    ]
  },
  pages: {
    title: 'Pages',
    items: [
      {
        id: 'user-profile',
        title: 'User Profile',
        icon: 'AccountCircle',
        subItems: [
          {
            id: 'overview',
            title: 'Overview',
            path: '/user-profile/overview',
            icon: 'Visibility',
            dummy: true
          },
          {
            id: 'projects',
            title: 'Projects',
            icon: 'Work',
            dummy: true
          },
          {
            id: 'campaigns',
            title: 'Campaigns',
            icon: 'Campaign',
            dummy: true
          },
          {
            id: 'documents',
            title: 'Documents',
            icon: 'Description',
            dummy: true
          },
          {
            id: 'followers',
            title: 'Followers',
            icon: 'People',
            dummy: true
          }
        ]
      },
      {
        id: 'account',
        title: 'Account',
        icon: 'Settings',
        dummy: true,
        subItems: [
          {
            id: 'billing',
            title: 'Billing & Subscription',
            icon: 'Payment',
            dummy: true
          },
          {
            id: 'integrations',
            title: 'Connected Apps / Integrations',
            icon: 'Hub',
            dummy: true,
            highlighted: true
          }
        ]
      },
      {
        id: 'corporate',
        title: 'Corporate',
        icon: 'Business',
        dummy: true,
        subItems: [
          {
            id: 'departments',
            title: 'Departments',
            icon: 'CorporateFare',
            dummy: true
          },
          {
            id: 'policies',
            title: 'Policies',
            icon: 'Policy',
            dummy: true
          },
          {
            id: 'events',
            title: 'Events',
            icon: 'Event',
            dummy: true
          },
          {
            id: 'reports',
            title: 'Reports',
            icon: 'Assessment',
            dummy: true,
            highlighted: true
          }
        ]
      },
      {
        id: 'blog',
        title: 'Blog',
        icon: 'Article',
        dummy: true,
        subItems: [
          {
            id: 'all-posts',
            title: 'All Posts',
            icon: 'List',
            dummy: true,
            highlighted: true
          },
          {
            id: 'authors',
            title: 'Authors',
            icon: 'Person',
            dummy: true
          }
        ]
      },
      {
        id: 'social',
        title: 'Social',
        icon: 'Share',
        dummy: true,
        subItems: [
          {
            id: 'community',
            title: 'Community',
            icon: 'Forum',
            dummy: true,
            highlighted: true
          },
          {
            id: 'promotions',
            title: 'Promotions',
            icon: 'LocalOffer',
            dummy: true,
            highlighted: true
          }
        ]
      }
    ]
  }
};

// Search Data
export const searchData = {
  pages: [
    {
      id: 'dashboard-default',
      title: 'Default Dashboard',
      path: '/dashboard',
      category: 'Pages',
      keywords: ['dashboard', 'home', 'overview', 'stats']
    },
    {
      id: 'ecommerce-orders',
      title: 'E-commerce Orders',
      path: '/dashboard/e-commerce/orders',
      category: 'Pages',
      keywords: ['orders', 'ecommerce', 'sales', 'transactions']
    },
    {
      id: 'user-profile',
      title: 'User Profile Overview',
      path: '/user-profile/overview',
      category: 'Pages',
      keywords: ['profile', 'user', 'settings', 'account']
    }
  ],
  products: [
    {
      id: 'p1',
      title: 'MacBook Pro 14"',
      category: 'Products',
      price: 1999,
      stock: 24,
      keywords: ['laptop', 'macbook', 'apple', 'computer']
    },
    {
      id: 'p2',
      title: 'iPhone 15 Pro',
      category: 'Products',
      price: 999,
      stock: 156,
      keywords: ['phone', 'iphone', 'apple', 'mobile']
    },
    {
      id: 'p3',
      title: 'AirPods Pro',
      category: 'Products',
      price: 249,
      stock: 89,
      keywords: ['headphones', 'airpods', 'apple', 'wireless']
    },
    {
      id: 'p4',
      title: 'Samsung Galaxy S24',
      category: 'Products',
      price: 799,
      stock: 67,
      keywords: ['phone', 'samsung', 'galaxy', 'android']
    }
  ],
  customers: [
    {
      id: 'c1',
      name: 'John Smith',
      email: 'john.smith@email.com',
      category: 'Customers',
      totalOrders: 24,
      totalSpent: 4567.89,
      keywords: ['john', 'smith', 'customer']
    },
    {
      id: 'c2',
      name: 'Sarah Johnson',
      email: 'sarah.johnson@email.com',
      category: 'Customers',
      totalOrders: 18,
      totalSpent: 2890.45,
      keywords: ['sarah', 'johnson', 'customer']
    },
    {
      id: 'c3',
      name: 'Michael Brown',
      email: 'michael.brown@email.com',
      category: 'Customers',
      totalOrders: 31,
      totalSpent: 7234.12,
      keywords: ['michael', 'brown', 'customer']
    },
    {
      id: 'c4',
      name: 'Emily Davis',
      email: 'emily.davis@email.com',
      category: 'Customers',
      totalOrders: 12,
      totalSpent: 1567.90,
      keywords: ['emily', 'davis', 'customer']
    }
  ]
};

// Notifications Data
export const notificationTypes = {
  bug: {
    icon: 'Bug',
    color: '#f44336',
    bgColor: '#ffebee'
  },
  user: {
    icon: 'Person',
    color: '#2196f3',
    bgColor: '#e3f2fd'
  },
  system: {
    icon: 'Settings',
    color: '#ff9800',
    bgColor: '#fff3e0'
  },
  success: {
    icon: 'CheckCircle',
    color: '#4caf50',
    bgColor: '#e8f5e8'
  },
  warning: {
    icon: 'Warning',
    color: '#ff9800',
    bgColor: '#fff3e0'
  }
};

export const initialNotifications = [
  {
    id: 'n1',
    type: 'bug',
    title: 'Bug Report',
    message: 'You have a bug that needs to be fixed in the payment module',
    timestamp: Date.now() - 60000,
    read: false
  },
  {
    id: 'n2',
    type: 'user',
    title: 'New User',
    message: 'New user registered: john.doe@example.com',
    timestamp: Date.now() - 3420000,
    read: false
  },
  {
    id: 'n3',
    type: 'system',
    title: 'System Update',
    message: 'System maintenance scheduled for tonight at 2:00 AM',
    timestamp: Date.now() - 7200000,
    read: true
  },
  {
    id: 'n4',
    type: 'success',
    title: 'Deployment Success',
    message: 'Version 2.1.0 has been successfully deployed to production',
    timestamp: Date.now() - 43200000,
    read: true
  },
  {
    id: 'n5',
    type: 'warning',
    title: 'Storage Warning',
    message: 'Server storage is 85% full. Consider upgrading your plan.',
    timestamp: Date.now() - 86400000,
    read: false
  }
];

// Activities Data
export const activityTypes = {
  bug: {
    icon: 'BugReport',
    color: '#f44336'
  },
  edit: {
    icon: 'Edit',
    color: '#ff9800'
  },
  delete: {
    icon: 'Delete',
    color: '#f44336'
  },
  create: {
    icon: 'Add',
    color: '#4caf50'
  },
  release: {
    icon: 'Publish',
    color: '#2196f3'
  }
};

export const initialActivities = [
  {
    id: 'a1',
    user: {
      id: 'u1',
      name: 'Alice Cooper',
      avatar: 'https://i.pravatar.cc/150?img=1'
    },
    type: 'bug',
    message: 'submitted a bug report for the checkout process',
    timestamp: Date.now() - 180000
  },
  {
    id: 'a2',
    user: {
      id: 'u2',
      name: 'Bob Wilson',
      avatar: 'https://i.pravatar.cc/150?img=2'
    },
    type: 'edit',
    message: 'modified the data in Page X of the analytics dashboard',
    timestamp: Date.now() - 840000
  },
  {
    id: 'a3',
    user: {
      id: 'u3',
      name: 'Carol Smith',
      avatar: 'https://i.pravatar.cc/150?img=3'
    },
    type: 'delete',
    message: 'deleted a page from Project Alpha',
    timestamp: Date.now() - 2700000
  },
  {
    id: 'a4',
    user: {
      id: 'u4',
      name: 'David Johnson',
      avatar: 'https://i.pravatar.cc/150?img=4'
    },
    type: 'release',
    message: 'released a new version v2.1.0 to production',
    timestamp: Date.now() - 3600000
  },
  {
    id: 'a5',
    user: {
      id: 'u5',
      name: 'Eva Brown',
      avatar: 'https://i.pravatar.cc/150?img=5'
    },
    type: 'create',
    message: 'created a new dashboard template',
    timestamp: Date.now() - 7200000
  }
];

// Contacts Data
export const contactsData = [
  {
    id: 'c1',
    name: 'Natali Craig',
    avatar: 'https://i.pravatar.cc/150?img=6',
    status: 'online',
    role: 'Product Manager'
  },
  {
    id: 'c2',
    name: 'Drew Cano',
    avatar: 'https://i.pravatar.cc/150?img=7',
    status: 'away',
    role: 'UI Designer'
  },
  {
    id: 'c3',
    name: 'Orlando Diggs',
    avatar: 'https://i.pravatar.cc/150?img=8',
    status: 'online',
    role: 'Developer'
  },
  {
    id: 'c4',
    name: 'Andi Lane',
    avatar: 'https://i.pravatar.cc/150?img=9',
    status: 'offline',
    role: 'Marketing Lead'
  },
  {
    id: 'c5',
    name: 'Kate Morrison',
    avatar: 'https://i.pravatar.cc/150?img=10',
    status: 'online',
    role: 'Data Analyst'
  },
  {
    id: 'c6',
    name: 'Koray Okumus',
    avatar: 'https://i.pravatar.cc/150?img=11',
    status: 'away',
    role: 'Backend Developer'
  }
];

// User Profile Data
export const userProfileData = {
  id: 'current-user',
  name: 'John Doe',
  email: 'john.doe@byewind.com',
  avatar: 'https://i.pravatar.cc/150?img=12',
  role: 'Administrator',
  department: 'Engineering',
  joinDate: '2023-01-15',
  preferences: {
    theme: 'light',
    language: 'en',
    timezone: 'UTC',
    notifications: {
      email: true,
      push: true,
      desktop: false
    },
    privacy: {
      profileVisibility: 'public',
      activityTracking: true,
      dataSharing: false
    }
  },
  stats: {
    totalProjects: 24,
    completedTasks: 186,
    teamMembers: 12,
    upcomingDeadlines: 3
  }
};

// Dashboard Stats Data
export const dashboardStats = {
  totalOrders: {
    value: 1219,
    change: -0.03,
    trend: 'down'
  },
  totalRevenue: {
    value: 695000,
    change: 15.03,
    trend: 'up'
  },
  totalCustomers: {
    value: 3781,
    change: 11.01,
    trend: 'up'
  },
  growthRate: {
    value: 30.1,
    change: 6.08,
    trend: 'up'
  }
};

// Orders Data
export const ordersData = [
  {
    id: '#CM9801',
    customer: {
      name: 'Natali Craig',
      avatar: 'https://i.pravatar.cc/150?img=6'
    },
    project: 'Landing Page',
    address: 'Meadow Lane Oakland',
    date: Date.now(),
    status: 'In Progress',
    amount: 1250.00
  },
  {
    id: '#CM9802',
    customer: {
      name: 'Kate Morrison',
      avatar: 'https://i.pravatar.cc/150?img=10'
    },
    project: 'CRM Admin pages',
    address: 'Larry San Francisco',
    date: Date.now() - 60000,
    status: 'Complete',
    amount: 3250.00
  },
  {
    id: '#CM9803',
    customer: {
      name: 'Drew Cano',
      avatar: 'https://i.pravatar.cc/150?img=7'
    },
    project: 'Client Project',
    address: 'Bagwell Avenue Ocala',
    date: Date.now() - 3600000,
    status: 'Pending',
    amount: 845.00
  },
  {
    id: '#CM9804',
    customer: {
      name: 'Orlando Diggs',
      avatar: 'https://i.pravatar.cc/150?img=8'
    },
    project: 'Admin Dashboard',
    address: 'Washburn Baton Rouge',
    date: Date.now() - 86400000,
    status: 'Approved',
    amount: 5670.00
  },
  {
    id: '#CM9805',
    customer: {
      name: 'Andi Lane',
      avatar: 'https://i.pravatar.cc/150?img=9'
    },
    project: 'App Landing Page',
    address: 'Nest Lane Olivette',
    date: Date.now() - 172800000,
    status: 'Rejected',
    amount: 2890.00
  }
];

// Products Data
export const productsData = [
  {
    id: 'p1',
    name: 'ASOS Ridley High Waist',
    price: 79.49,
    quantity: 82,
    amount: 6518.18,
    category: 'Fashion',
    image: 'https://via.placeholder.com/50x50/cccccc/969696?text=P1'
  },
  {
    id: 'p2',
    name: 'Marco Lightweight Shirt',
    price: 128.50,
    quantity: 37,
    amount: 4754.50,
    category: 'Fashion',
    image: 'https://via.placeholder.com/50x50/cccccc/969696?text=P2'
  },
  {
    id: 'p3',
    name: 'Half Sleeve Shirt',
    price: 39.99,
    quantity: 64,
    amount: 2559.36,
    category: 'Fashion',
    image: 'https://via.placeholder.com/50x50/cccccc/969696?text=P3'
  },
  {
    id: 'p4',
    name: 'Lightweight Jacket',
    price: 20.00,
    quantity: 184,
    amount: 3680.00,
    category: 'Fashion',
    image: 'https://via.placeholder.com/50x50/cccccc/969696?text=P4'
  },
  {
    id: 'p5',
    name: 'Marco Shoes',
    price: 79.49,
    quantity: 64,
    amount: 1965.81,
    category: 'Footwear',
    image: 'https://via.placeholder.com/50x50/cccccc/969696?text=P5'
  }
];

// Revenue Data
export const revenueData = {
  currentWeek: 58211,
  previousWeek: 68768,
  chartData: [
    { month: 'Jan', current: 15000, previous: 12000 },
    { month: 'Feb', current: 18000, previous: 14000 },
    { month: 'Mar', current: 22000, previous: 16000 },
    { month: 'Apr', current: 19000, previous: 18000 },
    { month: 'May', current: 25000, previous: 20000 },
    { month: 'Jun', current: 28000, previous: 22000 }
  ],
  locationData: [
    { location: 'New York', revenue: 72000 },
    { location: 'San Francisco', revenue: 39000 },
    { location: 'Sydney', revenue: 25000 },
    { location: 'Singapore', revenue: 61000 }
  ]
};

// Sales Data
export const salesData = {
  total: {
    direct: 300.56,
    affiliate: 135.18,
    sponsored: 154.02,
    email: 48.96
  },
  percentage: {
    direct: 38.6,
    affiliate: 22.5,
    sponsored: 18.7,
    email: 20.2
  }
};

// Chart Data for Dashboard
export const chartData = [
  { month: 'Jan', projections: 15, actuals: 18 },
  { month: 'Feb', projections: 20, actuals: 22 },
  { month: 'Mar', projections: 25, actuals: 28 },
  { month: 'Apr', projections: 22, actuals: 26 },
  { month: 'May', projections: 28, actuals: 32 },
  { month: 'Jun', projections: 30, actuals: 35 }
];
