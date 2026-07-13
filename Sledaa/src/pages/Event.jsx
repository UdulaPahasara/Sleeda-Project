import React from 'react';
import { Box, Typography } from '@mui/material';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import eventHeroBg from '../assets/Event/Eventhero.webp';
import AlternatingFeatureCard from '../components/common/AlternatingFeatureCard';
import reuseImage from '../assets/Event/ReuseImage.webp';

const eventData = [
  {
    title: "The First Annual Get Together",
    description: "The first annual get together was held at the Youth Centre in Mount Waverley on 1 October 1994.",
    image: reuseImage
  },
  {
    title: "The First Family Event",
    description: "The first family day trip to Werribee park was held on 6 November 1994.",
    image: reuseImage
  },
  {
    title: "The First Annual General Meeting",
    description: "The first AGM of the association was held at Neighbourhood House in Springvale on 25 June 1995.\nThe annual dinner dance held at Holy Family parish Hall in Doveton, Victoria.",
    image: reuseImage
  },
  {
    title: "The first Fund Raising Activity",
    description: "The association screened a very popular Sinhala film “Vasanthi” (The Fishing Girl) directed by renowned film director H. D. Premaratne in order to raise the association. It was screened at Alexander Theatre at the Monash University, Clayton Campus on 11 February 1996. Mr. H. G. P. Nelson attended the event as the guest of honour.\n\nIn 1997, another film “Channa Kinnari” (Malini Fonseka) was screened at the Alexander Theatre, Monash University with the aim of raising funds to establish a scholarship fund for NDT students at the University of Moratuwa, Sri Lanka. This event marked the 10th Anniversary of SLEDAA.\n\nLorem ipsum dolor sit amet consectetur, urna velit non sapien sagittis convallis nibh cursus varius varius ipsum. Odio ut acco",
    image: reuseImage
  },
  {
    title: "SLEDAA Techno Nite 2023",
    description: "SLEDAA Techno Nite 2023 was an energetic night of music, dance, and modern entertainment, celebrating unity and togetherness while bringing the community together for an unforgettable experience.",
    image: reuseImage
  },
  {
    title: "SLEDAA Techno Nite 2024",
    description: "SLEDAA Techno Nite 2024 will be an electrifying night of music, dance, and modern entertainment, uniting the community in a vibrant celebration of energy and togetherness.",
    image: reuseImage
  },
  {
    title: "30th Anniversary",
    description: "SLEDAA held its 30th Anniversary on the 10th of June 2023 at the functions address, Mulgrave Country Club, Mulgrave VIC 3170.",
    image: reuseImage
  }
];

const Event = () => {
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
        {eventData.map((event, index) => (
          <AlternatingFeatureCard 
            key={index}
            title={event.title}
            description={event.description}
            image={event.image}
            imagePosition={index % 2 === 0 ? 'left' : 'right'} 
          />
        ))}
      </Box>

      <Footer />
    </Box>
  );
};

export default Event;
