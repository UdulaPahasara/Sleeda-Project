import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import eventHeroBg from '../assets/Event/Eventhero.webp';
import AlternatingFeatureCard from '../components/common/AlternatingFeatureCard';
import reuseImage from '../assets/Event/ReuseImage.webp';

const Event = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:8081/api/events');
        if (response.ok) {
          const data = await response.json();
          setEvents(data);
        }
      } catch (error) {
        console.error("Failed to fetch events", error);
      }
    };

    fetchEvents();
    const interval = setInterval(fetchEvents, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      {/* Hero Section */}
      <Box sx={{ 
        width: '100%', 
        height: { xs: '300px', md: '370px' }, 
        backgroundImage: `url(${eventHeroBg})`, 
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
            EVENTS
          </Typography>
          <Typography sx={{ 
            fontFamily: 'Poppins', 
            fontWeight: 400, 
            fontSize: { xs: '16px', md: '18px' }, 
            lineHeight: '22px', 
            color: '#fff', 
            textAlign: 'center'
          }}>
            A Journey of Laughter, Love, and Legacy
          </Typography>
        </Box>
      </Box>

      {/* Main Content Area */}
      <Box sx={{ flex: 1, backgroundColor: '#fff', py: { xs: '60px', md: '100px' }, px: 2, display: 'flex', flexDirection: 'column', gap: { xs: '40px', md: '60px' } }}>
        {events.length > 0 ? (
          events.map((event, index) => (
            <AlternatingFeatureCard 
              key={event.id || index}
              title={event.title}
              description={event.description}
              image={event.coverImageUrl ? `http://localhost:8081${event.coverImageUrl}` : reuseImage}
              imagePosition={index % 2 === 0 ? 'left' : 'right'} 
            />
          ))
        ) : (
          <Typography sx={{ textAlign: 'center', fontFamily: 'Poppins', color: '#666', fontSize: '18px' }}>
            No events found.
          </Typography>
        )}
      </Box>

      <Footer />
    </Box>
  );
};

export default Event;
