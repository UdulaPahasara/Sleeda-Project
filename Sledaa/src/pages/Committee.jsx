import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ScrollFocusReveal from '../components/common/ScrollFocusReveal';

import committeeHeroBg from '../assets/Committee/committieHero.webp';
import leadershipImg from '../assets/Committee/leadershipImg.webp';
import ourTeamImg from '../assets/Committee/ourteam.webp';

const pastTeamMembers = [
  { name: "THILINA JAYAWARDANA", position: "President" },
  { name: "KASUN PERERA", position: "Vice President" },
  { name: "ANURA JAYAWARDHANA", position: "Secretary" },
  { name: "AMALI PERERA", position: "Assistant Secretary" },
  { name: "THILINA JAYAWARDANA", position: "Treasurer" },
  { name: "KASUN PERERA", position: "Assistant Treasurer" },
  { name: "ANURA JAYAWARDHANA", position: "Committee Member" },
  { name: "AMALI PERERA", position: "Committee Member" }
];

const Committee = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchCommittee = async () => {
      try {
        const response = await fetch('http://localhost:8081/api/committee');
        if (response.ok) {
          const data = await response.json();
          setMembers(data);
        }
      } catch (error) {
        console.error("Failed to fetch committee", error);
      }
    };

    fetchCommittee();
  }, []);

  return (
    <Box sx={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      {/* Hero Section */}
      <Box sx={{ 
        width: '100%', 
        height: { xs: '300px', md: '370px' }, 
        backgroundImage: `url(${committeeHeroBg})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'relative',
        px: 2
      }}>
        {/* Dark overlay */}
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
            mb: 2
          }}>
            COMMITTEE
          </Typography>
          <Typography sx={{ 
            fontFamily: 'Poppins', 
            fontWeight: 400, 
            fontSize: { xs: '14px', md: '16px', lg: '18px' }, 
            lineHeight: '22px', 
            color: '#fff', 
            textAlign: 'center',
            maxWidth: '632px'
          }}>
            Meet the dedicated volunteers who lead SLEDAA with passion, integrity, and a shared commitment to supporting Sri Lankan engineering diplomates across Australia.
          </Typography>
        </Box>
      </Box>

      {/* Main Content Area */}
      <Box sx={{ flex: 1, backgroundColor: '#fff', py: { xs: '60px', md: '70px',lg:'70px' }, px: 2 }}>
        
        {/* Executive Committee Section */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: { xs: '80px', md: '120px' } }}>
          <Typography sx={{
            fontFamily: 'Poppins',
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '22px',
            color: 'rgba(0, 28, 166, 1)',
            textAlign: 'center',
            mb: 1
          }}>
            Our Leadership
          </Typography>
          <Typography sx={{
            fontFamily: 'Poppins',
            fontWeight: 600,
            fontSize: { xs: '22px', md: '25px' },
            lineHeight: '30px',
            color: 'rgba(0, 0, 0, 1)',
            textAlign: 'center',
            mb: 2
          }}>
            Executive Committee
          </Typography>
          <Typography sx={{
            fontFamily: 'Poppins',
            fontWeight: 400,
            fontSize: { xs: '16px', md: '18px' },
            lineHeight: '22px',
            color: '#333',
            textAlign: 'center',
            maxWidth: '817px',
            mb: 5
          }}>
            Our Executive Committee consists of experienced professionals who volunteer their time and expertise to guide the association, organize programs, support members, and strengthen the engineering community across Australia.
          </Typography>
          
          <ScrollFocusReveal>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: '16px', md: '30px' }, width: '100%', justifyContent: 'center' }}>
              {/* Left Swipe Button */}
              <IconButton
                sx={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '25px',
                  backgroundColor: 'rgba(224, 224, 224, 1)', // Light gray
                  display: { xs: 'none', sm: 'flex' },
                  '&:hover': { backgroundColor: 'rgba(200, 200, 200, 1)' }
                }}
              >
                <ArrowBackIosNewIcon sx={{ color: 'rgba(117, 117, 117, 1)', fontSize: '18px' }} />
              </IconButton>

              <Box 
                component="img" 
                src={leadershipImg} 
                alt="Leadership Team"
                sx={{
                  width: '100%',
                  maxWidth: '825px',
                  height: 'auto',
                  borderRadius: '20px',
                  objectFit: 'cover'
                }}
              />

              {/* Right Swipe Button */}
              <IconButton
                sx={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '25px',
                  backgroundColor: 'rgba(224, 224, 224, 1)', // Light gray
                  display: { xs: 'none', sm: 'flex' },
                  '&:hover': { backgroundColor: 'rgba(200, 200, 200, 1)' }
                }}
              >
                <ArrowForwardIosIcon sx={{ color: 'rgba(117, 117, 117, 1)', fontSize: '18px' }} />
              </IconButton>
            </Box>
          </ScrollFocusReveal>
        </Box>

        {/* Meet Our Team Section */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '1260px', mx: 'auto',mt:{lg:'-60px',md:'-40px',sm:'-30px',xs:'-20px'} }}>
          <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 5 }}>
            <Typography sx={{
              fontFamily: 'Poppins',
              fontWeight: 600,
              fontSize: '16px',
              lineHeight: '22px',
              color: 'rgba(0, 28, 166, 1)',
              textAlign: 'center',
              mb: 1
            }}>
              Meet Our Team
            </Typography>
            <Typography sx={{
              fontFamily: 'Poppins',
              fontWeight: 600,
              fontSize: { xs: '22px', md: '25px' },
              lineHeight: '30px',
              color: 'rgba(0, 0, 0, 1)',
              textAlign: 'center'
            }}>
              Serving Our Community
            </Typography>
          </Box>

          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, 
            gap: '40px',
            width: '100%'
          }}>
            {members.length > 0 ? (
              members.map((member, index) => (
                <ScrollFocusReveal key={member.id} delay={`${index * 0.1}s`}>
                  <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center',
                    width: '100%',
                    maxWidth: '295px',
                    mx: 'auto'
                  }}>
                    <Box 
                      component="img" 
                      src={member.imageUrl ? `http://localhost:8081${member.imageUrl}` : ourTeamImg} 
                      alt={member.name}
                      sx={{
                        width: '100%',
                        height: '269.75px', // Exact height from spec
                        borderRadius: '10px',
                        objectFit: 'cover',
                        backgroundColor: '#f5f5f5',
                        mb: 2
                      }}
                    />
                    <Typography sx={{
                      fontFamily: 'Poppins',
                      fontWeight: 600,
                      fontSize: '18px', // Scaled slightly to fit well, standard was 20px
                      lineHeight: '22px',
                      textAlign: 'center',
                      textTransform: 'uppercase',
                      color: '#000',
                      mb: 0.5
                    }}>
                      {member.name}
                    </Typography>
                    <Typography sx={{
                      fontFamily: 'Poppins',
                      fontWeight: 500,
                      fontSize: '16px',
                      lineHeight: '20px',
                      textAlign: 'center',
                      textTransform: 'capitalize',
                      color: '#666'
                    }}>
                      {member.position}
                    </Typography>
                  </Box>
                </ScrollFocusReveal>
              ))
            ) : (
              <Typography sx={{ textAlign: 'center', fontFamily: 'Poppins', color: '#666', gridColumn: '1 / -1' }}>
                No committee members found.
              </Typography>
            )}
          </Box>
        </Box>

        {/* Meet Our Past Team Section */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '1260px', mx: 'auto', mt: { xs: '60px', md: '80px', lg: '100px' } }}>
          <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 5 }}>
            <Typography sx={{
              fontFamily: 'Poppins',
              fontWeight: 600,
              fontSize: '16px',
              lineHeight: '22px',
              color: 'rgba(0, 28, 166, 1)',
              textAlign: 'center',
              mb: 1
            }}>
              Meet Our Past Team
            </Typography>
            <Typography sx={{
              fontFamily: 'Poppins',
              fontWeight: 600,
              fontSize: { xs: '22px', md: '25px' },
              lineHeight: '30px',
              color: 'rgba(0, 0, 0, 1)',
              textAlign: 'center'
            }}>
              Serving Our Past Community
            </Typography>
          </Box>

          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, 
            gap: '40px',
            width: '100%'
          }}>
            {pastTeamMembers.map((member, index) => (
              <ScrollFocusReveal key={index} delay={`${index * 0.1}s`}>
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center',
                  width: '100%',
                  maxWidth: '295px',
                  mx: 'auto'
                }}>
                  <Box 
                    component="img" 
                    src={ourTeamImg} 
                    alt={member.name}
                    sx={{
                      width: '100%',
                      height: '269.75px', // Exact height from spec
                      borderRadius: '10px',
                      objectFit: 'cover',
                      backgroundColor: '#f5f5f5',
                      mb: 2
                    }}
                  />
                  <Typography sx={{
                    fontFamily: 'Poppins',
                    fontWeight: 600,
                    fontSize: '18px', // Scaled slightly to fit well, standard was 20px
                    lineHeight: '22px',
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    color: '#000',
                    mb: 0.5
                  }}>
                    {member.name}
                  </Typography>
                  <Typography sx={{
                    fontFamily: 'Poppins',
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: '20px',
                    textAlign: 'center',
                    textTransform: 'capitalize',
                    color: '#666'
                  }}>
                    {member.position}
                  </Typography>
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

export default Committee;
