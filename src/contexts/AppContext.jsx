// File: src/contexts/AppContext.jsx //

import React, { createContext, useContext, useState, useEffect } from 'react';
import { userProfileData } from '../data/index';

const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(true);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });
  const [userProfile, setUserProfile] = useState(userProfileData);

  const toggleLeftSidebar = () => setLeftSidebarOpen(prev => !prev);
  const toggleRightSidebar = () => setRightSidebarOpen(prev => !prev);

  const toggleFavorite = (path) => {
    setFavorites(prev => {
      const newFavorites = prev.includes(path) 
        ? prev.filter(fav => fav !== path)
        : [...prev, path];
      return newFavorites;
    });
  };

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <AppContext.Provider value={{
      leftSidebarOpen,
      rightSidebarOpen,
      favorites,
      userProfile,
      toggleLeftSidebar,
      toggleRightSidebar,
      toggleFavorite,
      setUserProfile
    }}>
      {children}
    </AppContext.Provider>
  );
};