# ByeWind Admin Dashboard

A comprehensive, modern admin dashboard built with React, Material-UI, and Vite. This project provides a fully responsive, feature-rich administrative interface with advanced data visualization, table management, and user experience components.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [API Reference](#api-reference)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Overview

ByeWind Admin Dashboard is a production-ready administrative interface designed for modern web applications. It features a sophisticated layout with sidebar navigation, comprehensive data tables, analytics dashboards, and user management capabilities. The application is built with scalability and maintainability in mind, utilizing React best practices and Material-UI's design system.

### Key Highlights

- **Pixel-perfect design** matching modern UI/UX standards
- **Fully responsive** across all device sizes
- **Advanced table component** with sorting, filtering, and pagination
- **Real-time notifications** and activity tracking
- **Theme switching** (Light/Dark mode)
- **Modular architecture** for easy customization and extension

## Features

### Core Features

- **Dashboard Analytics**
  - Interactive charts and visualizations using MUI X Charts
  - KPI cards with trend indicators
  - Revenue tracking and projections
  - Geographic data visualization
  - Real-time data updates

- **Advanced Data Table**
  - Multi-column sorting with visual indicators
  - Global search across all columns
  - Individual column filtering with dropdowns
  - Customizable pagination (5, 10, 15, 20, 25 entries)
  - Row selection with bulk actions
  - Responsive design with horizontal scrolling
  - Custom cell rendering and formatting
  - Export capabilities

- **User Management**
  - User profile management
  - Role-based access control
  - Settings and preferences
  - Activity tracking

- **Navigation System**
  - Collapsible sidebar with nested navigation
  - Breadcrumb navigation
  - Favorites and recent pages
  - Search functionality

- **Notifications**
  - Real-time notification system
  - Notification history
  - Activity feed
  - Contact management

### UI/UX Features

- **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop
- **Theme Support**: Light/dark mode with persistent user preferences
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support
- **Performance**: Optimized rendering with React.memo and lazy loading
- **Animations**: Smooth transitions and micro-interactions

## Technology Stack

### Frontend Framework
- **React 19.1.1** - Modern React with latest features
- **Vite 7.1.6** - Fast build tool and development server
- **JavaScript (ES6+)** - Modern JavaScript features

### UI Library & Styling
- **Material-UI 7.3.2** - Comprehensive React UI framework
- **MUI X Charts 8.11.3** - Advanced charting components
- **MUI Icons 7.3.2** - Material Design icons
- **Emotion** - CSS-in-JS styling solution

### Routing & State Management
- **React Router DOM 7.9.1** - Client-side routing
- **React Context API** - Global state management
- **LocalStorage** - Persistent user preferences

### Development Tools
- **ESLint 9.35.0** - Code linting and quality
- **Vite Plugin React** - React integration for Vite
- **TypeScript support** - Type definitions included

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Sidebar/
│   │   │   ├── Sidebar.jsx
│   │   │   ├── NavigationTab.jsx
│   │   │   ├── NavigationSubTab.jsx
│   │   │   └── FavoritesRecent.jsx
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   ├── Breadcrumb.jsx
│   │   │   ├── SearchBox.jsx
│   │   │   └── HeaderActions.jsx
│   │   ├── RightSidebar/
│   │   │   ├── RightSidebar.jsx
│   │   │   ├── NotificationsBlock.jsx
│   │   │   ├── ActivitiesBlock.jsx
│   │   │   └── ContactsBlock.jsx
│   │   └── MainLayout/
│   │       └── MainLayout.jsx
│   ├── charts/
│   │   ├── CustomPieChart.jsx
│   │   └── WorldMap.jsx
│   ├── tables/
│   │   └── OrdersTable.jsx
│   └── common/
│       ├── FavoriteButton.jsx
│       └── UserAvatar.jsx
├── contexts/
│   ├── ThemeContext.jsx
│   ├── AppContext.jsx
│   ├── NavigationContext.jsx
│   └── NotificationContext.jsx
├── data/
│   ├── index.js
│   └── dashboardData.js
├── pages/
│   ├── Dashboard/
│   │   ├── Default/
│   │   │   └── DefaultDashboard.jsx
│   │   └── ECommerce/
│   │       └── Orders/
│   │           └── ECommerceOrders.jsx
│   ├── Analytics/
│   │   └── Analytics.jsx
│   ├── Customers/
│   │   └── Customers.jsx
│   ├── Settings/
│   │   └── Settings.jsx
│   └── UserProfile/
│       └── Overview/
│           └── UserOverview.jsx
├── utils/
│   └── timeUtils.js
├── App.jsx
└── main.jsx
```

## Installation

### Prerequisites

- Node.js 16.x or higher
- npm 7.x or higher (or yarn 1.22.x)

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/byewind-admin-dashboard.git
   cd byewind-admin-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist/` directory.

## Usage

### Basic Setup

The dashboard comes with a complete navigation structure and sample data. To get started:

1. The main entry point is `src/App.jsx`
2. Navigation is configured in `src/data/index.js`
3. Theme settings are managed in `src/contexts/ThemeContext.jsx`

### Adding New Pages

1. Create your page component in `src/pages/YourPage/YourPage.jsx`
2. Add the route in `src/App.jsx`
3. Update navigation data in `src/data/index.js`

Example:
```jsx
// src/pages/NewPage/NewPage.jsx
import React from 'react';
import { Container, Typography, Card, CardContent } from '@mui/material';

const NewPage = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" gutterBottom>
        New Page
      </Typography>
      <Card>
        <CardContent>
          Your content here
        </CardContent>
      </Card>
    </Container>
  );
};

export default NewPage;
```

### Using the Advanced Table Component

```jsx
import OrdersTable from '../components/tables/OrdersTable';

const MyComponent = () => {
  const data = [
    {
      id: '#001',
      name: 'John Doe',
      email: 'john@example.com',
      status: 'Active',
      amount: 1250.00
    }
    // ... more data
  ];

  const columns = [
    {
      key: 'id',
      label: 'ID',
      sortable: true,
      width: '100px'
    },
    {
      key: 'name',
      label: 'Name',
      sortable: true,
      render: (value) => <strong>{value}</strong>
    },
    {
      key: 'status',
      label: 'Status',
      filterable: true,
      filterOptions: ['Active', 'Inactive'],
      render: (value) => (
        <Chip 
          label={value} 
          color={value === 'Active' ? 'success' : 'default'} 
        />
      )
    }
  ];

  return (
    <OrdersTable
      data={data}
      columns={columns}
      enableSorting={true}
      enableSearch={true}
      enablePagination={true}
      defaultPageSize={10}
      onRowClick={(row) => console.log('Clicked:', row)}
    />
  );
};
```

## Components

### Layout Components

#### MainLayout
The primary layout wrapper that includes sidebar, header, and content areas.

**Props:**
- No direct props - uses context for state management

#### Sidebar
Collapsible navigation sidebar with nested menu structure.

**Features:**
- Favorites and recent pages
- Hierarchical navigation
- Responsive collapse behavior

#### Header
Top navigation bar with search, notifications, and user actions.

**Features:**
- Breadcrumb navigation
- Global search
- Theme toggle
- Notification indicator

### Data Components

#### OrdersTable
Advanced data table component with comprehensive functionality.

**Props:**
```typescript
interface OrdersTableProps {
  data: Array<any>;
  columns: Array<{
    key: string;
    label: string;
    sortable?: boolean;
    filterable?: boolean;
    filterOptions?: string[];
    width?: string;
    align?: 'left' | 'center' | 'right';
    render?: (value: any, row: any, index: number) => React.ReactNode;
  }>;
  defaultPageSize?: number;
  pageSizeOptions?: number[];
  enableSorting?: boolean;
  enableFiltering?: boolean;
  enableSearch?: boolean;
  enablePagination?: boolean;
  enableRowSelection?: boolean;
  onRowClick?: (row: any, index: number) => void;
  onSelectionChange?: (selectedRows: number[]) => void;
  customStyles?: {
    container?: React.CSSProperties;
    header?: React.CSSProperties;
    cell?: React.CSSProperties;
  };
  loading?: boolean;
  emptyMessage?: string;
}
```

#### CustomPieChart
Customizable pie chart with rounded segments and interactive tooltips.

**Props:**
```typescript
interface CustomPieChartProps {
  data: Array<{
    label: string;
    value: number;
    color?: string;
    outerBorderRadius?: number;
    innerBorderRadius?: number;
  }>;
  size?: number;
  innerRadius?: number;
  outerRadius?: number;
  gap?: number;
  showTooltips?: boolean;
  showLabels?: boolean;
  labelPosition?: 'inside' | 'outside';
  onSegmentClick?: (segment: any, index: number) => void;
  onSegmentHover?: (segment: any, index: number) => void;
}
```

### Context Providers

#### ThemeContext
Manages light/dark theme state and persistence.

```jsx
const { theme, isDarkMode, toggleTheme } = useThemeContext();
```

#### AppContext
Global application state including user profile and UI preferences.

```jsx
const { 
  userProfile, 
  leftSidebarOpen, 
  rightSidebarOpen,
  favorites,
  toggleLeftSidebar,
  toggleRightSidebar,
  toggleFavorite 
} = useAppContext();
```

#### NotificationContext
Real-time notification system with automatic generation.

```jsx
const { 
  notifications, 
  unreadCount, 
  markAsRead,
  addNotification 
} = useNotificationContext();
```

## API Reference

### Data Structure Examples

#### User Profile
```javascript
{
  id: 'user-id',
  name: 'John Doe',
  email: 'john.doe@example.com',
  avatar: 'https://example.com/avatar.jpg',
  role: 'Administrator',
  department: 'Engineering',
  joinDate: '2023-01-15',
  preferences: {
    theme: 'light',
    notifications: {
      email: true,
      push: true,
      desktop: false
    }
  },
  stats: {
    totalProjects: 24,
    completedTasks: 186,
    teamMembers: 12
  }
}
```

#### Navigation Item
```javascript
{
  id: 'unique-id',
  title: 'Menu Item',
  path: '/path/to/page',
  icon: 'MaterialUIIconName',
  subItems: [
    {
      id: 'sub-item-id',
      title: 'Sub Item',
      path: '/sub/path',
      dummy: false
    }
  ]
}
```

#### Table Column Configuration
```javascript
{
  key: 'dataProperty',
  label: 'Display Name',
  sortable: true,
  filterable: true,
  filterOptions: ['Option1', 'Option2'],
  width: '150px',
  align: 'left',
  render: (value, row, index) => {
    return <CustomComponent value={value} />;
  }
}
```

### Helper Functions

#### Time Utilities
```javascript
import { formatDistanceToNow, formatDate } from './utils/timeUtils';

formatDistanceToNow(Date.now() - 60000); // "1 minute ago"
formatDate(new Date()); // "12/25/2023"
```

## Customization

### Theming

The application uses Material-UI's theming system. Customize themes in `src/contexts/ThemeContext.jsx`:

```javascript
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2', // Customize primary color
    },
    secondary: {
      main: '#dc004e', // Customize secondary color
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif', // Custom font
  },
});
```

### Adding Custom Components

1. Create component in appropriate directory
2. Export from index file if needed
3. Import and use in your pages

```jsx
// src/components/custom/MyComponent.jsx
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const MyComponent = ({ title, children }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        {children}
      </CardContent>
    </Card>
  );
};

export default MyComponent;
```

### Styling Guidelines

- Use Material-UI's `sx` prop for component styling
- Follow the established color palette
- Maintain consistent spacing using theme spacing units
- Use responsive breakpoints for mobile compatibility

```jsx
<Box
  sx={{
    p: 3, // padding: theme.spacing(3)
    backgroundColor: 'background.paper',
    borderRadius: 2,
    boxShadow: 1,
    [theme.breakpoints.down('md')]: {
      p: 2, // Smaller padding on mobile
    },
  }}
>
  Content
</Box>
```

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Deploy automatically on push to main branch

### Netlify

1. Connect repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy

### Manual Deployment

```bash
# Build the project
npm run build

# Upload the dist/ folder to your web server
```

### Environment Variables

Create `.env` file for environment-specific configurations:

```env
VITE_APP_TITLE=ByeWind Admin Dashboard
VITE_API_BASE_URL=https://api.example.com
VITE_ENABLE_ANALYTICS=true
```

## Performance Optimization

### Code Splitting

```javascript
// Lazy load pages
const Dashboard = lazy(() => import('./pages/Dashboard/DefaultDashboard'));
const Analytics = lazy(() => import('./pages/Analytics/Analytics'));

// Use Suspense
<Suspense fallback={<div>Loading...</div>}>
  <Dashboard />
</Suspense>
```

### Image Optimization

- Use WebP format when possible
- Implement lazy loading for images
- Use appropriate image sizes for different breakpoints

### Bundle Analysis

```bash
npm run build -- --analyze
```

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

We welcome contributions to improve the ByeWind Admin Dashboard. Please follow these guidelines:

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes following the coding standards
4. Add tests for new functionality
5. Commit with descriptive messages
6. Push to your fork and submit a pull request

### Coding Standards

- Use functional components with hooks
- Follow ESLint configuration
- Write meaningful component and variable names
- Add JSDoc comments for complex functions
- Ensure responsive design
- Test on multiple browsers

### Commit Message Format

```
type(scope): description

feat(dashboard): add new analytics chart
fix(table): resolve sorting issue with dates
docs(readme): update installation instructions
```

## Troubleshooting

### Common Issues

**Issue: Build fails with memory error**
```bash
# Solution: Increase Node.js memory limit
NODE_OPTIONS="--max_old_space_size=4096" npm run build
```

**Issue: Icons not displaying**
- Ensure Material-UI icons package is installed
- Check import statements for correct icon names

**Issue: Theme not persisting**
- Verify localStorage is available
- Check ThemeContext implementation

**Issue: Table not responsive**
- Ensure parent container allows overflow
- Check table wrapper styling

### Performance Issues

If you experience slow performance:

1. Enable React Developer Tools Profiler
2. Identify slow-rendering components
3. Implement React.memo for expensive components
4. Use useMemo and useCallback for expensive computations

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Material-UI team for the comprehensive component library
- React team for the powerful framework
- Vite team for the fast build tool
- Community contributors and feedback

---

## Support

For questions, issues, or contributions, please:

- Open an issue on GitHub
- Check existing documentation
- Review code examples in the components

**Project Status:** Active Development
**Version:** 1.0.0
**Last Updated:** December 2024