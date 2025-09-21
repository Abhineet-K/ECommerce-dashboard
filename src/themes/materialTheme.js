// src/themes/materialTheme.js
import { createTheme } from '@mui/material/styles';

const commonTheme = {
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.25rem',
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2rem',
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '1.75rem',
      lineHeight: 1.4,
    },
    h4: {
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.25rem',
      lineHeight: 1.5,
    },
    h6: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },

    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          border: 'none',
          boxShadow: '0 0 20px rgba(0,0,0,0.05)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          backdropFilter: 'blur(10px)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
          borderRadius: 16,
          border: '1px solid rgba(0,0,0,0.05)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: '10px 20px',
          fontWeight: 500,
        },
        contained: {
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          '&:hover': {
            boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 10,
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          margin: '2px 8px',
          '&.Mui-selected': {
            borderRadius: 10,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
};

export const lightTheme = createTheme({
  ...commonTheme,
  palette: {
    mode: 'light',
    primary: {
      main: '#3b82f6',
      light: '#F7F9FB',
      dark: '#1e40af',
      blue: '#E3F5FF',
      purple: '#E5ECF6',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#6b7280',
      light: '#d1d5db',
      dark: '#374151',
    },
    background: {
      default: '#FFFFFF',
      contrastDefault: '#1C1C1C',
      paper: '#ddddddff',
      secondary: '#F2F2F2'
    },
    text: {
      primary: '#1C1C1C',
      secondary: '#6b7280',
    },
    layoutBorder: '#e6e6e6',
    divider: '#e5e7eb',
    success: {
      main: '#10b981',
      light: '#d1fae5',
      dark: '#047857',
    },
    warning: {
      main: '#f59e0b',
      light: '#fef3c7',
      dark: '#d97706',
    },
    error: {
      main: '#ef4444',
      light: '#fee2e2',
      dark: '#dc2626',
    },
    info: {
      main: '#06b6d4',
      light: '#cffafe',
      dark: '#0891b2',
    },
    mapMarker: { main: '#1c1c1c' }
  },
});

export const darkTheme = createTheme({
  ...commonTheme,
  palette: {
    mode: 'dark',
    primary: {
      main: '#3b82f6',
      light: '#FFFFFF0D',
      dark: '#1d4ed8',
      blue: '#E3F5FF',
      purple: '#E5ECF6',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#94a3b8',
      light: '#cbd5e1',
      dark: '#475569',
    },
    background: {
      default: '#1C1C1C',
      contrastDefault: '#ffffff',
      paper: '#363636ff',
      secondary: '#FFFFFF0D'
    },
    text: {
      primary: '#f8fafc',
      secondary: '#cbd5e1',
    },
    layoutBorder: 'rgba(230, 230, 230, 0.1)',
    divider: '#334155',
    success: {
      main: '#10b981',
      light: '#34d399',
      dark: '#047857',
    },
    warning: {
      main: '#f59e0b',
      light: '#fbbf24',
      dark: '#d97706',
    },
    error: {
      main: '#ef4444',
      light: '#f87171',
      dark: '#dc2626',
    },
    info: {
      main: '#06b6d4',
      light: '#22d3ee',
      dark: '#0891b2',
    },
    mapMarker: { main: '#C6C7F8' }
  },
});