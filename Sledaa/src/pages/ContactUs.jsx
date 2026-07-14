import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ScrollFocusReveal from '../components/common/ScrollFocusReveal';

import contactHeroBg from '../assets/ContactUs/contactHero.webp';
import fbIcon from '../assets/ContactUs/Fb.webp';
import instaIcon from '../assets/ContactUs/insta.webp';
import whatsappIcon from '../assets/ContactUs/whatsapp.webp';
import mailIcon from '../assets/ContactUs/mail.webp';
import callIcon from '../assets/ContactUs/call.webp';
import locationIcon from '../assets/ContactUs/location.webp';

const ContactUs = () => {
  return (
    <Box sx={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      {/* Hero Section */}
      <Box sx={{ 
        width: '100%', 
        height: { xs: '300px', md: '370px' }, 
        backgroundImage: `url(${contactHeroBg})`, 
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
            CONTACT US
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
            We're here to answer your questions, support your membership journey, and help you connect with the Sri Lankan Engineering Diplomates Association of Australia.
          </Typography>
        </Box>
      </Box>

      {/* Main Content Area */}
      <Box sx={{ flex: 1, backgroundColor: '#fff', py: { xs: '60px', md: '100px' }, px: 2 }}>
        
        {/* Contact Split Section */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          justifyContent: 'center', 
          alignItems: { xs: 'center', md: 'flex-start' },
          maxWidth: '1260px', 
          mx: 'auto',
          gap: { xs: '60px', md: '100px' },
          mb: { xs: '80px', md: '150px' }
        }}>
          
          {/* Left Text & Socials Area */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            maxWidth: '492px', 
            width: '100%',
            alignItems: { xs: 'center', md: 'flex-start' },
            textAlign: { xs: 'center', md: 'left' }
          }}>
            <Typography sx={{ 
              fontFamily: 'Poppins', 
              fontWeight: 600, 
              fontSize: '22px', 
              lineHeight: '22px', 
              color: 'rgba(0, 28, 166, 1)',
              mb: 2
            }}>
              Get In Touch
            </Typography>
            <Typography sx={{ 
              fontFamily: 'Poppins', 
              fontWeight: 600, 
              fontSize: { xs: '28px', md: '35px' }, 
              lineHeight: { xs: '38px', md: '45px' }, 
              color: '#000',
              textTransform: 'uppercase',
              mb: 3
            }}>
              Let's Connect and Build Stronger Engineering Communities
            </Typography>
            <Typography sx={{ 
              fontFamily: 'Poppins', 
              fontWeight: 400, 
              fontSize: '16px', 
              lineHeight: '20px', 
              color: 'rgba(117, 117, 117, 1)',
              mb: 5
            }}>
              Whether you're interested in becoming a member, attending our events, exploring partnership opportunities, or simply learning more about SLEDAA, we'd love to hear from you. Reach out to our team and we'll get back to you as soon as possible.
            </Typography>
            
            <Typography sx={{ 
              fontFamily: 'Rubik', 
              fontWeight: 500, 
              fontSize: '22.07px', 
              lineHeight: '33.1px', 
              color: '#000',
              mb: 2
            }}>
              Follow Us
            </Typography>
            
            <Box sx={{ display: 'flex', gap: '22.07px' }}>
              <Box component="a" href="#" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={fbIcon} alt="Facebook" style={{ width: '27.59px', height: '27.59px' }} />
              </Box>
              <Box component="a" href="#" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={instaIcon} alt="Instagram" style={{ width: '27.59px', height: '27.59px' }} />
              </Box>
              <Box component="a" href="#" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={whatsappIcon} alt="WhatsApp" style={{ width: '27.59px', height: '27.59px' }} />
              </Box>
            </Box>
          </Box>

          {/* Right Form Area */}
          <ScrollFocusReveal sx={{ width: '100%', maxWidth: '623px' }}>
            <Box sx={{
              backgroundColor: '#fff',
              borderRadius: '20px',
              boxShadow: '3px 2px 25px 2px rgba(0, 0, 0, 0.1)',
              padding: { xs: '30px 20px', md: '46px 42px' },
              display: 'flex',
              flexDirection: 'column',
              minHeight: { md: '514px' },
              gap: '45px',
              width: '100%'
            }}>
              <TextField 
                variant="standard" 
                placeholder="Your Name" 
                fullWidth 
                InputProps={{ sx: { pb: 1, fontFamily: 'Poppins' } }} 
              />
              <TextField 
                variant="standard" 
                placeholder="Contact Number with Country Code" 
                fullWidth 
                InputProps={{ sx: { pb: 1, fontFamily: 'Poppins' } }} 
              />
              <TextField 
                variant="standard" 
                placeholder="Email Address" 
                fullWidth 
                InputProps={{ sx: { pb: 1, fontFamily: 'Poppins' } }} 
              />
              <TextField 
                variant="standard" 
                placeholder="Your Inquiry" 
                fullWidth 
                sx={{ mt: 'auto' }}
                InputProps={{ sx: { pb: 1, fontFamily: 'Poppins' } }} 
              />
              
              <Button sx={{
                backgroundColor: 'rgba(0, 28, 166, 1)',
                borderRadius: '10px',
                padding: '15px 10px', // Adjusted to look good while meeting height ~48px
                width: '100%',
                color: '#fff',
                '&:hover': {
                  backgroundColor: 'rgba(0, 20, 120, 1)'
                }
              }}>
                <Typography sx={{
                  fontFamily: 'Rubik',
                  fontWeight: 500,
                  fontSize: '18px',
                  lineHeight: '18px',
                  textTransform: 'uppercase'
                }}>
                  SEND MESSAGE
                </Typography>
              </Button>
            </Box>
          </ScrollFocusReveal>

        </Box>

        {/* Bottom Contact Info Section */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '1260px', mx: 'auto' }}>
          <Typography sx={{
            fontFamily: 'Poppins',
            fontWeight: 600,
            fontSize: '14px',
            lineHeight: '100%',
            color: 'rgba(0, 28, 166, 1)',
            textAlign: 'center',
            mb: 1
          }}>
            CONTACT US
          </Typography>
          <Typography sx={{
            fontFamily: 'Poppins',
            fontWeight: 600,
            fontSize: { xs: '18px', md: '20px' },
            lineHeight: '100%',
            color: '#000',
            textAlign: 'center',
            mb: 6
          }}>
            Get in Touch – We're Here to Help!
          </Typography>

          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' }, 
            justifyContent: 'center',
            alignItems: 'center',
            gap: { xs: '40px', md: '100px' },
            width: '100%'
          }}>
            {/* Email */}
            <ScrollFocusReveal delay="0s">
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '150px' }}>
                <Box component="img" src={mailIcon} alt="Email" sx={{ width: '60px', height: '60px', mb: 2 }} />
                <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '16px', color: 'rgba(0, 28, 166, 1)', mb: 1 }}>Email Us</Typography>
                <Typography sx={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '12px', color: '#000' }}>info@sledaa.org</Typography>
              </Box>
            </ScrollFocusReveal>

            {/* Contact */}
            <ScrollFocusReveal delay="0.1s">
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '150px' }}>
                <Box component="img" src={callIcon} alt="Call" sx={{ width: '60px', height: '60px', mb: 2 }} />
                <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '16px', color: 'rgba(0, 28, 166, 1)', mb: 1 }}>Contact Us</Typography>
                <Typography sx={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '12px', color: '#000' }}>+61 4 0000 0000</Typography>
              </Box>
            </ScrollFocusReveal>

            {/* Visit */}
            <ScrollFocusReveal delay="0.2s">
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '150px' }}>
                <Box component="img" src={locationIcon} alt="Location" sx={{ width: '60px', height: '60px', mb: 2 }} />
                <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '16px', color: 'rgba(0, 28, 166, 1)', mb: 1 }}>Visit Us</Typography>
                <Typography sx={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '12px', color: '#000', textAlign: 'center' }}>Melbourne, Victoria, Australia</Typography>
              </Box>
            </ScrollFocusReveal>
          </Box>
        </Box>

      </Box>

      <Footer />
    </Box>
  );
};

export default ContactUs;
