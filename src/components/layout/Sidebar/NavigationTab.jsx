// File: src/components/layout/Sidebar/NavigationTab.jsx
import {
  Box,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  List,
  useTheme
} from '@mui/material';
import {
  Dashboard,
  ShoppingCart,
  Receipt,
  Inventory,
  People,
  RateReview,
  Folder,
  Task,
  Group,
  Assessment,
  School,
  MenuBook,
  Person,
  Quiz,
  AccountCircle,
  Visibility,
  Work,
  Campaign,
  Description,
  Settings,
  Payment,
  Hub,
  Business,
  CorporateFare,
  Policy,
  Event,
  Article,
  List as ListIcon,
  Share,
  Forum,
  LocalOffer,
  KeyboardArrowDown,
  KeyboardArrowRight
} from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useNavigationContext } from '../../../contexts/NavigationContext';
import NavigationSubTab from './NavigationSubTab';

const iconMap = {
  Dashboard,
  ShoppingCart,
  Receipt,
  Inventory,
  People,
  RateReview,
  Folder,
  Task,
  Group,
  Assessment,
  School,
  MenuBook,
  Person,
  Quiz,
  AccountCircle,
  Visibility,
  Work,
  Campaign,
  Description,
  Settings,
  Payment,
  Hub,
  Business,
  CorporateFare,
  Policy,
  Event,
  Article,
  List: ListIcon,
  Share,
  Forum,
  LocalOffer
};

const NavigationTab = ({ item }) => {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const { expandedItems, toggleExpanded } = useNavigationContext();

  const IconComponent = iconMap[item.icon];
  const isExpanded = expandedItems[item.id];
  const hasSubItems = item.subItems && item.subItems.length > 0;

  // Check if current path matches this item
  const isActive = item.path && location.pathname === item.path;

  const handleClick = () => {
    if (hasSubItems) {
      toggleExpanded(item.id);
    } else if (item.path && !item.dummy) {
      navigate(item.path);
    }
  };

  return (
    <Box sx={{ mt: 0.5 }}>
      <ListItem
        button
        onClick={handleClick}
        disabled={item.dummy}
        sx={{
          py: 0.5,
          pr: 1,
          pl: 0,
          borderRadius: 1,
          mb: 0.5,
          display: 'flex',
          alignItems: 'center',
          gap: 0.5,
          backgroundColor: isActive ? theme.palette.action.selected : 'transparent',
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
          '&.Mui-disabled': {
            opacity: 0.6,
          },
        }}
      >

        {hasSubItems ? (
          <Box sx={{
            width: 24,
            height: 20,
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center'
          }}>
            {isExpanded ? (
              <KeyboardArrowDown sx={{ width: 16, height: 16, color: '#999999' }} viewBox="5 3 14 18" />
            ) : (
              <KeyboardArrowRight sx={{ width: 16, height: 16, color: '#999999' }} viewBox="5 3 14 18" />
            )}
          </Box>
        ) : (
          <Box sx={{ width: 24, height: 20 }}>
            {isActive && (
              <Box
                sx={{
                  width: '3px',
                  height: '100%',
                  border: `3px solid`,
                  borderColor: theme.palette.background.contrastDefault,
                  borderRadius: 1,
                }}
              />)}
          </Box>
        )}


        <ListItemIcon sx={{ width: 20, height: 20, minWidth: 20 }}>
          {IconComponent && (
            <IconComponent
              sx={{
                fontSize: '1.25rem',
                color: theme.palette.text.secondary
              }}
            />
          )}
        </ListItemIcon>

        <ListItemText
          primary={item.title}
          primaryTypographyProps={{
            fontSize: '0.875rem',
            color: theme.palette.text.primary
          }}
        />


      </ListItem>

      {hasSubItems && (
        <Collapse in={isExpanded} timeout="auto" unmountOnExit>
          <List component="div" disablePadding >
            {item.subItems.map((subItem) => (
              <NavigationSubTab key={subItem.id} item={subItem} />
            ))}
          </List>
        </Collapse>
      )}
    </Box>
  );
};

export default NavigationTab;