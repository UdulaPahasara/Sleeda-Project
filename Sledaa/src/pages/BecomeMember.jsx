import React, { useState } from 'react';
import {
  Dialog,
  Box,
  Typography,
  IconButton,
  Button,
  CircularProgress,
  Snackbar,
  Alert,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import emailjs from '@emailjs/browser';

const InputField = ({ label, placeholder, value, onChange, name, type = 'text', required = false }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
    <Typography sx={{ 
      fontFamily: 'Poppins, sans-serif', 
      fontWeight: 500,
      fontSize: { xs: '13px', sm: '14px' }, 
      lineHeight: '20px',
      color: 'rgba(0, 0, 0, 1)', 
      mb: '6px' 
    }}>
      {label} {required && '*'}
    </Typography>
    <Box
      component="input"
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      sx={{
        width: '100%',
        height: { xs: '44px', sm: '50px' },
        backgroundColor: 'rgba(255, 255, 255, 1)',
        border: 'none',
        borderRadius: '5px',
        paddingTop: '6px',
        paddingBottom: '6px',
        paddingLeft: { xs: '12px', sm: '16px' },
        paddingRight: { xs: '12px', sm: '16px' },
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 400,
        fontSize: { xs: '13px', sm: '14px' },
        color: '#333',
        outline: 'none',
        boxSizing: 'border-box',
        '&::placeholder': {
          color: 'rgba(150, 150, 150, 1)'
        }
      }}
    />
  </Box>
);

const BecomeMember = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    registrationNumber: '',
    batch: '',
    field: ''
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

    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim()) {
      setSnackbar({
        open: true,
        message: 'Please fill in all required fields.',
        severity: 'warning'
      });
      return;
    }

    setLoading(true);

    const serviceId = import.meta.env.VITE_EMAILJS_MEMBER_SERVICE_ID || import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_MEMBER_TEMPLATE_ID || import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_MEMBER_PUBLIC_KEY || import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      // First Name
      first_name: formData.firstName,
      firstName: formData.firstName,
      
      // Last Name
      last_name: formData.lastName,
      lastName: formData.lastName,

      // Combined Full Name
      full_name: `${formData.firstName} ${formData.lastName}`,
      from_name: `${formData.firstName} ${formData.lastName}`,
      name: `${formData.firstName} ${formData.lastName}`,

      // Email
      email: formData.email,
      from_email: formData.email,
      user_email: formData.email,
      reply_to: formData.email,

      // Contact / Phone
      contact_number: formData.contactNumber,
      contactNumber: formData.contactNumber,
      phone: formData.contactNumber,

      // Registration Number
      registration_number: formData.registrationNumber,
      registrationNumber: formData.registrationNumber,

      // Batch
      batch: formData.batch,

      // Field
      field: formData.field
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setSnackbar({
        open: true,
        message: 'Thank you! Your membership request has been submitted successfully.',
        severity: 'success'
      });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        contactNumber: '',
        registrationNumber: '',
        batch: '',
        field: ''
      });
      setTimeout(() => {
        if (onClose) onClose();
      }, 1500);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSnackbar({
        open: true,
        message: 'Failed to submit membership request. Please check your EmailJS settings.',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={false}
      disableScrollLock={true}
      slotProps={{
        paper: {
          sx: {
            width: '520px',
            maxWidth: '92vw',
            backgroundColor: '#F0F0F0',
            borderRadius: '12px',
            padding: { xs: '24px 20px', sm: '36px 32px' },
            position: 'relative',
            margin: { xs: '8px', sm: '16px' },
            boxSizing: 'border-box',
            maxHeight: '90vh',
            overflowY: 'auto'
          }
        }
      }}
    >
      {/* Close Button */}
      <IconButton
        onClick={onClose}
        sx={{
          position: 'absolute',
          top: { xs: '10px', sm: '14px' },
          right: { xs: '10px', sm: '14px' },
          color: '#000',
          width: '26px',
          height: '26px',
          p: 0
        }}
      >
        <CloseIcon sx={{ fontSize: '18px' }} />
      </IconButton>

      {/* Title */}
      <Typography sx={{ 
        fontFamily: 'Poppins, sans-serif', 
        fontWeight: 700, 
        fontSize: { xs: '18px', sm: '20px' }, 
        color: '#000', 
        mb: { xs: '18px', sm: '24px' },
        textTransform: 'uppercase'
      }}>
        Become A Member
      </Typography>

      <Box component="form" onSubmit={handleSubmit}>
        {/* Row 1: First Name | Last Name */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: '12px', sm: '16px' }, mb: { xs: '12px', sm: '16px' } }}>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <InputField 
              label="First Name" 
              placeholder="Enter Name" 
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </Box>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <InputField 
              label="Last Name" 
              placeholder="Enter Name" 
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </Box>
        </Box>

        {/* Row 2: Email | Contact Number */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: '12px', sm: '16px' }, mb: { xs: '12px', sm: '16px' } }}>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <InputField 
              label="Email" 
              placeholder="Enter Email" 
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Box>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <InputField 
              label="Contact Number" 
              placeholder="Enter Phone Number" 
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
            />
          </Box>
        </Box>

        {/* Row 3: Registration Number | Batch */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: '12px', sm: '16px' }, mb: { xs: '12px', sm: '16px' } }}>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <InputField 
              label="Registration Number" 
              placeholder="Enter Registration Number" 
              name="registrationNumber"
              value={formData.registrationNumber}
              onChange={handleChange}
            />
          </Box>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <InputField 
              label="Batch" 
              placeholder="Enter Batch" 
              name="batch"
              value={formData.batch}
              onChange={handleChange}
            />
          </Box>
        </Box>

        {/* Row 4: Field — full width */}
        <Box sx={{ mb: { xs: '12px', sm: '16px' } }}>
          <InputField 
            label="Field" 
            placeholder="Enter Field" 
            name="field"
            value={formData.field}
            onChange={handleChange}
          />
        </Box>

        {/* Submit Button */}
        <Button
          type="submit"
          fullWidth
          disabled={loading}
          sx={{
            mt: { xs: '14px', sm: '16px' },
            height: { xs: '46px', sm: '52px' },
            backgroundColor: 'rgba(0, 28, 166, 1)',
            color: '#fff',
            borderRadius: '7px',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 700,
            fontSize: '15px',
            textTransform: 'uppercase',
            boxShadow: 'none',
            letterSpacing: '1px',
            '&:hover': {
              backgroundColor: 'rgba(0, 20, 120, 1)',
              boxShadow: 'none',
            },
            '&.Mui-disabled': {
              backgroundColor: 'rgba(0, 28, 166, 0.6)',
              color: '#fff'
            }
          }}
        >
          {loading ? <CircularProgress size={24} sx={{ color: '#fff' }} /> : 'Submit'}
        </Button>
      </Box>

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
    </Dialog>
  );
};

export default BecomeMember;
