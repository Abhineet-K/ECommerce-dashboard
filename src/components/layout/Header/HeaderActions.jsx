import React from 'react';
import { Box, IconButton, Badge } from '@mui/material';
import {
  Search as SearchIcon,
  LightMode,
  DarkMode,
  Notifications,
  Menu as MenuIcon
} from '@mui/icons-material';
import { useThemeContext } from '../../../contexts/ThemeContext';
import { useNotificationContext } from '../../../contexts/NotificationContext';
import { useAppContext } from '../../../contexts/AppContext';
import SearchBox from './SearchBox';

const HeaderActions = () => {
  const { isDarkMode, toggleTheme } = useThemeContext();
  const { unreadCount } = useNotificationContext();
  const { toggleRightSidebar } = useAppContext();

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      {/* Search Box */}
      <SearchBox />

      {/* Theme Toggle */}
      <IconButton
        onClick={toggleTheme}
        color="inherit"
        sx={{ color: 'text.primary' }}
      >
        {isDarkMode ? (<DarkMode />) : (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="theme-contrast--icon"><path id="icon-theme--background" d="M14.375 10a4.375 4.375 0 1 1-8.75 0 4.375 4.375 0 0 1 8.75 0" fill="#fff" fill-opacity=".1" /><path id="icon--border" d="M9.375 3.125V1.25a.625.625 0 0 1 1.25 0v1.875a.625.625 0 1 1-1.25 0M15 10a5 5 0 1 1-10 0 5 5 0 0 1 10 0m-1.25 0a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0M4.558 5.442a.625.625 0 0 0 .884-.884l-1.25-1.25a.625.625 0 0 0-.884.884zm0 9.116-1.25 1.25a.625.625 0 0 0 .884.884l1.25-1.25a.626.626 0 0 0-.884-.884M15 5.625a.63.63 0 0 0 .442-.183l1.25-1.25a.625.625 0 0 0-.884-.884l-1.25 1.25A.625.625 0 0 0 15 5.625m.442 8.933a.625.625 0 0 0-.884.884l1.25 1.25a.624.624 0 1 0 .884-.884zM3.75 10a.625.625 0 0 0-.625-.625H1.25a.625.625 0 0 0 0 1.25h1.875A.625.625 0 0 0 3.75 10M10 16.25a.625.625 0 0 0-.625.625v1.875a.625.625 0 1 0 1.25 0v-1.875A.624.624 0 0 0 10 16.25m8.75-6.875h-1.875a.625.625 0 1 0 0 1.25h1.875a.624.624 0 1 0 0-1.25"/></svg>)}
      </IconButton>

      <IconButton
        color="inherit"
        sx={{ color: 'text.primary' }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="theme-contrast--icon"><path d="M16.875 10a6.875 6.875 0 1 1-13.75 0 6.875 6.875 0 0 1 13.75 0" id="icon-theme--background" /><path id="icon--border" d="M10.625 6.25v3.396l2.822 1.693a.626.626 0 0 1-.644 1.072l-3.125-1.875A.63.63 0 0 1 9.375 10V6.25a.625.625 0 0 1 1.25 0M10 2.5a7.46 7.46 0 0 0-5.306 2.2 32 32 0 0 0-1.569 1.706V5a.625.625 0 0 0-1.25 0v3.125a.625.625 0 0 0 .625.625h3.125a.625.625 0 1 0 0-1.25H3.828a34 34 0 0 1 1.75-1.92 6.25 6.25 0 1 1 .129 8.965.626.626 0 0 0-.86.91A7.5 7.5 0 1 0 10 2.5" /></svg>
      </IconButton>

      {/* Notifications */}
      <IconButton
        color="inherit"
        sx={{ color: 'text.primary' }}
      >
        <Badge badgeContent={unreadCount} color="error">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="theme-contrast--icon"><path d="M16.25 15H3.75a.626.626 0 0 1-.538-.937c.515-.891 1.163-3.14 1.163-5.938a5.625 5.625 0 0 1 11.25 0c0 2.798.648 5.047 1.164 5.938a.626.626 0 0 1-.54.937" /><path id="icon--border" d="M17.328 13.745c-.433-.747-1.078-2.86-1.078-5.62a6.25 6.25 0 0 0-12.5 0c0 2.76-.645 4.873-1.079 5.62a1.25 1.25 0 0 0 1.08 1.88h3.187a3.125 3.125 0 0 0 6.124 0h3.188a1.25 1.25 0 0 0 1.078-1.88M10 16.875a1.875 1.875 0 0 1-1.767-1.25h3.534A1.88 1.88 0 0 1 10 16.875m-6.25-2.5C4.352 13.341 5 10.944 5 8.125a5 5 0 0 1 10 0c0 2.816.647 5.213 1.25 6.25z" /></svg>
        </Badge>
      </IconButton>

      {/* Right Sidebar Toggle */}
      <IconButton
        onClick={toggleRightSidebar}
        color="inherit"
        sx={{ color: 'text.primary' }}
      >
        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" className="theme-contrast--icon"><path id="icon--border" d="M15.875.125H2.125a1.25 1.25 0 0 0-1.25 1.25v11.25a1.25 1.25 0 0 0 1.25 1.25h13.75a1.25 1.25 0 0 0 1.25-1.25V1.375a1.25 1.25 0 0 0-1.25-1.25m-13.75 8.75h1.25a.625.625 0 0 0 0-1.25h-1.25v-1.25h1.25a.625.625 0 0 0 0-1.25h-1.25v-1.25h1.25a.625.625 0 0 0 0-1.25h-1.25v-1.25H5.25v11.25H2.125zm13.75 3.75H6.5V1.375h9.375z"/></svg>
      </IconButton>
    </Box>
  );
};

export default HeaderActions;