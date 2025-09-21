import React, { useState, useRef } from 'react';
import {
  Box,
  TextField,
  InputAdornment,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Popper,
  ClickAwayListener,
  Fade,
  useTheme,
  useMediaQuery,
  IconButton,
  Popover
} from '@mui/material';
import {
  Search as SearchIcon,
  Dashboard,
  Inventory,
  People as PeopleIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { searchData } from '../../../utils/data';

const SearchBox = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [searchTerm, setSearchTerm] = useState('');
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const navigate = useNavigate();

  const getIcon = (category) => {
    switch (category) {
      case 'Pages':
        return <Dashboard />;
      case 'Products':
        return <Inventory />;
      case 'Customers':
        return <PeopleIcon />;
      default:
        return <SearchIcon />;
    }
  };

  const searchResults = React.useMemo(() => {
    if (!searchTerm.trim()) return [];

    const query = searchTerm.toLowerCase();
    const results = [];

    // Search pages
    if (searchData.pages) {
      searchData.pages.forEach(page => {
        if (
          page.title.toLowerCase().includes(query) ||
          (page.keywords && page.keywords.some(keyword => keyword.toLowerCase().includes(query)))
        ) {
          results.push({ ...page, category: 'Pages' });
        }
      });
    }

    // Search products
    if (searchData.products) {
      searchData.products.forEach(product => {
        if (
          product.title.toLowerCase().includes(query) ||
          (product.keywords && product.keywords.some(keyword => keyword.toLowerCase().includes(query)))
        ) {
          results.push({ ...product, category: 'Products' });
        }
      });
    }

    // Search customers
    if (searchData.customers) {
      searchData.customers.forEach(customer => {
        if (
          customer.name.toLowerCase().includes(query) ||
          customer.email.toLowerCase().includes(query) ||
          (customer.keywords && customer.keywords.some(keyword => keyword.toLowerCase().includes(query)))
        ) {
          results.push({ ...customer, category: 'Customers' });
        }
      });
    }

    return results.slice(0, 8); // Limit results
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    setOpen(Boolean(value.trim()));
  };

  const handleResultClick = (result) => {
    if (result.path) {
      navigate(result.path);
    }
    setSearchTerm('');
    setOpen(false);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  // Group results by category
  const groupedResults = searchResults.reduce((acc, result) => {
    const category = result.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(result);
    return acc;
  }, {});

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box sx={{ position: 'relative' }}>
        {!isMobile && (

          <TextField
            ref={anchorRef}
            size="small"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            sx={{
              maxWidth: 300,
              '& .MuiOutlinedInput-root': {
                backgroundColor: theme.palette.background.secondary,
                borderRadius: '8px',

                // hide border by default
                '& fieldset': {
                  border: 'none',
                },

                // show thin outline on focus
                '&.Mui-focused fieldset': {
                  border: '1px solid',
                  borderColor: (theme) => theme.palette.primary.main,
                },
              },
              '& input': {
                color: (theme) => theme.palette.text.primary,
              },
              '& .MuiInputAdornment-root': {
                color: (theme) => theme.palette.text.secondary,
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />

        )}
        {isMobile && (
          <IconButton ref={anchorRef} onClick={() => setOpen((prev) => !prev)}>
            <SearchIcon />
          </IconButton>
        )}

        {/* Popover for mobile */}
        {isMobile && (
          <Popover
            open={open}
            anchorEl={anchorRef.current}
            onClose={handleClickAway}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            PaperProps={{
              sx: {
                p: 1,
                mt: 1,
                width: '90%',
                maxWidth: 350,
              },
            }}
            TransitionComponent={Fade}
          >
            <TextField
              size="small"
              placeholder="Search..."
              fullWidth
              value={searchTerm}
              onChange={handleSearchChange}
              autoFocus
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: theme.palette.background.secondary,
                  borderRadius: '8px',
                  '& fieldset': { border: 'none' },
                  '&.Mui-focused fieldset': {
                    border: '1px solid',
                    borderColor: theme.palette.primary.main,
                  },
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Popover>
        )}
        <Popper
          open={open && searchResults.length > 0}
          anchorEl={anchorRef.current}
          placement="bottom-start"
          transition
          modifiers={
            isMobile
              ? [
                {
                  name: 'offset',
                  options: {
                    offset: ({ popper }) => {
                      return [0, popper.height * 0.15]; 
                    },
                  },
                },
              ]
              : []
          }
          sx={{ zIndex: 1300, width: 400 }}
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={150}>
              <Paper
                elevation={4}
                sx={{
                  mt: 1,
                  maxHeight: 350,
                  overflowY: 'auto',
                  width: '100%',
                  p: 1,
                }}
              >
                {Object.keys(groupedResults).map((category) => (
                  <Box key={category} sx={{ mb: 1 }}>
                    <Typography
                      variant="subtitle2"
                      sx={{ px: 2, py: 1, color: 'text.secondary' }}
                    >
                      {category}
                    </Typography>
                    <List dense disablePadding>
                      {groupedResults[category].map((result, idx) => (
                        <ListItem
                          button
                          key={result.id || result.title || idx}
                          onClick={() => handleResultClick(result)}
                          sx={{
                            borderRadius: 1,
                            mb: 0.5,
                          }}
                        >
                          <ListItemIcon sx={{ minWidth: 36 }}>
                            {getIcon(category)}
                          </ListItemIcon>
                          <ListItemText
                            primary={result.title || result.name}
                            secondary={result.email || result.subtitle}
                            primaryTypographyProps={{ fontWeight: 500 }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                ))}
              </Paper>
            </Fade>
          )}
        </Popper>
      </Box>
    </ClickAwayListener>
  );
};

export default SearchBox;