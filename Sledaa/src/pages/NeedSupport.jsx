import React from 'react';
import { Box, Typography } from '@mui/material';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import SupportForm from '../components/common/SupportForm';
import ScrollFocusReveal from '../components/common/ScrollFocusReveal';
import supportHero from '../assets/SupportingNewArrivals/SupportHero.png';

const NeedSupport = () => {
  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      <Navbar />
      
      {/* Hero Section */}
      <Box sx={{
        position: 'relative',
        width: '100%',
        minHeight: { xs: '200px', md: '240px' },
        backgroundImage: `url(${supportHero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        px: 2
      }}>
        {/* Dark Overlay */}
        <Box sx={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          zIndex: 1
        }} />

        <Box sx={{ 
          position: 'relative', 
          zIndex: 2, 
          maxWidth: '800px', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center' 
        }}>
          <Typography sx={{
            fontFamily: 'Poppins',
            fontWeight: 800,
            fontSize: { xs: '32px', md: '48px' },
            lineHeight: { xs: '40px', md: '60px' },
            color: '#fff',
            textTransform: 'uppercase',
            mb: 1
          }}>
            NEED SUPPORT
          </Typography>
          <Typography sx={{
            fontFamily: 'Poppins',
            fontWeight: 400,
            fontSize: { xs: '14px', md: '18px' },
            lineHeight: { xs: '20px', md: '22px' },
            color: 'rgba(255, 255, 255, 1)',
            maxWidth: '667px',
            mx: 'auto'
          }}>
            Whether you're new to Australia or looking for guidance in your engineering career, SLEDAA is here to connect you with experienced professionals who can support your journey.
          </Typography>
        </Box>
      </Box>

      {/* Form Section */}
      <Box sx={{ py: { xs: 4, md: 5 }, px: 2 }}>
        <ScrollFocusReveal delay="0.2s">
          <SupportForm formType="needSupport" />
        </ScrollFocusReveal>
      </Box>

      <Footer />
    </Box>
  );
};

export default NeedSupport;
