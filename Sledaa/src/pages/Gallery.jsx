import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import galleryHeroBg from '../assets/Gallery/Galleryhero.webp';
import sledaaTech2023 from '../assets/Gallery/SledaaTech2023.webp';
import sledaTech2024 from '../assets/Gallery/SledaTech2024.webp';
import sledaaTechno2025 from '../assets/Gallery/SledaaTechno2025.webp';

const galleryData = [
  {
    title: "SLEDAA Techno Nite 2023",
    image: sledaaTech2023
  },
  {
    title: "SLEDAA Techno Nite 2024",
    image: sledaTech2024
  },
  {
    title: "SLEDAA Techno Nite 2025",
    image: sledaaTechno2025
  }
];

const Gallery = () => {
  return (
    <Box sx={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      {/* Hero Section */}
      <Box sx={{ 
        width: '100%', 
        height: { xs: '300px', md: '370px' }, 
        backgroundImage: `url(${galleryHeroBg})`, 
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
        <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.7)' }} />
        
        <Box sx={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '800px', pt: { xs: '20px', md: '40px' } }}>
          <Typography sx={{ 
            fontFamily: 'Poppins', 
            fontWeight: 800, 
            fontSize: { xs: '40px', md: '50px', lg: '62.41px' }, 
            lineHeight: { xs: '50px', md: '65px', lg: '82.7px' }, 
            color: '#fff', 
            textTransform: 'uppercase', 
            textAlign: 'center',
            mb: 1
          }}>
            GALLERY
          </Typography>
          <Typography sx={{ 
            fontFamily: 'Poppins', 
            fontWeight: 400, 
            fontSize: { xs: '14px', md: '16px', lg: '18px' }, 
            lineHeight: '22px', 
            color: '#fff', 
            textAlign: 'center'
          }}>
            Moments that shaped our journey
          </Typography>
        </Box>
      </Box>

      {/* Main Content Area */}
      <Box sx={{ 
        flex: 1, 
        backgroundColor: '#fff', 
        py: { xs: '60px', md: '100px' }, 
        px: 2, 
        display: 'flex', 
        justifyContent: 'center' 
      }}>
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr', // Mobile: 1 column
            sm: 'repeat(2, 1fr)', // Small tablet: 2 columns
            md: 'repeat(3, 1fr)' // Tablet/Laptop (md = 900px+): 3 columns in a row
          },
          gap: { xs: '20px', md: '30px' },
          justifyContent: 'center',
          maxWidth: '1260px',
          width: '100%'
        }}>
          {galleryData.map((item, index) => (
            <Box 
              key={index}
              sx={{
                width: '100%',
                maxWidth: '400px',
                margin: '0 auto', // Keeps it centered if grid column is wider
                height: { xs: '380px', sm: '400px', md: '424px' }, // Scale height slightly for tablets
                borderRadius: '16px',
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <Button
                sx={{
                  position: 'absolute',
                  bottom: '30px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '90%', // Use percentages so it shrinks on tablet
                  maxWidth: '284px',
                  height: '58px',
                  borderRadius: '15.85px',
                  backgroundColor: 'rgba(0, 28, 166, 1)',
                  color: '#fff',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 20, 120, 1)'
                  },
                  padding: '12.68px 16.65px 12.68px 14.27px',
                }}
              >
                <Typography sx={{
                  fontFamily: 'Poppins',
                  fontWeight: 700,
                  fontSize: { xs: '15px', sm: '16px', md: '17px' }, // Scale font size slightly down for narrow screens
                  lineHeight: '19px',
                  textAlign: 'center',
                  width: '100%'
                }}>
                  {item.title}
                </Typography>
              </Button>
            </Box>
          ))}
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default Gallery;
