// File: src/components/layout/Header/header.jsx //
import React from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { useAppContext } from '../../../contexts/AppContext';
import HeaderActions from './HeaderActions';
import Breadcrumb from './Breadcrumb';
import FavoriteButton from '../../common/FavoriteButton';
import { IconButton } from '@mui/material';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { toggleLeftSidebar } = useAppContext();

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: theme.palette.background.default,
        borderBottom: `1px solid ${theme.palette.layoutBorder}`,
        zIndex: theme.zIndex.drawer - 1,
        boxShadow: 'none'
      }}
    >
      <Toolbar sx={{ px: 3, gap: 2 }}>
        {/* Left Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {/* Sidebar Toggle */}
          <IconButton
            edge="start"
            aria-label="toggle sidebar"
            onClick={toggleLeftSidebar}
            sx={{ color: theme.palette.text.primary }}
          >
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" className="theme-contrast--icon"><path id="icon--border" d="M15.875.125H2.125a1.25 1.25 0 0 0-1.25 1.25v11.25a1.25 1.25 0 0 0 1.25 1.25h13.75a1.25 1.25 0 0 0 1.25-1.25V1.375a1.25 1.25 0 0 0-1.25-1.25m-13.75 8.75h1.25a.625.625 0 0 0 0-1.25h-1.25v-1.25h1.25a.625.625 0 0 0 0-1.25h-1.25v-1.25h1.25a.625.625 0 0 0 0-1.25h-1.25v-1.25H5.25v11.25H2.125zm13.75 3.75H6.5V1.375h9.375z"/></svg>
          </IconButton>


          {/* Favorite Button */}
          <FavoriteButton />

          {/* Breadcrumb */}
          {!isMobile && <Breadcrumb />}
        </Box>

        {/* Spacer */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Right Section */}
        <HeaderActions />
      </Toolbar>
    </AppBar>
  );
};

export default Header;