import React from 'react';
import { Box, Tabs, Tab, List, ListItem, ListItemText, useTheme } from '@mui/material';
import { useNavigationContext } from '../../../contexts/NavigationContext';
import { useAppContext } from '../../../contexts/AppContext';
import { useNavigate } from 'react-router-dom';

const FavoritesRecent = () => {
  const { activeTab, setActiveTab } = useNavigationContext();
  const { favorites } = useAppContext();
  const navigate = useNavigate();
  const theme = useTheme();

  const favoritePages = [
    { path: '/dashboard/default', title: 'Default' },
    { path: '/dashboard/e-commerce/orders', title: 'Orders' },
    { path: '/dashboard/e-commerce/customers', title: 'Customers' }
  ].filter(page => favorites.includes(page.path));

  const recentPages = [
    { path: '/dashboard/e-commerce/customers', title: 'Customers' }
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
            color: theme.palette.mode === 'dark' ? '#999999' : '#cccccc',
            '&.Mui-selected': {
              color: theme.palette.mode === 'dark' ? '#cccccc' : '#999999',
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
            ))}
          </List>
        )}
      </Box>
    </Box>
  );
};

export default FavoritesRecent;