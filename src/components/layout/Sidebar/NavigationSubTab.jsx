// File: src/components/layout/Sidebar/NavigationSubTab.jsx
import React from 'react';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  useTheme,
  Box
} from '@mui/material';
import {
  Receipt,
  Inventory,
  People,
  RateReview,
  Task,
  Group,
  Assessment,
  MenuBook,
  Person,
  Quiz,
  Visibility,
  Work,
  Campaign,
  Description,
  Payment,
  Hub,
  CorporateFare,
  Policy,
  Event,
  List as ListIcon,
  Forum,
  LocalOffer
} from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';

const iconMap = {
  Receipt,
  Inventory,
  People,
  RateReview,
  Task,
  Group,
  Assessment,
  MenuBook,
  Person,
  Quiz,
  Visibility,
  Work,
  Campaign,
  Description,
  Payment,
  Hub,
  CorporateFare,
  Policy,
  Event,
  List: ListIcon,
  Forum,
  LocalOffer
};

const NavigationSubTab = ({ item }) => {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const IconComponent = iconMap[item.icon];
  const isActive = item.path && location.pathname === item.path;

  const handleClick = () => {
    if (item.path && !item.dummy) {
      navigate(item.path);
    }
  };

  return (
    <ListItem
      button
      onClick={handleClick}
      disabled={item.dummy}
      sx={{
        py: 0.5,
        pr: 1,
        pl: 0,
        borderRadius: 1,
        mb: 0.5,
        backgroundColor: isActive ? theme.palette.background.secondary : 'transparent',
        '&:hover': {
          backgroundColor: theme.palette.background.secondary,
        },
        '&.Mui-disabled': {
          opacity: 0.6,
        },
      }}
    >
      <Box sx={{ width: 24, height: 20, mr: '28px' }}>
        {isActive && (
          <Box
            sx={{
              width: '3px',
              height: '100%',
              border: '3px solid',
              borderColor: theme.palette.background.contrastDefault,
              borderRadius: 1,
            }}
          />)}
      </Box>

      <ListItemText
        primary={item.title}
        primaryTypographyProps={{
          fontSize: '0.8rem',
          color: theme.palette.text.primary
        }}
      />

      {item.highlighted && !item.dummy && (
        <Box
          sx={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            backgroundColor: theme.palette.success.main,
            mr: 1
          }}
        />
      )}
    </ListItem>
  );
};

export default NavigationSubTab;