// src/pages/Customers/Customers.jsx
import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Container,
  useTheme,
  alpha
} from '@mui/material';
import {
  People,
  PersonAdd,
  Email,
  Phone
} from '@mui/icons-material';

const Customers = () => {
  const theme = useTheme();

  const customerCards = [
    {
      icon: People,
      title: 'Customer Directory',
      description: 'Complete list of all your customers with contact information',
      color: theme.palette.primary.main
    },
    {
      icon: PersonAdd,
      title: 'Add New Customers',
      description: 'Easily onboard new customers and manage their profiles',
      color: theme.palette.success.main
    },
    {
      icon: Email,
      title: 'Communication',
      description: 'Send emails and messages to your customers directly',
      color: theme.palette.info.main
    },
    {
      icon: Phone,
      title: 'Contact Management',
      description: 'Organize and track all customer interactions',
      color: theme.palette.warning.main
    }
  ];

  return (
    <Container maxWidth="xl">
      <Box sx={{ py: 4 }}>
        {/* Header Section */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            variant="h3" 
            component="h1" 
            sx={{ 
              fontWeight: 'bold',
              color: theme.palette.text.primary,
              mb: 1
            }}
          >
            Customers
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: theme.palette.text.secondary,
              fontWeight: 'normal'
            }}
          >
            Manage your customer relationships and data
          </Typography>
        </Box>

        {/* Customer Cards Grid */}
        <Grid container spacing={3} sx={{ mb: 4 }} columns={{ sm: 12, md: 12, lg: 12 }}>
          {customerCards.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Grid item xs={12} sm={6} md={3} key={index} size={{ sm: 12, md: 6, lg: 3 }}>
                <Card
                  sx={{
                    height: '100%',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: theme.shadows[8],
                    }
                  }}
                >
                  <CardContent 
                    sx={{ 
                      p: 3,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      height: '100%'
                    }}
                  >
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        backgroundColor: alpha(item.color, 0.1),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.05)',
                          backgroundColor: alpha(item.color, 0.15),
                        }
                      }}
                    >
                      <IconComponent 
                        sx={{ 
                          fontSize: 48, 
                          color: item.color 
                        }} 
                      />
                    </Box>
                    
                    <Typography 
                      variant="h6" 
                      component="h3"
                      sx={{ 
                        fontWeight: 'bold',
                        mb: 1,
                        color: theme.palette.text.primary
                      }}
                    >
                      {item.title}
                    </Typography>
                    
                    <Typography 
                      variant="body2"
                      sx={{ 
                        color: theme.palette.text.secondary,
                        lineHeight: 1.5
                      }}
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        {/* Customer Management Coming Soon Card */}
        <Card
          sx={{
            background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(theme.palette.secondary.main, 0.1)} 100%)`,
            border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            }
          }}
        >
          <CardContent 
            sx={{ 
              p: 4,
              textAlign: 'center'
            }}
          >
            <Box sx={{ mb: 3 }}>
              <People 
                sx={{ 
                  fontSize: 64, 
                  color: theme.palette.primary.main,
                  mb: 2
                }} 
              />
            </Box>
            
            <Typography 
              variant="h4" 
              component="h2"
              sx={{ 
                fontWeight: 'bold',
                color: theme.palette.primary.main,
                mb: 2
              }}
            >
              Customer Management
            </Typography>
            
            <Typography 
              variant="body1"
              sx={{ 
                color: theme.palette.text.secondary,
                maxWidth: 700,
                mx: 'auto',
                lineHeight: 1.6,
                mb: 2
              }}
            >
              A comprehensive customer management system is in development. 
              This will include customer profiles, communication history, 
              purchase tracking, and relationship management tools.
            </Typography>

            {/* Feature List */}
            <Box 
              sx={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                justifyContent: 'center', 
                gap: 2, 
                mt: 3 
              }}
            >
              {[
                'Customer Profiles',
                'Communication History',
                'Purchase Tracking',
                'Relationship Tools',
                'Analytics & Insights'
              ].map((feature, index) => (
                <Box
                  key={index}
                  sx={{
                    px: 2,
                    py: 1,
                    backgroundColor: alpha(theme.palette.primary.main, 0.1),
                    borderRadius: '16px',
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      color: theme.palette.primary.main,
                      fontWeight: 'medium'
                    }}
                  >
                    {feature}
                  </Typography>
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Customers;