import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Tooltip,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { AccountCircle, Menu } from '@mui/icons-material';

const NavigationBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Properties', path: '/properties' },
    { text: 'Contact', path: '/contact' },
  ];

  return (
    <AppBar
      position="static"
      sx={{
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        backgroundColor: 'black',
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            color: '#f8f9fa',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            textDecoration: 'none',
          }}
        >
          BlinkStar Properties
        </Typography>
        
        {isMobile ? (
          <>
            <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
              <Menu />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
              <List>
                {menuItems.map((item) => (
                  <ListItem button component={Link} to={item.path} key={item.text}>
                    <ListItemText primary={item.text} />
                  </ListItem>
                ))}
                <ListItem button component={Link} to="/login">
                  <ListItemText primary="Login" />
                  <IconButton color="inherit">
                    <AccountCircle />
                  </IconButton>
                </ListItem>
              </List>
            </Drawer>
          </>
        ) : (
          <>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                component={Link}
                to={item.path}
                color="inherit"
                sx={{ fontSize: '1.1rem', marginLeft: '15px' }}
              >
                {item.text}
              </Button>
            ))}
            <div style={{ marginLeft: '100px' }} />
            <Button component={Link} to="/add-listing" variant="contained" color="primary" sx={{ marginLeft: '10px' }}>
              Add Listing
            </Button>
            <Tooltip title="Login" arrow>
              <IconButton component={Link} to="/SignIn" color="inherit" sx={{ marginLeft: '10px' }}>
                <AccountCircle />
              </IconButton>
            </Tooltip>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;