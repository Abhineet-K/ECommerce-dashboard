// File: src/components/layout/Sidebar/NavigationSection.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import NavigationTab from './NavigationTab';

const NavigationSection = ({ title, items }) => {
  return (
    <Box>
      <Typography
        variant="overline"
        sx={{
          display: 'block',
          color: '#999999',
          fontSize: '14px',
          letterSpacing: 1,
          mb: 1,
          px: '12px',
          py: 0.5,
          textTransform: 'capitalize'
        }}
      >
        {title}
      </Typography>
      
      {items.map((item) => (
        <NavigationTab key={item.id} item={item} />
      ))}
    </Box>
  );
};

export default NavigationSection;