import React, { useState, useEffect } from 'react';
import { AppContext } from '../contexts/AppContext';

export const AppProvider = ({ children }) => {
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(true);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

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
      toggleLeftSidebar,
      toggleRightSidebar,
      toggleFavorite,
    }}>
      {children}
    </AppContext.Provider>
  );
};