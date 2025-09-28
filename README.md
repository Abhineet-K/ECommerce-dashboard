# E-Commerce Admin Dashboard

A comprehensive, modern admin dashboard built with React, Material-UI, and Vite. This project provides a fully responsive, feature-rich administrative interface with advanced data visualization, table management, and user experience components.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Customization](#customization)
- [Deployment](#deployment)
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
│   │   │   ├── NavigationSection.jsx
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
│   │   └── DonutChart.jsx
│   ├── ui/
│   |    └── Table/
│   │       └── Table.jsx
│   └── common/
│       └── FavoriteButton.jsx
├── contexts/
│   ├── AppContext.jsx
│   ├── NavigationContext.jsx
│   └── NotificationContext.jsx
│   ├── ThemeContext.jsx
├── data/
│   ├── index.js
│   └── dashboardData.js
├── pages/
│   │   └── ECommerce/
│   │       └── Orders/
│   │           └── ECommerceOrders.jsx
│   └── Customers/
│       └── Customers.jsx
├── providers/
│   ├── AppProvider.jsx
│   ├── NavigationProvider.jsx
│   ├── NotificationProvider.jsx
│   └── ThemeContextProvider.jsx
├── styles/
│   └── globals.css
├── themes/
│   └── materialTheme.js
├── utils/
│   ├── constant.js
│   ├── constant.js
│   ├── data.js
│   ├── helpers.js
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
   git clone https://github.com/Abhineet-K/ECommerce-dashboard.git
   cd ecommerce-admin-dashboard
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
3. Update navigation data in `src/utils/data.js`

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

### Using the Custom Table Component

```jsx
import Table from '../components/ui/Table/Table';

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
    <Table
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

#### Table
Advanced data table component with comprehensive functionality.

#### Custom Donut Chart
Customizable pie chart with rounded segments and interactive tooltips.

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

### Manual Deployment

```bash
# Build the project
npm run build

# Upload the dist/ folder to your web server
```

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Material-UI team for the comprehensive component library
- React team for the powerful framework
- Vite team for the fast build tool
- Community contributors and feedback

---