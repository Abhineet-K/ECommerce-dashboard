import React from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  useTheme
} from '@mui/material';
import { initialActivities } from '../../../utils/data';
import { formatDistanceToNow } from '../../../utils/timeUtils';

const ActivitiesBlock = () => {
  const theme = useTheme();

  const displayActivities = initialActivities.slice(0, 4);

  return (
    <Box sx={{ flex: 1, mb: 4 }}>
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
        Activities
      </Typography>

      <List dense sx={{ display: 'flex', flexDirection: 'column', gap: 1, p: 0 }}>
        {displayActivities.map((activity) => (
          <ListItem
            key={activity.id}
            sx={{
              p:0.5
            }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
              <Avatar
                src={activity.user.avatar}
                sx={{
                  width: 32,
                  height: 32,
                }}
              >
                {activity.user.name.charAt(0)}
              </Avatar>
            </ListItemIcon>

            <ListItemText
              primary={
                <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>
                  <strong>{activity.user.name}</strong> {activity.message}
                </Typography>
              }
              secondary={formatDistanceToNow(activity.timestamp)}
              secondaryTypographyProps={{
                fontSize: '0.7rem',
                color: theme.palette.text.secondary
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ActivitiesBlock;