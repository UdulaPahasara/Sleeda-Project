import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ScrollFocusReveal from '../components/common/ScrollFocusReveal';
import resourcesHero from '../assets/Resources/ResorcesHero.webp';
import pdfIcon from '../assets/AnnualReport/pdf-icon-red.webp';

const Resources = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await fetch('http://localhost:8081/api/resources');
        if (response.ok) {
          const data = await response.json();
          setResources(data);
        }
      } catch (error) {
        console.error("Failed to fetch resources", error);
      }
    };

    fetchResources();
    const interval = setInterval(fetchResources, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      <Navbar />
      
      {/* Hero Section */}
      <Box sx={{
        position: 'relative',
        width: '100%',
        minHeight: { xs: '200px', md: '370px' },
        backgroundImage: `url(${resourcesHero})`,
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
            RESOURCES
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
            Access practical guides, templates, and useful resources designed to support your professional development, career progression, and successful settlement in Australia.
          </Typography>
        </Box>
      </Box>

      {/* Content Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, px: 2, backgroundColor: '#fff' }}>
        <Box sx={{ maxWidth: '959px', mx: 'auto', display: 'flex', flexDirection: 'column', gap: 4 }}>
          {resources.length > 0 ? (
            resources.map((resource, index) => (
              <ScrollFocusReveal key={resource.id} delay={`${index * 0.15}s`}>
                <Box sx={{
                  backgroundColor: 'rgba(243, 243, 243, 1)',
                  borderRadius: '15px',
                  padding: { xs: '20px', md: '30px' },
                  position: 'relative'
                }}>
                  <IconButton 
                    component="a"
                    href={resource.fileUrl ? `http://localhost:8081${resource.fileUrl}` : '#'}
                    download
                    sx={{ position: 'absolute', top: '15px', right: '15px', color: '#666' }}
                  >
                    <FileDownloadOutlinedIcon />
                  </IconButton>
                  
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Typography sx={{ 
                      fontFamily: 'Poppins', 
                      fontWeight: 700, 
                      fontSize: '18px', 
                      color: '#000',
                      pr: { xs: 4, md: 5 }
                    }}>
                      {resource.title}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <img src={pdfIcon} alt="PDF" style={{ width: '55px', height: '55px', objectFit: 'contain' }} />
                      <Typography sx={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: '14px', color: '#a0a0a0' }}>
                        {resource.filename}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </ScrollFocusReveal>
            ))
          ) : (
            <Typography sx={{ textAlign: 'center', fontFamily: 'Poppins', color: '#666' }}>
              No resources available.
            </Typography>
          )}
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default Resources;
