import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  useTheme,
  Typography,
} from '@mui/material';
import {
  BugReport,
  Person,
  Settings,
  CheckCircle,
  Warning
} from '@mui/icons-material';
import { useNotificationContext } from '../../../contexts/NotificationContext';
import { notificationTypes } from '../../../data/index';
import { formatDistanceToNow } from '../../../utils/timeUtils';

const iconMap = {
  Bug: BugReport,
  Person: Person,
  Settings: Settings,
  CheckCircle: CheckCircle,
  Warning: Warning
};

const NotificationsBlock = () => {
  const theme = useTheme();
  const { notifications, markAsRead } = useNotificationContext();

  const displayNotifications = notifications.slice(0, 5);

  const handleNotificationClick = (notification) => {
    if (!notification.read) {
      markAsRead(notification.id);
    }
  };

  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        variant="subtitle2"
        sx={{
          px: 0.5,
          py: 1,
          mb: 1,
          fontWeight: 600,
          color: theme.palette.text.primary
        }}
      >
        Notifications
      </Typography>

      <List dense sx={{ display: 'flex', flexDirection: 'column', gap: 1, p: 0 }}>
        {displayNotifications.map((notification) => {
          const notificationType = notificationTypes[notification.type];
          const IconComponent = iconMap[notificationType.icon];
          const primaryTypographyProps = {
            fontSize: '0.8rem',
            fontWeight: notification.read ? 400 : 600,
            sx: {
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              WebkitAlignItems: 'flex-start',
              overflow: 'hidden',
            }
          };

          const secondaryTypographyProps = {
            fontSize: '0.7rem',
            color: theme.palette.text.secondary
          };

          return (
            <ListItem
              key={notification.id}
              button
              onClick={() => handleNotificationClick(notification)}
              sx={{
                p: 0.5,
                display: 'flex',
                alignItems: 'flex-start',
              }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>
                <Avatar
                  sx={{
                    width: 32,
                    height: 32,
                    backgroundColor: notificationType.bgColor,
                    color: notificationType.color,
                    borderRadius: 1
                  }}
                >
                  {IconComponent && <IconComponent sx={{ fontSize: '1rem' }} />}
                </Avatar>
              </ListItemIcon>

              <ListItemText
                primary={notification.message}
                secondary={formatDistanceToNow(notification.timestamp)}
                slotProps={{ primary: primaryTypographyProps, secondary: secondaryTypographyProps }}
              />

              {!notification.read && (
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    p: 0.5,
                    marginBlock: 'auto',
                    borderRadius: '50%',
                    backgroundColor: theme.palette.primary.main
                  }}
                />
              )}
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default NotificationsBlock;