// File: src/components/layout/Sidebar/Sidebar.jsx //
import React from 'react';
import {
  Drawer,
  Box,
  Typography,
  Avatar,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { useAppContext } from '../../../contexts/AppContext';
import FavoritesRecent from './FavoritesRecent';
import NavigationSection from './NavigationSection';
import { navigationData } from '../../../utils/data';

const Sidebar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { leftSidebarOpen, toggleLeftSidebar } = useAppContext();

  const sidebarWidth = 212;

  const drawerContent = (
    <Box sx={{
      height: '100%', display: 'flex', flexDirection: 'column',
      gap: 2,
      overflowX: 'hidden', '&::-webkit-scrollbar': { display: 'none' },
      msOverflowStyle: 'none',
      scrollbarWidth: 'none',
      px: 2
    }}>
      {/* Logo Section */}
      <Box sx={{ pt: '20px', display: 'flex', alignItems: 'center', gap: 2, position: 'sticky', top: 0, left: 0, bgcolor: theme.palette.background.default, zIndex: 1 }}>
        <Avatar
          sx={{
            width: 40,
            height: 40,
            bgcolor: '#F7F9FB',
            color: '#2f2f2fff',
            fontSize: '1.2rem',
            fontWeight: 'bold'
          }}
        >
          B
        </Avatar>
        <Typography variant="h6" sx={{ color: theme.palette.text.primary }}>
          ByeWind
        </Typography>
      </Box>


      {/* Favorites & Recently Tabs */}
      <FavoritesRecent />


      {/* Dashboard Section */}
      <NavigationSection
        title={navigationData.dashboard.title}
        items={navigationData.dashboard.items}
      />

      {/* Pages Section */}
      <NavigationSection
        title={navigationData.pages.title}
        items={navigationData.pages.items}
      />
    </Box>
  );

  return (
    <>
      {isMobile ? (
        <Drawer
          variant="temporary"
          open={leftSidebarOpen}
          onClose={toggleLeftSidebar}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: sidebarWidth,
              backgroundColor: theme.palette.background.default,
              borderRight: `1px solid ${theme.palette.layoutBorder}`,
              boxShadow: 'none'
            },
          }}
        >
          {drawerContent}
        </Drawer>
      ) : (
        <Drawer
          variant="persistent"
          anchor="left"
          open={leftSidebarOpen}
          sx={{
            width: leftSidebarOpen ? sidebarWidth : 0,
            flexShrink: 0,

            '& .MuiDrawer-paper': {
              width: sidebarWidth,
              boxSizing: 'border-box',
              backgroundColor: theme.palette.background.default,
              borderRight: `1px solid ${theme.palette.layoutBorder}`,
              boxShadow: 'none'
            },
          }}

        >
          {drawerContent}
        </Drawer>
      )}
    </>
  );
};

export default Sidebar;