import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static" color="default" elevation={0}>
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" sx={{ 
          textDecoration: 'none', 
          color: 'inherit',
          flexGrow: 1 
        }}>
          파기응
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" component={Link} to="/">홈</Button>
          <Button color="inherit" component={Link} to="/about">소개</Button>
          <Button color="inherit" component={Link} to="/contact">문의</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 