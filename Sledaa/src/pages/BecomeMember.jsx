import React, { useState } from 'react';
import {
  Dialog,
  Box,
  Typography,
  IconButton,
  Button,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const InputField = ({ label, placeholder, value, onChange, name, type = 'text' }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
    <Typography sx={{ 
      fontFamily: 'Poppins, sans-serif', 
      fontWeight: 500,
      fontSize: '14px', 
      lineHeight: '20px',
      color: 'rgba(0, 0, 0, 1)', 
      mb: '6px' 
    }}>
      {label}
    </Typography>
    <Box
      component="input"
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      sx={{
        width: '100%',
        height: '50px',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        border: 'none',
        borderRadius: '5px',
        paddingTop: '6px',
        paddingBottom: '6px',
        paddingLeft: '16px',
        paddingRight: '16px',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 400,
        fontSize: '14px',
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    alert("Membership request submitted!");
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      contactNumber: '',
      registrationNumber: '',
      batch: '',
      field: ''
    });
    if (onClose) onClose();
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
            maxWidth: '95vw',
            backgroundColor: '#F0F0F0',
            borderRadius: '12px',
            padding: '36px 32px',
            position: 'relative',
            margin: '16px',
            boxSizing: 'border-box',
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
          top: '14px',
          right: '14px',
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
        fontSize: '20px', 
        color: '#000', 
        mb: '24px',
        textTransform: 'uppercase'
      }}>
        Become A Member
      </Typography>

      <Box component="form" onSubmit={handleSubmit}>
        {/* Row 1: First Name | Last Name */}
        <Box sx={{ display: 'flex', gap: '16px', mb: '16px' }}>
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
        <Box sx={{ display: 'flex', gap: '16px', mb: '16px' }}>
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
        <Box sx={{ display: 'flex', gap: '16px', mb: '16px' }}>
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
        <Box sx={{ mb: '16px' }}>
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
          sx={{
            mt: '16px',
            height: '52px',
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
            }
          }}
        >
          Submit
        </Button>
      </Box>
    </Dialog>
  );
};

export default BecomeMember;
