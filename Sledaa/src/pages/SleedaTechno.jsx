import React from 'react';
import { Box, Typography } from '@mui/material';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ScrollFocusReveal from '../components/common/ScrollFocusReveal';
import galleryHeroBg from '../assets/Gallery/Galleryhero.webp';

import img1 from '../assets/Gallery/Gallery2023/1.webp';
import img2 from '../assets/Gallery/Gallery2023/2.webp';
import img3 from '../assets/Gallery/Gallery2023/3.webp';
import img4 from '../assets/Gallery/Gallery2023/4.webp';
import img5 from '../assets/Gallery/Gallery2023/5.webp';
import img6 from '../assets/Gallery/Gallery2023/6.webp';
import img7 from '../assets/Gallery/Gallery2023/7.webp';
import img8 from '../assets/Gallery/Gallery2023/8.webp';
import img9 from '../assets/Gallery/Gallery2023/9.webp';
import img10 from '../assets/Gallery/Gallery2023/10.webp';
import img11 from '../assets/Gallery/Gallery2023/11.webp';
import img12 from '../assets/Gallery/Gallery2023/12.webp';
import img13 from '../assets/Gallery/Gallery2023/13.webp';
import img14 from '../assets/Gallery/Gallery2023/14.webp';

const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14
];

const SleedaTechno = () => {
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
        <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.7)' }} />
        
        <Box sx={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '800px', pt: { xs: '20px', md: '40px' } }}>
          <Typography sx={{ 
            fontFamily: 'Poppins', 
            fontWeight: 800, 
            fontSize: { xs: '30px', sm: '40px', md: '50px', lg: '62.41px' }, 
            lineHeight: { xs: '40px', sm: '50px', md: '65px', lg: '82.7px' }, 
            color: '#fff', 
            textTransform: 'uppercase', 
            textAlign: 'center',
            mb: 1
          }}>
            Gallery
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
      <Box sx={{ flex: 1, backgroundColor: '#fff', py: { xs: '40px', md: '60px' }, px: 2 }}>
        <Box sx={{ maxWidth: '1260px', margin: '0 auto' }}>
          
          {/* Top Button / Label */}
          <Box sx={{ mb: 4, display: 'flex', justifyContent: 'flex-start' }}>
            <Box sx={{
              backgroundColor: 'rgba(0, 28, 166, 1)',
              borderRadius: '15.85px',
              padding: '12.68px 24px',
              display: 'inline-block'
            }}>
              <Typography sx={{
                fontFamily: 'Poppins',
                fontWeight: 700,
                fontSize: { xs: '16px', md: '20px' },
                color: '#fff'
              }}>
                SLEDAA Techno Nite 2023
              </Typography>
            </Box>
          </Box>

          {/* Masonry Grid using CSS Columns */}
          <Box sx={{ 
            columnCount: { xs: 1, sm: 2, md: 3, lg: 4 }, // Automatically responsive masonry!
            columnGap: '16px' 
          }}>
            {images.map((img, idx) => (
              <ScrollFocusReveal key={idx}>
                <Box sx={{ 
                  breakInside: 'avoid', // Crucial: prevents image splitting across columns
                  marginBottom: '16px' 
                }}>
                  <img 
                    src={img} 
                    alt={`Techno Nite 2023 - ${idx}`} 
                    style={{ 
                      width: '100%', 
                      borderRadius: '16px', 
                      display: 'block' // removes default bottom gap from inline images
                    }} 
                  />
                </Box>
              </ScrollFocusReveal>
            ))}
          </Box>
          
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default SleedaTechno;
