import React, { useState } from 'react';
import { Box, Typography, TextField, Button, CircularProgress, Snackbar, Alert } from '@mui/material';
import emailjs from '@emailjs/browser';

const CustomInputLabel = ({ children }) => (
  <Typography sx={{
    fontFamily: 'Poppins',
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '20px',
    color: '#000',
    mb: '8px'
  }}>
    {children}
  </Typography>
);

const SupportForm = ({ formType = 'canSupport' }) => {
  const isNeedSupport = formType === 'needSupport';

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    about: '',
    helpDetails: ''
  });

  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') return;
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim() || !formData.contactNumber.trim()) {
      setSnackbar({
        open: true,
        message: 'Please fill in all contact details.',
        severity: 'warning'
      });
      return;
    }

    setLoading(true);

    const serviceId = isNeedSupport 
      ? (import.meta.env.VITE_EMAILJS_NEED_SUPPORT_SERVICE_ID || import.meta.env.VITE_EMAILJS_SERVICE_ID)
      : (import.meta.env.VITE_EMAILJS_CAN_SUPPORT_SERVICE_ID || import.meta.env.VITE_EMAILJS_SERVICE_ID);

    const templateId = isNeedSupport
      ? (import.meta.env.VITE_EMAILJS_NEED_SUPPORT_TEMPLATE_ID || import.meta.env.VITE_EMAILJS_SERVICE_ID)
      : (import.meta.env.VITE_EMAILJS_CAN_SUPPORT_TEMPLATE_ID || import.meta.env.VITE_EMAILJS_SERVICE_ID);

    const publicKey = isNeedSupport
      ? (import.meta.env.VITE_EMAILJS_NEED_SUPPORT_PUBLIC_KEY || import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
      : (import.meta.env.VITE_EMAILJS_CAN_SUPPORT_PUBLIC_KEY || import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

    const supportTitle = isNeedSupport ? 'Need Support Application' : 'Can Support Application';

    const templateParams = {
      // Form Meta
      support_type: supportTitle,
      form_type: formType,

      // Name
      first_name: formData.firstName,
      firstName: formData.firstName,
      last_name: formData.lastName,
      lastName: formData.lastName,
      full_name: `${formData.firstName} ${formData.lastName}`,
      from_name: `${formData.firstName} ${formData.lastName}`,
      name: `${formData.firstName} ${formData.lastName}`,

      // Email
      email: formData.email,
      from_email: formData.email,
      user_email: formData.email,
      reply_to: formData.email,

      // Phone
      contact_number: formData.contactNumber,
      contactNumber: formData.contactNumber,
      phone: formData.contactNumber,

      // Information / About
      about: formData.about,
      user_info: formData.about,
      discipline: formData.about,

      // Help details
      help_details: formData.helpDetails,
      helpDetails: formData.helpDetails,
      seeking_help: formData.helpDetails,
      can_help: formData.helpDetails,
      message: formData.helpDetails
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setSnackbar({
        open: true,
        message: 'Thank you! Your support details have been submitted successfully.',
        severity: 'success'
      });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        contactNumber: '',
        about: '',
        helpDetails: ''
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSnackbar({
        open: true,
        message: 'Failed to submit form. Please check your EmailJS setup in .env',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box 
      component="form"
      onSubmit={handleSubmit}
      sx={{
        backgroundColor: 'rgba(243, 243, 243, 1)',
        borderRadius: '20px',
        maxWidth: '959px',
        width: '100%',
        margin: '0 auto',
        padding: { xs: '20px', md: '30px 45px' },
        boxSizing: 'border-box'
      }}
    >
      <Typography sx={{
        fontFamily: 'Poppins',
        fontWeight: 600,
        fontSize: { xs: '18px', md: '20px' },
        lineHeight: { xs: '24px', md: '30px' },
        color: '#000',
        mb: 2
      }}>
        Contact Details
      </Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px', mb: 3, justifyContent: 'space-between' }}>
        <Box sx={{ width: { xs: '100%', md: 'calc(50% - 12px)' } }}>
          <CustomInputLabel>First Name *</CustomInputLabel>
          <TextField 
            fullWidth 
            required
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter Name" 
            variant="outlined" 
            sx={{
              backgroundColor: '#fff',
              borderRadius: '5px',
              '& .MuiOutlinedInput-root': {
                height: '50px',
                padding: '6px 16px',
                '& fieldset': { border: 'none' }
              },
              '& .MuiInputBase-input': {
                fontFamily: 'Poppins',
                fontSize: '14px',
                padding: 0,
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                '&::placeholder': { color: '#a0a0a0', opacity: 1 }
              }
            }}
          />
        </Box>
        <Box sx={{ width: { xs: '100%', md: 'calc(50% - 12px)' } }}>
          <CustomInputLabel>Last Name *</CustomInputLabel>
          <TextField 
            fullWidth 
            required
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter Name" 
            variant="outlined" 
            sx={{
              backgroundColor: '#fff',
              borderRadius: '5px',
              '& .MuiOutlinedInput-root': {
                height: '50px',
                padding: '6px 16px',
                '& fieldset': { border: 'none' }
              },
              '& .MuiInputBase-input': {
                fontFamily: 'Poppins',
                fontSize: '14px',
                padding: 0,
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                '&::placeholder': { color: '#a0a0a0', opacity: 1 }
              }
            }}
          />
        </Box>
        <Box sx={{ width: { xs: '100%', md: 'calc(50% - 12px)' } }}>
          <CustomInputLabel>Email *</CustomInputLabel>
          <TextField 
            fullWidth 
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email" 
            variant="outlined" 
            sx={{
              backgroundColor: '#fff',
              borderRadius: '5px',
              '& .MuiOutlinedInput-root': {
                height: '50px',
                padding: '6px 16px',
                '& fieldset': { border: 'none' }
              },
              '& .MuiInputBase-input': {
                fontFamily: 'Poppins',
                fontSize: '14px',
                padding: 0,
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                '&::placeholder': { color: '#a0a0a0', opacity: 1 }
              }
            }}
          />
        </Box>
        <Box sx={{ width: { xs: '100%', md: 'calc(50% - 12px)' } }}>
          <CustomInputLabel>Contact Number *</CustomInputLabel>
          <TextField 
            fullWidth 
            required
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            placeholder="Enter Phone Number" 
            variant="outlined" 
            sx={{
              backgroundColor: '#fff',
              borderRadius: '5px',
              '& .MuiOutlinedInput-root': {
                height: '50px',
                padding: '6px 16px',
                '& fieldset': { border: 'none' }
              },
              '& .MuiInputBase-input': {
                fontFamily: 'Poppins',
                fontSize: '14px',
                padding: 0,
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                '&::placeholder': { color: '#a0a0a0', opacity: 1 }
              }
            }}
          />
        </Box>
      </Box>

      <Typography sx={{
        fontFamily: 'Poppins',
        fontWeight: 600,
        fontSize: { xs: '18px', md: '20px' },
        lineHeight: { xs: '24px', md: '30px' },
        color: '#000',
        mb: 1
      }}>
        Support Details
      </Typography>

      <Box sx={{ mb: 2 }}>
        <CustomInputLabel>Please do provide some information about you (Discipline of work etc.)</CustomInputLabel>
        <TextField 
          fullWidth 
          multiline
          rows={2}
          name="about"
          value={formData.about}
          onChange={handleChange}
          placeholder="Enter here" 
          variant="outlined" 
          sx={{
            backgroundColor: '#fff',
            borderRadius: '5px',
            '& .MuiOutlinedInput-root': {
              minHeight: '80px',
              alignItems: 'flex-start',
              padding: '12px 16px',
              '& fieldset': { border: 'none' }
            },
            '& .MuiInputBase-input': {
              fontFamily: 'Poppins',
              fontSize: '14px',
            }
          }}
        />
      </Box>

      <Box sx={{ mb: 3 }}>
        <CustomInputLabel>
          {isNeedSupport ? 'What help you are seeking?' : 'What areas you can help?'}
        </CustomInputLabel>
        <TextField 
          fullWidth 
          multiline
          rows={2}
          name="helpDetails"
          value={formData.helpDetails}
          onChange={handleChange}
          placeholder="Enter here" 
          variant="outlined" 
          sx={{
            backgroundColor: '#fff',
            borderRadius: '5px',
            '& .MuiOutlinedInput-root': {
              minHeight: '80px',
              alignItems: 'flex-start',
              padding: '12px 16px',
              '& fieldset': { border: 'none' }
            },
            '& .MuiInputBase-input': {
              fontFamily: 'Poppins',
              fontSize: '14px',
            }
          }}
        />
      </Box>

      <Button
        type="submit"
        fullWidth
        disabled={loading}
        sx={{
          backgroundColor: 'rgba(0, 28, 166, 1)',
          borderRadius: '10px',
          height: '55px',
          padding: '10px',
          fontFamily: 'Poppins',
          fontWeight: 700,
          fontSize: '18px',
          lineHeight: '18px',
          textAlign: 'center',
          textTransform: 'uppercase',
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
        {loading ? <CircularProgress size={26} sx={{ color: '#fff' }} /> : 'SUBMIT'}
      </Button>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%', fontFamily: 'Poppins' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default SupportForm;
