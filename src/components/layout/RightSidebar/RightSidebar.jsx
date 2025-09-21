import React from 'react';
import {
  Drawer,
  Box,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { useAppContext } from '../../../contexts/AppContext';
import NotificationsBlock from './NotificationsBlock';
import ActivitiesBlock from './ActivitiesBlock';
import ContactsBlock from './ContactsBlock';

const RightSidebar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { rightSidebarOpen, toggleRightSidebar } = useAppContext();

  const sidebarWidth = 280;

  const drawerContent = (
    <Box sx={{
      width: sidebarWidth, height: '100%', display: 'flex', flexDirection: 'column', overflowX: 'hidden', '&::-webkit-scrollbar': { display: 'none' },
      msOverflowStyle: 'none',
      scrollbarWidth: 'none', padding: '20px'
    }}>

      {/* Notifications Block */}
      <NotificationsBlock />

      {/* Activities Block */}
      <ActivitiesBlock />

      {/* Contacts Block */}
      <ContactsBlock />
    </Box>
  );

  return (
    <>
      {isMobile ? (
        <Drawer
          variant="temporary"
          anchor="right"
          open={rightSidebarOpen}
          onClose={toggleRightSidebar}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: sidebarWidth,
              backgroundColor: theme.palette.background.default,
              borderLeft: `1px solid ${theme.palette.layoutBorder}`,
              boxShadow: 'none'
            },
          }}
        >
          {drawerContent}
        </Drawer>
      ) : (
        <Drawer
          variant="persistent"
          anchor="right"
          open={rightSidebarOpen}
          sx={{
            width: rightSidebarOpen ? sidebarWidth : 0,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: sidebarWidth,
              boxSizing: 'border-box',
              backgroundColor: theme.palette.background.default,
              borderLeft: `1px solid ${theme.palette.layoutBorder}`,
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

export default RightSidebar;