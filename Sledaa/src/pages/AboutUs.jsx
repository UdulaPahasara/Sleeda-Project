import React from 'react';
import { Box, Typography } from '@mui/material';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import aboutHeroBg from '../assets/AboutUs/abouthero.webp';
import whoWeAreImg from '../assets/AboutUs/whoweare.webp';
import executiveImg from '../assets/AboutUs/excetive.webp';

const AboutUs = () => {
  return (
    <Box sx={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      {/* Hero Section */}
      <Box sx={{ 
        width: '100%', 
        height: { xs: '400px', md: '500px', lg: '600px' }, 
        backgroundImage: `url(${aboutHeroBg})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'relative',
        px: 2
      }}>
        {/* Dark overlay for text readability */}
        <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.6)' }} />
        
        <Box sx={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '800px' }}>
          <Typography sx={{ 
            fontFamily: 'Poppins', 
            fontWeight: 800, 
            fontSize: { xs: '40px', md: '50px', lg: '62.41px' }, 
            lineHeight: { xs: '50px', md: '65px', lg: '82.7px' }, 
            color: '#fff', 
            textTransform: 'uppercase', 
            textAlign: 'center',
            mb: 2
          }}>
            ABOUT US
          </Typography>
          <Typography sx={{ 
            fontFamily: 'Poppins', 
            fontWeight: 400, 
            fontSize: { xs: '16px', md: '18px' }, 
            lineHeight: '22px', 
            color: '#fff', 
            textAlign: 'center',
            maxWidth: '522px'
          }}>
            Building a strong Sri Lankan engineering community in Australia since 1994
          </Typography>
        </Box>
      </Box>

      {/* Who We Are Section */}
      <Box sx={{ width: '100%', backgroundColor: '#fff', py: { xs: '60px', sm: '80px', md: '100px' }, display: 'flex', justifyContent: 'center', px: { xs: 2, sm: 3, md: 4 }, pb:{lg:'10px',md:'10px',sm:'15px',xs:'2px'} }}>
        <Box sx={{ maxWidth: '1440px', width: '100%', display: 'flex', flexDirection: { xs: 'column-reverse', sm: 'row' }, alignItems: 'center', justifyContent: 'center', gap: { xs: '40px', sm: '30px', lg: '80px' } }}>
          
          {/* Left: Image */}
          <Box sx={{ flex: 1, display: 'flex', justifyContent: { xs: 'center', sm: 'flex-end' }, width: '100%' }}>
            <img 
              src={whoWeAreImg} 
              alt="Who We Are" 
              style={{ width: '100%', maxWidth: '495px', height: 'auto', borderRadius: '21.56px', objectFit: 'cover' }} 
            />
          </Box>

          {/* Right: Text */}
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', maxWidth: '590px', alignItems: { xs: 'center', sm: 'flex-start' }, textAlign: { xs: 'center', sm: 'left' } }}>
            <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: { xs: '18px', sm: '20px', md: '22px' }, lineHeight: '22px', color: 'rgba(0, 28, 166, 1)', mb: '16px' }}>
              Who We Are
            </Typography>
            
            <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: { xs: '26px', sm: '28px', md: '35px' }, lineHeight: { xs: '32px', sm: '34px', md: '40px' }, color: 'rgba(0, 0, 0, 1)', mb: { xs: '16px', sm: '24px' } }}>
              Connecting Engineers. Building Community. Inspiring Excellence.
            </Typography>
            
            <Typography sx={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: { xs: '15px', sm: '14px', md: '18px' }, lineHeight: { xs: '22px', sm: '20px', md: '22px' }, color: 'rgba(117, 117, 117, 1)' }}>
              Established in Melbourne in 1994, SLEDAA is a non-profit organization dedicated to supporting Sri Lankan engineering diplomates living and working across Australia.
              <br /><br />
              Our association promotes professional growth through networking, knowledge sharing, mentoring, and educational initiatives while strengthening the bonds of our vibrant Sri Lankan engineering community.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Our Executive Committee Section */}
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', pt: { xs: '60px' } }}>
        <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '16px', lineHeight: '22px', color: 'rgba(0, 28, 166, 1)', mb: 1, textAlign: 'center' }}>
          Our Journey
        </Typography>
        <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: { xs: '22px', md: '25px' }, lineHeight: '30px', color: 'rgba(0, 0, 0, 1)', mb: 2, textAlign: 'center' }}>
          Our Executive Committee
        </Typography>
        <Typography sx={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: { xs: '14px', md: '16px' }, lineHeight: '20px', color: 'rgba(117, 117, 117, 1)', mb: 4, textAlign: 'center', maxWidth: '1009px', px: 2 }}>
          Founded in Melbourne in 1994, SLEDAA was created to help newly migrated engineering diplomates overcome professional and social challenges. Over the past 30+ years, the association has grown into a strong community through workshops, welfare initiatives, social events, and educational support programs. In 2023, SLEDAA proudly celebrated its 30th Anniversary, marking three decades of service and unity.
        </Typography>

        {/* Image and Blue Background Container */}
        <Box sx={{ width: '100%', position: 'relative', display: 'flex', justifyContent: 'center', mt: { xs: 2, md: 4 } }}>
          {/* Blue Background block matching the 302px height specification on desktop */}
          <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: { xs: '50%', md: '302px' }, backgroundColor: 'rgba(0, 28, 166, 1)', zIndex: 0 }} />
          
          {/* Executive Image */}
          <Box sx={{ zIndex: 1, width: '100%', maxWidth: '1050px', px: 2, pb: { xs: 4, md: 6 } }}>
            <img 
              src={executiveImg} 
              alt="Executive Committee" 
              style={{ width: '100%', height: 'auto', borderRadius: '20px', display: 'block' }} 
            />
          </Box>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default AboutUs;
