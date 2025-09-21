import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useThemeContext } from './contexts/ThemeContext';
import MainLayout from './components/layout/MainLayout/MainLayout';
import DefaultDashboard from './pages/Dashboard/Default/DefaultDashboard';
import ECommerceOrders from './pages/Dashboard/ECommerce/Orders/ECommerceOrders';
import Customers from './pages/Customers/Customers';
import './styles/globals.css';

function App() {
  const { theme } = useThemeContext();
  
  useEffect(() => {
    document.body.setAttribute(
      'data-mui-color-scheme',
      theme.palette.mode
    );
  }, [theme.palette.mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard/default" replace />} />
        <Route path="/dashboard" element={<Navigate to="/dashboard/default" replace />} />
        <Route path="/*" element={<MainLayout />}>
          <Route path="dashboard/default" element={<DefaultDashboard />} />
          <Route path="dashboard/e-commerce/orders" element={<ECommerceOrders />} />
          <Route path="dashboard/e-commerce/customers" element={<Customers />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;