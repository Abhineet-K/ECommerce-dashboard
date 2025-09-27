import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import App from './App.jsx'
import { AppProvider } from './providers/AppProvider.jsx'
import { NotificationProvider } from './providers/NotificationProvider.jsx'
import { NavigationProvider } from './providers/NavigationProvider.jsx'
import { ThemeContextProvider } from './providers/ThemeContextProvider.jsx'

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