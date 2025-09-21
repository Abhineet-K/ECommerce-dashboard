// File: src/contexts/NavigationContext.jsx //
import React, { createContext, useContext, useState } from 'react';

const NavigationContext = createContext();

export const useNavigationContext = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigationContext must be used within NavigationProvider');
  }
  return context;
};

export const NavigationProvider = ({ children }) => {
  const [expandedItems, setExpandedItems] = useState({});
  const [activeTab, setActiveTab] = useState('favorites');

  const toggleExpanded = (itemId) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  return (
    <NavigationContext.Provider value={{
      expandedItems,
      activeTab,
      toggleExpanded,
      setActiveTab
    }}>
      {children}
    </NavigationContext.Provider>
  );
};