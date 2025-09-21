// File: src/contexts/NotificationContext.jsx //

import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialNotifications } from '../utils/data';

const NotificationContext = createContext();

export const useNotificationContext = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotificationContext must be used within NotificationProvider');
  }
  return context;
};

const generateRandomNotification = () => {
  const messages = [
    'New order received from customer',
    'System backup completed successfully',
    'User authentication failed',
    'Payment processed successfully',
    'New user registration pending approval',
    'Database maintenance scheduled',
    'API rate limit exceeded',
    'New feature deployed to production'
  ];

  const types = ['bug', 'user', 'system', 'success', 'warning'];
  
  return {
    id: `n${Date.now()}`,
    type: types[Math.floor(Math.random() * types.length)],
    title: 'System Alert',
    message: messages[Math.floor(Math.random() * messages.length)],
    timestamp: Date.now(),
    read: false
  };
};

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState(initialNotifications);

  const markAsRead = (notificationId) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === notificationId ? { ...notif, read: true } : notif
      )
    );
  };

  const addNotification = (notification) => {
    setNotifications(prev => [notification, ...prev.slice(0, 9)]);
  };

  useEffect(() => {
    // Generate first notification after 1-2 seconds
    const firstTimeout = setTimeout(() => {
      addNotification(generateRandomNotification());
    }, Math.random() * 1000 + 1000);

    // Generate subsequent notifications randomly
    const intervals = [];
    for (let i = 0; i < 3; i++) {
      const interval = setInterval(() => {
        addNotification(generateRandomNotification());
      }, Math.random() * 90000 + 150000);   
      intervals.push(interval);
    }

    return () => {
      clearTimeout(firstTimeout);
      intervals.forEach(interval => clearInterval(interval));
    };
  }, []);

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <NotificationContext.Provider value={{
      notifications,
      unreadCount,
      markAsRead,
      addNotification
    }}>
      {children}
    </NotificationContext.Provider>
  );
};