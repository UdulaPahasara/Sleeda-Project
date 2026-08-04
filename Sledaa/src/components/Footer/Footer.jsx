import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import logoImg from '../../assets/logo/logo.webp';
import fbIcon from '../../assets/footer/fb.webp';
import instaIcon from '../../assets/footer/insta.webp';
import locationIcon from '../../assets/footer/location.webp';
import mailIcon from '../../assets/footer/mail.webp';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#020B2D', width: '100%', pt: { xs: 6, lg: 10 }, pb: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ maxWidth: '1440px', width: '100%', px: { xs: 3, lg: '100px' }, display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, justifyContent: 'space-between', gap: { xs: 6, lg: 4 } }}>
        
        {/* Left Column */}
        <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '414px', gap: 3 }}>
          <img src={logoImg} alt="SLEDAA Logo" style={{ width: '68px', height: '69.06px' }} />
          <Typography sx={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '16px', lineHeight: '24.07px', color: 'rgba(255, 255, 255, 0.7)' }}>
            Established in 1994, SLEDAA is a non-profit association supporting Sri Lankan engineering diplomates through networking, professional growth, and community engagement.
          </Typography>
          <Box sx={{ display: 'flex', gap: '23px', mt: 1 }}>
            {/* Facebook */}
            <IconButton 
              component="a" 
              href="https://www.facebook.com/share/1EQHQC9n1d/?mibextid=wwXIfr" 
              target="_blank"
              rel="noopener noreferrer"
              sx={{ width: '45px', height: '45px', border: '2px solid rgba(255, 255, 255, 0.1)', borderRadius: '50%', '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}
            >
              <img src={fbIcon} alt="Facebook" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
            </IconButton>
            {/* Instagram */}
            <IconButton 
              component="a" 
              href="instagram.com" 
              target="_blank"
              rel="noopener noreferrer"
              sx={{ width: '45px', height: '45px', border: '2px solid rgba(255, 255, 255, 0.1)', borderRadius: '50%', '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}
            >
              <img src={instaIcon} alt="Instagram" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
            </IconButton>
          </Box>
        </Box>

        {/* Middle Column: Quick Links */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '18.05px', lineHeight: '28.08px', color: '#fff', mb: 1 }}>
            Quick Links
          </Typography>
          {[
            { name: 'Home', path: '/' },
            { name: 'About Us', path: '/about-us' },
            { name: 'Events', path: '/events' },
            { name: 'Gallery', path: '/gallery' },
            { name: 'Contact Us', path: '/contact-us' }
          ].map((link) => (
            <Link 
              key={link.name} 
              component={RouterLink}
              to={link.path}
              underline="none" 
              sx={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '16.04px', lineHeight: '24.07px', color: 'rgba(255, 255, 255, 0.7)', '&:hover': { color: '#fff' } }}
            >
              {link.name}
            </Link>
          ))}
        </Box>

        {/* Right Column: Contact Us */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '18.05px', lineHeight: '28.08px', color: '#fff', mb: 1 }}>
            Contact Us
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12.03px' }}>
            {/* Location */}
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
              <img src={locationIcon} alt="Location" style={{ width: '20.05px', height: '20.05px', marginTop: '2px' }} />
              <Typography sx={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '16.04px', lineHeight: '24.07px', color: 'rgba(255, 255, 255, 0.7)' }}>
                Melbourne, Victoria, Australia
              </Typography>
            </Box>

            {/* Mail */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <img src={mailIcon} alt="Mail" style={{ width: '20.05px', height: '20.05px' }} />
              <Link href="mailto:info@sledaa.com" underline="none" sx={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '16.04px', lineHeight: '24.07px', color: 'rgba(255, 255, 255, 0.7)', '&:hover': { color: '#fff' } }}>
                info@sledaa.com
              </Link>
            </Box>
          </Box>
        </Box>
        
      </Box>

      {/* Bottom Section */}
      <Box sx={{ width: '100%', maxWidth: '1440px', px: { xs: 3, lg: '100px' }, mt: { xs: 6, lg: 8 } }}>
        <Box sx={{ width: '100%', height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.1)', mb: 3 }} />
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
          <Typography sx={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: '9.74px', color: 'rgba(255, 255, 255, 0.7)', textAlign: { xs: 'center', md: 'left' } }}>
            © Copyright 2026 Sledaa.com. Web Solution By{' '}
            <Link href="https://roodwave.com" target="_blank" rel="noopener noreferrer" underline="none" sx={{ color: 'rgba(255, 255, 255, 0.7)', '&:hover': { color: '#fff' } }}>
              ROODWAVE
            </Link>
          </Typography>
          <Typography sx={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: '9.74px', color: 'rgba(255, 255, 255, 0.7)', textAlign: { xs: 'center', md: 'right' } }}>
            <Link component={RouterLink} to="/resources" underline="none" sx={{ color: 'inherit', '&:hover': { color: '#fff' } }}>
              RESOURCES
            </Link>
            {' '}&nbsp;|&nbsp;{' '}
            <Link component={RouterLink} to="/annual-report" underline="none" sx={{ color: 'inherit', '&:hover': { color: '#fff' } }}>
              ANNUAL REPORT
            </Link>
          </Typography>
        </Box>
      </Box>
      
    </Box>
  );
};

export default Footer;
