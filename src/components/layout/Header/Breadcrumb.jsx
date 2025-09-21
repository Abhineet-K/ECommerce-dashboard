import React from 'react';
import { Breadcrumbs, Typography, Link } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

// Map path segment to label and (optionally) a default subpath
const breadcrumbMap = {
  dashboard: { label: 'Dashboard', default: '/dashboard/default' },
  default: { label: 'Default' },
  'e-commerce': { label: 'E-commerce', default: '/dashboard/e-commerce/orders' },
  orders: { label: 'Orders' },
  'user-profile': { label: 'User Profile', default: '/user-profile/overview' },
  overview: { label: 'Overview' },
  // Add more as needed
};

const Breadcrumb = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const pathnames = location.pathname.split('/').filter(Boolean);

  let accumulatedPath = '';
  const breadcrumbs = pathnames.map((segment, idx) => {
    accumulatedPath += `/${segment}`;
    const config = breadcrumbMap[segment] || { label: segment };

    // Last breadcrumb is not a link
    const isLast = idx === pathnames.length - 1;
    return isLast ? (
      <Typography key={accumulatedPath} color="text.primary" fontSize="0.875rem" fontWeight={500}>
        {config.label}
      </Typography>
    ) : (
      <Link
        key={accumulatedPath}
        color="inherit"
        href="#"
        onClick={e => {
          e.preventDefault();
          // If this segment has a default subpage, navigate to it
          if (config.default) {
            navigate(config.default);
          } else {
            navigate(accumulatedPath);
          }
        }}
        sx={{
          textDecoration: 'none',
          fontSize: '0.875rem',
          '&:hover': { textDecoration: 'underline' }
        }}
      >
        {config.label}
      </Link>
    );
  });

  // Optionally, add a root breadcrumb
  if (breadcrumbs.length === 0) {
    breadcrumbs.unshift(
      <Typography key="dashboard" color="text.primary" fontSize="0.875rem" fontWeight={500}>
        Dashboard
      </Typography>
    );
  }

  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ color: 'text.secondary' }}>
      {breadcrumbs}
    </Breadcrumbs>
  );
};

export default Breadcrumb;