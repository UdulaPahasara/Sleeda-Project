import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ScrollFocusReveal from '../components/common/ScrollFocusReveal';
import anualHero from '../assets/AnnualReport/AnualHero.webp';
import pdfIcon from '../assets/AnnualReport/pdf-icon-red.webp';

const AnnualReport = () => {
  const reports = [
    { year: '2026', filename: '2026annualreport.pdf' },
    { year: '2025', filename: '2025annualreport.pdf' }
  ];

  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      <Navbar />
      
      {/* Hero Section */}
      <Box sx={{
        position: 'relative',
        width: '100%',
        minHeight: { xs: '200px', md: '370px' },
        backgroundImage: `url(${anualHero})`,
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
            ANNUAL REPORT
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
            Explore SLEDAA's annual reports to learn about our achievements, financial performance, community initiatives, and the impact we've made in supporting Sri Lankan engineering diplomates across Australia.
          </Typography>
        </Box>
      </Box>

      {/* Content Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, px: 2, backgroundColor: '#fff' }}>
        <Box sx={{ maxWidth: '959px', mx: 'auto', display: 'flex', flexDirection: 'column', gap: 4 }}>
          {reports.map((report, index) => (
            <ScrollFocusReveal key={report.year} delay={`${index * 0.2}s`}>
              <Box sx={{
                backgroundColor: 'rgba(243, 243, 243, 1)',
                borderRadius: '15px',
                padding: { xs: '20px', md: '30px' },
                position: 'relative'
              }}>
                <IconButton sx={{ position: 'absolute', top: '15px', right: '15px', color: '#666' }}>
                  <FileDownloadOutlinedIcon />
                </IconButton>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Typography sx={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '18px', color: '#000' }}>
                    {report.year} Annual Report
                  </Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <img src={pdfIcon} alt="PDF" style={{ width: '55px', height: '55px', objectFit: 'contain' }} />
                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: '14px', color: '#a0a0a0' }}>
                      {report.filename}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </ScrollFocusReveal>
          ))}
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default AnnualReport;
