// File: src/components/layout/Sidebar/FavoritesRecent.jsx
import React from 'react';
import { Box, Tabs, Tab, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Star, History, Dashboard, ShoppingCart, AccountCircle } from '@mui/icons-material';
import { useNavigationContext } from '../../../contexts/NavigationContext';
import { useAppContext } from '../../../contexts/AppContext';
import { useNavigate } from 'react-router-dom';

const FavoritesRecent = () => {
  const { activeTab, setActiveTab } = useNavigationContext();
  const { favorites } = useAppContext();
  const navigate = useNavigate();

  const favoritePages = [
    { path: '/dashboard', title: 'Overview', icon: <Dashboard /> },
    { path: '/dashboard/e-commerce/orders', title: 'Orders', icon: <ShoppingCart /> },
    { path: '/user-profile/overview', title: 'Profile', icon: <AccountCircle /> }
  ].filter(page => favorites.includes(page.path));

  const recentPages = [
    { path: '/dashboard', title: 'Overview', icon: <Dashboard /> },
    { path: '/user-profile/overview', title: 'Profile', icon: <AccountCircle /> }
  ];

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Box sx={{ px: 0 }}>
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        sx={{
          minHeight: 'auto',
          '& .MuiTab-root': {
            minHeight: 'auto',
            py: 1,
            fontSize: '0.875rem',
            color: '#cccccc',
            '&.Mui-selected': {
              color: '#999999',
            },
          },
          '& .MuiTabs-indicator': {
            display: 'none',
          }
        }}
      >
        <Tab
          label="Favorites"
          value="favorites"
          iconPosition="start"
          sx={{ flexDirection: 'row', gap: 0.5, py: 0.5, px: 1 }}
        />
        <Tab
          label="Recently"
          value="recently"
          iconPosition="start"
          sx={{ flexDirection: 'row', gap: 0.5, py: 0.5, px: 1 }}
        />
      </Tabs>

      <Box sx={{ mt: 0.5 }}>
        {activeTab === 'favorites' && (
          <List dense sx={{ p: 0, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
            {favoritePages.length > 0 ? (
              favoritePages.map((page) => (
                <ListItem
                  key={page.path}
                  button
                  onClick={() => handleNavigation(page.path)}
                  sx={{ py: 0.5, px: 1, borderRadius: 1 }}
                >
                  <Box
                    sx={{
                      width: 8,
                      height: 8,

                      margin: '8px',
                      borderRadius: '50%',
                      backgroundColor: '#8b8b8ba8',
                    }}
                  />

                  <ListItemText
                    primary={page.title}
                    primaryTypographyProps={{ fontSize: '0.875rem' }}
                  />
                </ListItem>
              ))
            ) : (
              <ListItem sx={{ py: 1, px: 1 }}>
                <ListItemText
                  primary="No favorites yet"
                  primaryTypographyProps={{
                    fontSize: '0.875rem',
                    color: 'text.secondary',
                    fontStyle: 'italic'
                  }}
                />
              </ListItem>
            )}
          </List>
        )}

        {activeTab === 'recently' && (
          <List dense sx={{ p: 0, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
            {recentPages.map((page) => (
              <ListItem
                key={page.path}
                button
                onClick={() => handleNavigation(page.path)}
                sx={{ py: 0.5, px: 1, borderRadius: 1 }}
              >
                <ListItemIcon sx={{ minWidth: 32 }}>
                  {page.icon}
                </ListItemIcon>
                <ListItemText
                  primary={page.title}
                  primaryTypographyProps={{ fontSize: '0.875rem' }}
                />
              </ListItem>
            ))}
          </List>
        )}
      </Box>
    </Box>
  );
};

export default FavoritesRecent;