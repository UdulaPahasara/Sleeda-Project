import React from 'react';
import { Box, Typography } from '@mui/material';
import ScrollFocusReveal from './ScrollFocusReveal';

const AlternatingFeatureCard = ({ image, title, description, imagePosition = 'left' }) => {
  // Determine if image should be on the left or right for desktop
  const isImageLeft = imagePosition === 'left';

  return (
    <ScrollFocusReveal
      sx={{
        width: '100%',
        maxWidth: '1240px',
        backgroundColor: 'rgba(243, 243, 243, 1)', 
        borderRadius: '20px',
        
        pt: '21px',
        pb: '22px',
        pl: { xs: '22px', md: isImageLeft ? '22px' : '77px' },
        pr: { xs: '22px', md: isImageLeft ? '77px' : '22px' },
        display: 'flex',
        flexDirection: {
          xs: 'column', 
          md: isImageLeft ? 'row' : 'row-reverse' 
        },
        alignItems: 'center',
        gap: { xs: '30px', md: '62px' }, 
        margin: '0 auto', 
        boxSizing: 'border-box'
      }}
    >
      <Box 
        sx={{ 
          flex: 1, 
          width: '100%',
          maxWidth: { xs: '100%', md: '625px' }, 
          display: 'flex', 
          justifyContent: 'center'
        }}
      >
        <img
          src={image}
          alt={title}
          loading="lazy"
          style={{
            width: '100%',
            aspectRatio: '16/10',
            borderRadius: '16px',
            objectFit: 'cover'
          }}
        />
      </Box>

      <Box 
        sx={{ 
          flex: 1, 
          display: 'flex', 
          flexDirection: 'column',
          gap: '10px',
          width: '100%',
          maxWidth: { xs: '100%', md: '499px' },
          alignItems: { xs: 'center', md: 'flex-start' }
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontWeight: 700,
            fontSize: { xs: '28px', md: '28px' },
            lineHeight: { xs: '34px', md: '40px' },
            color: 'rgba(0, 28, 166, 1)', 
            textAlign: { xs: 'center', md: 'left' }
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontWeight: 400,
            fontSize: { xs: '16px', md: '16px' },
            lineHeight: '22px',
            color: 'rgba(117, 117, 117, 1)',
            whiteSpace: 'pre-line',
            textAlign: { xs: 'center', md: 'left' }
          }}
        >
          {description}
        </Typography>
      </Box>
    </ScrollFocusReveal>
  );
};

export default AlternatingFeatureCard;
