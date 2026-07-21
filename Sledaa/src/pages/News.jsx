import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import newsHeroBg from '../assets/News/Newshero.webp';
import AlternatingFeatureCard from '../components/common/AlternatingFeatureCard';
import newsReuseImage from '../assets/News/NewsReuseImg.webp';

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('http://localhost:8081/api/news');
        if (response.ok) {
          const data = await response.json();
          setNews(data);
        }
      } catch (error) {
        console.error("Failed to fetch news", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <Box sx={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      {/* Hero Section */}
      <Box sx={{ 
        width: '100%', 
        height: { xs: '300px', md: '370px' }, 
        backgroundImage: `url(${newsHeroBg})`, 
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
            fontSize: { xs: '40px', md: '40px', lg: '62.41px' }, 
            lineHeight: { xs: '50px', md: '65px', lg: '82.7px' }, 
            color: '#fff', 
            textTransform: 'uppercase', 
            textAlign: 'center',
            mb: 1
          }}>
            NEWS
          </Typography>
          <Typography sx={{ 
            fontFamily: 'Poppins', 
            fontWeight: 400, 
            fontSize: { xs: '14px', md: '16px' }, 
            lineHeight: '22px', 
            color: '#fff', 
            textAlign: 'center'
          }}>
            Stay informed with the latest announcements, community initiatives, event highlights, and updates from the Sri Lankan Engineering <br /> Diplomates Association of Australia.
          </Typography>
        </Box>
      </Box>

      {/* Main Content Area */}
      <Box sx={{ flex: 1, backgroundColor: '#fff', py: { xs: '60px', md: '100px' }, px: 2, display: 'flex', flexDirection: 'column', gap: { xs: '40px', md: '60px' } }}>
        {news.length > 0 ? (
          news.map((item, index) => (
            <AlternatingFeatureCard 
              key={item.id}
              title={item.title}
              description={item.description}
              image={item.coverImageUrl ? `http://localhost:8081${item.coverImageUrl}` : newsReuseImage}
              imagePosition={index % 2 === 0 ? 'left' : 'right'} 
            />
          ))
        ) : (
          <Typography sx={{ textAlign: 'center', fontFamily: 'Poppins', color: '#666' }}>
            No news found.
          </Typography>
        )}
      </Box>

      <Footer />
    </Box>
  );
};

export default News;
