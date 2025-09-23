import React, { useState} from 'react';
import { NavigationContext } from '../contexts/NavigationContext';

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