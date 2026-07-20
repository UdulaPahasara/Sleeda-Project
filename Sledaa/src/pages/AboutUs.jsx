import React, { useRef, useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import aboutHeroBg from '../assets/AboutUs/abouthero.webp';
import whoWeAreImg from '../assets/AboutUs/whoweare.webp';
import executiveImg from '../assets/AboutUs/excetive.webp';
import tokenTrustIcon from '../assets/Home/token_trust.webp';
import InfoCard from '../components/common/InfoCard';
import aboutUsAboveFooterImg from '../assets/AboutUs/aboveFooter.webp';

const AboutUs = () => {
  const carouselRef = useRef(null);
  const [activeCard, setActiveCard] = useState(0);

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const newIndex = Math.round(scrollLeft / 325);
      setActiveCard(prev => (prev === newIndex ? prev : newIndex));
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollWidth, clientWidth } = carouselRef.current;
        if (scrollWidth > clientWidth) {
          setActiveCard((prev) => {
            const next = (prev + 1) % 4;
            carouselRef.current.scrollTo({ left: next * 325, behavior: 'smooth' });
            return next;
          });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      {/* Hero Section */}
      <Box sx={{ 
        width: '100%', 
        height: { xs: '400px', md: '500px', lg: '600px' }, 
        backgroundImage: `url(${aboutHeroBg})`, 
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
        <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.3)' }} />
        
        <Box sx={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '800px' }}>
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
            ABOUT US
          </Typography>
          <Typography sx={{ 
            fontFamily: 'Poppins', 
            fontWeight: 400, 
            fontSize: { xs: '16px', md: '18px' }, 
            lineHeight: '22px', 
            color: '#fff', 
            textAlign: 'center',
            maxWidth: '522px'
          }}>
            Building a strong Sri Lankan engineering community in Australia since 1994
          </Typography>
        </Box>
      </Box>

      {/* Who We Are Section */}
      <Box sx={{ width: '100%', backgroundColor: '#fff', py: { xs: '60px', sm: '80px', md: '100px' }, display: 'flex', justifyContent: 'center', px: { xs: 2, sm: 3, md: 4 }, pb:{lg:'1px',md:'10px',sm:'15px',xs:'2px'} }}>
        <Box sx={{ maxWidth: '1440px', width: '100%', display: 'flex', flexDirection: { xs: 'column-reverse', sm: 'row' }, alignItems: 'center', justifyContent: 'center', gap: { xs: '40px', sm: '30px', lg: '80px' } }}>
          
          {/* Left: Image */}
          <Box sx={{ flex: 1, display: 'flex', justifyContent: { xs: 'center', sm: 'flex-end' }, width: '100%' }}>
            <img 
              src={whoWeAreImg} 
              alt="Who We Are" 
              style={{ width: '100%', maxWidth: '495px', height: 'auto', borderRadius: '21.56px', objectFit: 'cover' }} 
            />
          </Box>

          {/* Right: Text */}
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', maxWidth: '590px', alignItems: { xs: 'center', sm: 'flex-start' }, textAlign: { xs: 'center', sm: 'left' } }}>
            <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: { xs: '18px', sm: '20px', md: '22px' }, lineHeight: '22px', color: 'rgba(0, 28, 166, 1)', mb: '16px' }}>
              Who We Are
            </Typography>
            
            <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: { xs: '26px', sm: '28px', md: '35px' }, lineHeight: { xs: '32px', sm: '34px', md: '40px' }, color: 'rgba(0, 0, 0, 1)', mb: { xs: '16px', sm: '24px' } }}>
              Connecting Engineers. Building Community. Inspiring Excellence.
            </Typography>
            
            <Typography sx={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: { xs: '15px', sm: '14px', md: '18px' }, lineHeight: { xs: '22px', sm: '20px', md: '22px' }, color: 'rgba(117, 117, 117, 1)' }}>
              Established in Melbourne in 1994, SLEDAA is a non-profit organization dedicated to supporting Sri Lankan engineering diplomates living and working across Australia.
              <br /><br />
              Our association promotes professional growth through networking, knowledge sharing, mentoring, and educational initiatives while strengthening the bonds of our vibrant Sri Lankan engineering community.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Our Executive Committee Section */}
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', pt: { xs: '60px' } }}>
        <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '16px', lineHeight: '22px', color: 'rgba(0, 28, 166, 1)', mb: 1, textAlign: 'center' }}>
          Our Journey
        </Typography>
        <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: { xs: '22px', md: '25px' }, lineHeight: '30px', color: 'rgba(0, 0, 0, 1)', mb: 2, textAlign: 'center' }}>
          Our Executive Committee
        </Typography>
        <Typography sx={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: { xs: '14px', md: '16px' }, lineHeight: '20px', color: 'rgba(117, 117, 117, 1)', mb: 4, textAlign: 'center', maxWidth: '1009px', px: 2 }}>
          Founded in Melbourne in 1994, SLEDAA was created to help newly migrated engineering diplomates overcome professional and social challenges. Over the past 30+ years, the association has grown into a strong community through workshops, welfare initiatives, social events, and educational support programs. In 2023, SLEDAA proudly celebrated its 30th Anniversary, marking three decades of service and unity.
        </Typography>

        {/* Image and Blue Background Container */}
        <Box sx={{ width: '100%', position: 'relative', display: 'flex', justifyContent: 'center', mt: { xs: 2, md: 4 } }}>
          {/* Blue Background block matching the 302px height specification on desktop */}
          <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: { xs: '50%', md: '302px' }, backgroundColor: 'rgba(0, 28, 166, 1)', zIndex: 0 }} />
          
          {/* Executive Image */}
          <Box sx={{ zIndex: 1, width: '100%', maxWidth: '1050px', px: 2, pb: { xs: 4, md: 6 } }}>
            <img 
              src={executiveImg} 
              alt="Executive Committee" 
              style={{ width: '100%', height: 'auto', borderRadius: '20px', display: 'block' }} 
            />
          </Box>
        </Box>
      </Box>

      {/* What We Do Section */}
      <Box sx={{ width: '100%', backgroundColor: '#fff', py: { xs: '60px', md: '60px' }, display: 'flex', flexDirection: 'column', alignItems: 'center',pb:{xs:5,md:5}}}>
        <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '16px', lineHeight: '22px', color: 'rgba(0, 28, 166, 1)', mb: 1, textAlign: 'center' }}>
          What We Do
        </Typography>
        <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: { xs: '22px', md: '25px' }, lineHeight: '30px', color: 'rgba(0, 0, 0, 1)', mb: 2, textAlign: 'center', px: 2 }}>
          Supporting Members at Every Stage
        </Typography>
        <Typography sx={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: { xs: '16px', md: '18px' }, lineHeight: '22px', color: 'rgba(117, 117, 117, 1)', mb: 6, textAlign: 'center', maxWidth: '733px', px: 2 }}>
          SLEDAA provides professional, educational, and community-focused initiatives that empower members to grow, connect, and contribute throughout their engineering careers.
        </Typography>
        
        <Box 
          ref={carouselRef}
          onScroll={handleScroll}
          sx={{ 
            display: 'flex', 
            flexWrap: { xs: 'nowrap', sm: 'wrap' }, 
            justifyContent: { xs: 'flex-start', sm: 'center' }, 
            gap: '30px', 
            px: { xs: 'calc(50% - 147.5px)', sm: 2 }, 

            maxWidth: '1440px',
            width: '100%',
            overflowX: { xs: 'auto', sm: 'visible' },
            scrollSnapType: { xs: 'x mandatory', sm: 'none' },
            scrollBehavior: 'smooth',
            '&::-webkit-scrollbar': { display: 'none' },
            scrollbarWidth: 'none',
            WebkitOverflowScrolling: 'touch',
            pb: 2
          }}
        >
          <InfoCard 
            icon={tokenTrustIcon}
            title="Professional & Educational Development"
            description="Organize skill-building programs, provide career guidance and opportunities, and promote knowledge sharing and mentorship among members."
          />
          <InfoCard 
            icon={tokenTrustIcon}
            title="Welfare & Support"
            description="Provide welfare assistance during times of need and support newly migrated members in settling into Australian society."
          />
          <InfoCard 
            icon={tokenTrustIcon}
            title="Employment & Career Support"
            description="Share job opportunities and career-related information while facilitating networking with professionals and industry partners."
          />
          <InfoCard 
            icon={tokenTrustIcon}
            title="Social & Cultural Engagement"
            description="Organize social and cultural events to promote Sri Lankan heritage and foster unity, friendship, and mutual respect among members."
          />
        </Box>

        {/* Pagination Dots (Mobile Only) */}
        <Box sx={{ display: { xs: 'flex', sm: 'none' }, justifyContent: 'center', gap: '8px', mt: 1, mb: 1 }}>
          {[0, 1, 2, 3].map((index) => (
            <Box
              key={index}
              onClick={() => {
                if (carouselRef.current) {
                  carouselRef.current.scrollTo({ left: index * 325, behavior: 'smooth' });
                  setActiveCard(index);
                }
              }}
              sx={{
                width: activeCard === index ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                backgroundColor: activeCard === index ? 'rgba(0, 28, 166, 1)' : 'rgba(221, 221, 221, 1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Our Legacy Section */}
      <Box sx={{ width: '100%', backgroundColor: '#fff', pt: { xs: '0px', md: '0px',lg:'0px' }, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '16px', lineHeight: '22px', color: 'rgba(0, 28, 166, 1)', mb: 1, textAlign: 'center' }}>
          Our Legacy
        </Typography>
        <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: { xs: '22px', md: '25px' }, lineHeight: '30px', color: 'rgba(0, 0, 0, 1)', mb: 2, textAlign: 'center' }}>
          Meet Our Past Leaders
        </Typography>
        <Typography sx={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: { xs: '16px', md: '18px' }, lineHeight: '22px', color: 'rgba(117, 117, 117, 1)', mb: 6, textAlign: 'center', maxWidth: '774px', px: 2 }}>
          We respectfully acknowledge the leadership and service of our past presidents, whose dedication has shaped and strengthened SLEDAA over the years.
        </Typography>

        {/* Leaders Grid */}
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mb: { xs: '60px', md: '100px' } }}>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            flexWrap: 'wrap', 
            justifyContent: 'center',
            alignItems: { xs: 'flex-start', md: 'center' },
            gap: { xs: '15px', md: '40px', lg: '80px' }, 
            px: 2,
            maxWidth: '1200px'
          }}>
          {/* Column 1 */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {['Rohana Karunarathna (2013)', 'Sunil Weerasooriya (2014)', 'Vinitius Perera (2015)', 'Marcellus Fernando (2016)', 'J. C. K. Senevirathne (2017)'].map((leader) => (
              <Box key={leader} sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <Box sx={{ width: '20px', height: '20px', minWidth: '20px', backgroundColor: 'rgba(0, 28, 166, 1)', borderRadius: '5px' }} />
                <Typography sx={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: { xs: '16px', md: '18px' }, color: 'rgba(0, 0, 0, 1)' }}>
                  {leader}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Column 2 */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {['Ranjith Gunawardena (2018)', 'Ranjan Perera (2019)', 'Ivan Fernando (2020)', 'Ajith Rajapaksa (2021)', 'Gajaba Silva (2022)'].map((leader) => (
              <Box key={leader} sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <Box sx={{ width: '20px', height: '20px', minWidth: '20px', backgroundColor: 'rgba(0, 28, 166, 1)', borderRadius: '5px' }} />
                <Typography sx={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: { xs: '16px', md: '18px' }, color: 'rgba(0, 0, 0, 1)' }}>
                  {leader}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Column 3 */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {['Rohan Wimalasuriya (2023)', 'Sumith Vidanagamage (2024)', 'Chandana Basnayake (2025)', 'Thilina Wanasinghe (2026)'].map((leader) => (
              <Box key={leader} sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <Box sx={{ width: '20px', height: '20px', minWidth: '20px', backgroundColor: 'rgba(0, 28, 166, 1)', borderRadius: '5px' }} />
                <Typography sx={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: { xs: '16px', md: '18px' }, color: 'rgba(0, 0, 0, 1)' }}>
                  {leader}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

        {/* Above Footer Image */}
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <img src={aboutUsAboveFooterImg} alt="SLEDAA Community Silhouette" style={{ width: '100%', height: 'auto', display: 'block' }} />
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default AboutUs;
