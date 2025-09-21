import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { useAppContext } from '../../../contexts/AppContext';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import RightSidebar from '../RightSidebar/RightSidebar';

const MainLayout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { rightSidebarOpen } = useAppContext();

  const rightSidebarWidth = 280;

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          marginLeft: 0,
          marginRight: 0,
          transition: theme.transitions.create(['all'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          overflow: 'hidden',
          width: rightSidebarOpen && !isMobile ? `calc(100% - ${rightSidebarWidth}px)` : '100%',
        }}
      >
        <Header />
        {/* Main Body */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            overflowY: 'auto',
            overflowX: 'hidden',
            backgroundColor: theme.palette.background.default,
            '&::-webkit-scrollbar': { display: 'none' },
            msOverflowStyle: 'none',
            scrollbarWidth: 'none'
          }}
        >
          <Outlet />
        </Box>
      </Box>

      {/* Right Sidebar */}
      <RightSidebar />
    </Box>
  );
};

export default MainLayout;