// File: src/components/layout/RightSidebar/ContactsBlock.jsx
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
import { contactsData } from '../../../data/index';

const ContactsBlock = () => {
  const theme = useTheme();

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
        Contacts
      </Typography>

      <List dense sx={{ display: 'flex', flexDirection: 'column', gap: 1, p: 0 }}>
        {contactsData.map((contact) => (
          <ListItem
            key={contact.id}
            sx={{
              p: 0.5,
            }}
          >
            <ListItemIcon sx={{ minWidth: 24, mr: 1, position: 'relative' }}>
              <Avatar
                src={contact.avatar}
                sx={{
                  width: 24,
                  height: 24,
                }}
              >
                {contact.name.charAt(0)}
              </Avatar>
            </ListItemIcon>

            <ListItemText
              primary={contact.name}
              primaryTypographyProps={{
                fontSize: '0.85rem',
                fontWeight: 500
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ContactsBlock;