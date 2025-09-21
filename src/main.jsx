import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import App from './App.jsx'
import { AppProvider } from './providers/AppProvider.jsx'
import { NotificationProvider } from './contexts/NotificationContext.jsx'
import { NavigationProvider } from './contexts/NavigationContext.jsx'
import { ThemeContextProvider } from './contexts/ThemeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
        <AppProvider>
          <NotificationProvider>
            <NavigationProvider>
              <CssBaseline />
              <App />
            </NavigationProvider>
          </NotificationProvider>
        </AppProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)