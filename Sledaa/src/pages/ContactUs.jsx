import React, { useState } from 'react';
import { Box, Typography, TextField, Button, CircularProgress, Snackbar, Alert } from '@mui/material';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ScrollFocusReveal from '../components/common/ScrollFocusReveal';

// Country Flag Phone Input Library Imports
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import emailjs from '@emailjs/browser';

import contactHeroBg from '../assets/ContactUs/contactHero.webp';
import fbIcon from '../assets/ContactUs/Fb.webp';
import instaIcon from '../assets/ContactUs/insta.webp';
import whatsappIcon from '../assets/ContactUs/whatsapp.webp';
import mailIcon from '../assets/ContactUs/mail.webp';
import callIcon from '../assets/ContactUs/call.webp';
import locationIcon from '../assets/ContactUs/location.webp';

const ContactUs = () => {
  const [phone, setPhone] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiry: ''
  });
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') return;
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const phoneDigits = phone ? phone.replace(/\D/g, '') : '';

    if (!formData.name.trim() || !formData.email.trim() || !formData.inquiry.trim() || phoneDigits.length < 7) {
      setSnackbar({
        open: true,
        message: 'Please fill in all fields including your full contact phone number.',
        severity: 'warning'
      });
      return;
    }

    setLoading(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      // Name aliases
      from_name: formData.name,
      name: formData.name,
      user_name: formData.name,
      full_name: formData.name,

      // Email aliases
      from_email: formData.email,
      email: formData.email,
      user_email: formData.email,
      email_address: formData.email,
      reply_to: formData.email,

      // Phone aliases
      contact_number: phone,
      phone: phone,
      phone_number: phone,
      user_phone: phone,
      contact_no: phone,

      // Inquiry / Message aliases
      message: formData.inquiry,
      inquiry: formData.inquiry,
      user_message: formData.inquiry,
      user_inquiry: formData.inquiry
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setSnackbar({
        open: true,
        message: 'Thank you! Your message has been sent successfully.',
        severity: 'success'
      });
      setFormData({ name: '', email: '', inquiry: '' });
      setPhone('');
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSnackbar({
        open: true,
        message: 'Failed to send message. Please verify your EmailJS keys in .env',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

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
            <Box 
              component="form" 
              onSubmit={handleSubmit}
              sx={{
                backgroundColor: '#fff',
                borderRadius: '20px',
                boxShadow: '3px 2px 25px 2px rgba(0, 0, 0, 0.1)',
                padding: { xs: '30px 20px', md: '46px 42px' },
                display: 'flex',
                flexDirection: 'column',
                minHeight: { md: '514px' },
                gap: '35px',
                width: '100%'
              }}
            >
              <TextField 
                variant="standard" 
                placeholder="Your Name" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                fullWidth 
                InputProps={{ sx: { pb: 1, fontFamily: 'Poppins' } }} 
              />

              {/* Country Flag Phone Input Field */}
              <Box sx={{ 
                width: '100%', 
                borderBottom: '1px solid rgba(0, 0, 0, 0.42)', 
                pb: 0.5,
                position: 'relative',
                '& .react-international-phone-country-selector-dropdown': {
                  zIndex: 99999,
                  backgroundColor: '#ffffff !important',
                  boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.18) !important',
                  borderRadius: '8px !important',
                  border: '1px solid #e0e0e0 !important',
                  maxHeight: '220px !important',
                  maxWidth: 'calc(100vw - 60px) !important',
                  left: '0 !important',
                  color: '#000000 !important',
                  fontFamily: "'Poppins', sans-serif !important",
                },
                '& .react-international-phone-country-selector-button': {
                  backgroundColor: 'transparent !important',
                  border: 'none !important',
                  fontFamily: "'Poppins', sans-serif !important",
                },
                '& .react-international-phone-country-selector-button__dial-code': {
                  fontFamily: "'Poppins', sans-serif !important",
                  fontSize: '15px !important',
                  color: '#333333 !important',
                },
                '& .react-international-phone-country-selector-dropdown__item': {
                  color: '#333333 !important',
                  fontFamily: "'Poppins', sans-serif !important",
                  fontSize: '13px !important',
                  padding: '8px 12px !important',
                  backgroundColor: '#ffffff !important',
                  maxWidth: '100% !important',
                  boxSizing: 'border-box !important',
                  '&:hover': {
                    backgroundColor: '#f0f4ff !important',
                  }
                },
                '& .react-international-phone-country-selector-dropdown__item-country-name': {
                  color: '#000000 !important',
                  fontWeight: '500 !important',
                  fontFamily: "'Poppins', sans-serif !important",
                  fontSize: '13px !important',
                  whiteSpace: 'nowrap !important',
                  overflow: 'hidden !important',
                  textOverflow: 'ellipsis !important',
                  maxWidth: '180px !important',
                },
                '& .react-international-phone-country-selector-dropdown__item-dial-code': {
                  color: '#666666 !important',
                  fontFamily: "'Poppins', sans-serif !important",
                  fontSize: '12px !important',
                }
              }}>
                <PhoneInput
                  defaultCountry="au"
                  value={phone}
                  onChange={(phoneStr) => setPhone(phoneStr)}
                  placeholder="Enter Contact Number"
                  style={{
                    '--react-international-phone-border-radius': '0px',
                    '--react-international-phone-border-color': 'transparent',
                    '--react-international-phone-background-color': 'transparent',
                    '--react-international-phone-font-family': 'Poppins, sans-serif',
                    '--react-international-phone-font-size': '16px',
                    '--react-international-phone-height': '36px',
                    width: '100%'
                  }}
                  inputStyle={{
                    width: '100%',
                    border: 'none',
                    outline: 'none',
                    fontSize: '16px',
                    fontFamily: 'Poppins, sans-serif'
                  }}
                  countrySelectorStyleProps={{
                    buttonStyle: {
                      border: 'none',
                      paddingRight: '10px'
                    },
                    dropdownStyleProps: {
                      style: {
                        zIndex: 99999,
                        backgroundColor: '#ffffff',
                        boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.18)',
                        borderRadius: '8px',
                        border: '1px solid #e0e0e0',
                        maxHeight: '220px',
                        maxWidth: 'calc(100vw - 60px)',
                        left: 0,
                        overflowY: 'auto'
                      }
                    }
                  }}
                />
              </Box>

              <TextField 
                variant="standard" 
                placeholder="Email Address" 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                fullWidth 
                InputProps={{ sx: { pb: 1, fontFamily: 'Poppins' } }} 
              />
              <TextField 
                variant="standard" 
                placeholder="Your Inquiry" 
                name="inquiry"
                multiline
                rows={3}
                value={formData.inquiry}
                onChange={handleInputChange}
                fullWidth 
                InputProps={{ sx: { pb: 1, fontFamily: 'Poppins' } }} 
              />
              
              <Button 
                type="submit"
                disabled={loading}
                sx={{
                  backgroundColor: 'rgba(0, 28, 166, 1)',
                  borderRadius: '10px',
                  padding: '15px 10px',
                  width: '100%',
                  color: '#fff',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 20, 120, 1)'
                  },
                  '&.Mui-disabled': {
                    backgroundColor: 'rgba(0, 28, 166, 0.6)',
                    color: '#fff'
                  }
                }}
              >
                {loading ? (
                  <CircularProgress size={24} sx={{ color: '#fff' }} />
                ) : (
                  <Typography sx={{
                    fontFamily: 'Rubik',
                    fontWeight: 500,
                    fontSize: '18px',
                    lineHeight: '18px',
                    textTransform: 'uppercase'
                  }}>
                    SEND MESSAGE
                  </Typography>
                )}
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

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%', fontFamily: 'Poppins' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>

      <Footer />
    </Box>
  );
};

export default ContactUs;
