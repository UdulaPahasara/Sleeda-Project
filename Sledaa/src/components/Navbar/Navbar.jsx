import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.webp';

const pages = [
  'HOME',
  'ABOUT US',
  'EVENTS',
  'GALLERY',
  'SUPPORTING NEW ARRIVALS',
  'COMMITTEE',
  'PROJECTS',
  'NEWS',
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 1)',
        height: '70px',
        boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.1)',
        justifyContent: 'center',
        padding: 0,
      }}
    >
      <Container maxWidth={false} sx={{ padding: 0, maxWidth: '1440px' }}>
        <Toolbar disableGutters sx={{ minHeight: '70px !important' }}>
          {/* Desktop Logo */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: { xs: 'none', md: 'flex' },
              mr: { md: 1, lg: 2 },
              ml: { md: 1, lg: '100px' }, // Responsive margin to fit 1024px
              mt: '4px',   // Exact pixel requirement
            }}
          >
            <img
              src={logo}
              alt="Logo"
              style={{
                width: '58px',  // Exact pixel requirement
                height: '59px', // Exact pixel requirement
                objectFit: 'contain',
              }}
            />
          </Box>

          {/* Mobile Menu Icon (Left) */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 2 }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ color: 'black' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} component={Link} to={page === 'HOME' ? '/' : `/${page.toLowerCase().replace(/ /g, '-')}`}>
                  <Typography sx={{ textAlign: 'center', color: 'black' }}>{page}</Typography>
                </MenuItem>
              ))}
              {/* Mobile Contact Us Button */}
              <MenuItem onClick={handleCloseNavMenu} component={Link} to="/contact-us" sx={{ mt: 1 }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: 'rgba(0, 28, 166, 1)',
                    borderRadius: '15px',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    fontSize: '14px',
                    boxShadow: 'none',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 20, 120, 1)',
                      boxShadow: 'none',
                    },
                  }}
                >
                  CONTACT US
                </Button>
              </MenuItem>
            </Menu>
          </Box>

          {/* Spacer to push Mobile Logo to the right */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} />

          {/* Mobile Logo (Right Corner) */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: { xs: 'flex', md: 'none' },
              mr: 2,
            }}
          >
            <img
              src={logo}
              alt="Logo"
              style={{
                width: '40px',
                height: '40px',
                objectFit: 'contain',
              }}
            />
          </Box>

          {/* Desktop Menu Items */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              alignItems: 'center',
              gap: { md: '10px', lg: '20px' }, // Reduced gap on smaller laptops
              width: { md: 'auto', lg: '850.83px' }, // Auto width to fit 1024px
              height: 'auto',
              margin: '0 auto',
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                component={Link}
                to={page === 'HOME' ? '/' : `/${page.toLowerCase().replace(/ /g, '-')}`}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  display: 'block',
                  p: 0,
                  minWidth: 'auto',
                  textTransform: 'uppercase',
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: { md: '13px', lg: '16.04px' },
                  lineHeight: { md: '20px', lg: '24.84px' },
                  letterSpacing: '0%',
                  textAlign: 'center',
                  fontWeight: page === 'HOME' ? 700 : 600,
                  color: page === 'HOME' ? 'rgba(0, 28, 166, 1)' : '#000',
                  '&:hover': {
                    color: 'rgba(0, 28, 166, 1)',
                    backgroundColor: 'transparent',
                  }
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Desktop Contact Us Button */}
          <Box sx={{ flexGrow: 0, mr: { md: 1, lg: '100px' }, display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            <Button
              variant="contained"
              component={Link}
              to="/contact-us"
              sx={{
                width: { md: '110px', lg: '131px' },
                height: { md: '40px', lg: '48px' },
                backgroundColor: 'rgba(0, 28, 166, 1)', 
                borderRadius: '15px', 
                padding: { md: '8px', lg: '12.68px 16.65px 12.68px 14.27px' },
                fontWeight: 'bold',
                textTransform: 'uppercase',
                fontSize: { md: '12px', lg: '14px' },
                gap: '7.93px',
                whiteSpace: 'nowrap',
                boxShadow: 'none',
                '&:hover': {
                  backgroundColor: 'rgba(0, 20, 120, 1)',
                  boxShadow: 'none',
                },
              }}
            >
              CONTACT US
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
