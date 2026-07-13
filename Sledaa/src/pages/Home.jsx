import React, { useRef, useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import homeHeroBg from '../assets/Home/HomeHero.webp';
import statsBg from '../assets/Home/yearOfServicebackground.webp';
import tokenTrustIcon from '../assets/Home/token_trust.webp';
import whySleedaImg from '../assets/Home/WhySleedaMatters.webp';
import flagUsaImg from '../assets/Home/flagUSA.webp';
import ourMemo1 from '../assets/Home/ourmemo1.webp';
import ourMemo2 from '../assets/Home/ourmemo2.webp';
import ourMemo3 from '../assets/Home/ourmemo3.webp';
import middleManImg from '../assets/Home/middleMan.webp';
import aboveFooterImg from '../assets/Home/aboveFooter.webp';

const ScrollFocusReveal = ({ children, sx, delay = '0s' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    if (domRef.current) observer.observe(domRef.current);
    
    return () => { if (domRef.current) observer.unobserve(domRef.current); };
  }, []);

  return (
    <Box 
      ref={domRef} 
      className={isVisible ? 'focus-in-animate' : 'focus-in-hidden'} 
      sx={{ ...sx, animationDelay: delay, animationFillMode: 'both' }}
    >
      {children}
    </Box>
  );
};

const Home = () => {
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
        // Only auto-scroll if the container is actually overflowing (i.e., on mobile/tablet)
        if (scrollWidth > clientWidth) {
          setActiveCard((prev) => {
            const next = (prev + 1) % 4;
            carouselRef.current.scrollTo({ left: next * 325, behavior: 'smooth' });
            return next;
          });
        }
      }
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#fff', position: 'relative' }}>
      
      {/* Override Navbar styles for this specific page without modifying Navbar.jsx */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 10,
          '& .MuiAppBar-root': {
            backgroundColor: 'transparent !important',
            boxShadow: 'none !important',
          },
          '& .MuiButton-root': {
            // Override nav text colors 
            color: '#fff !important',
            whiteSpace: 'nowrap !important', 
            '@media (max-width: 1100px)': {
              fontSize: '13px !important', 
            },
          },
          // We specifically need to keep the "HOME" button blue and "CONTACT US" button styling,
          // so we use a more targeted selector for the nav items.
          '& .MuiBox-root > .MuiButton-root[href="/"]': {
             color: 'rgba(0, 28, 166, 1) !important'
          },
          '& .MuiBox-root > .MuiButton-root[href="/contact-us"]': {
             color: '#fff !important',
             backgroundColor: 'rgba(0, 28, 166, 1) !important'
          },
          // Mobile menu icon
          '& .MuiIconButton-root': {
            color: '#fff !important',
          }
        }}
      >
        <Navbar />
      </Box>

      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: 'auto', md: '762px' },
          minHeight: '762px',
          backgroundImage: `url(${homeHeroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: '150px', md: '190px' },
        }}
      >
        {/* Dark Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            zIndex: 1,
          }}
        />

        {/* Hero Content */}
        <Box sx={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', px: 2 }}>
          
          {/* sleeda.org box */}
          <Box
            sx={{
              width: '170px',
              height: '42px',
              backgroundColor: 'rgba(0, 28, 166, 1)',
              borderRadius: '92.25px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mb: '25px',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontWeight: 600,
                fontSize: '14.76px',
                lineHeight: '23.06px',
                color: 'rgba(255, 255, 255, 1)',
                textTransform: 'capitalize',
              }}
            >
              SLEDAA.ORG
            </Typography>
          </Box>

          {/* Main Title */}
          <Typography
            variant="h1"
            sx={{
              width: { xs: '100%', md: '749px' },
              fontFamily: 'Poppins',
              fontWeight: 800,
              fontSize: { xs: '32px', md: '48px' },
              color: '#fff',
              textAlign: 'center',
              textTransform: 'uppercase',
              mb: '20px',
              lineHeight: 1.2,
            }}
          >
            SRI LANKAN ENGINEERING{' '}
            <Box component="span" sx={{ backgroundColor: 'rgba(0, 28, 166, 1)', padding: '0 10px', display: 'inline-block',borderRadius:'8.88px' }}>
              DIPLOMATES ASSOCIATION 
            </Box>{' '}
           <br /> OF AUSTRALIA
          </Typography>

          {/* Subtitle */}
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: 600,
              fontSize: '16px',
              lineHeight: '22px',
              color: '#fff',
              textAlign: 'center',
              mb: '30px',
            }}
          >
            Established In 1994 – Melbourne
          </Typography>

          {/* Contact Us Button */}
          <Button
            component="a"
            href="/contact-us"
            sx={{
              width: '161px',
              height: '54px',
              border: '1px solid rgba(255, 255, 255, 0.7)',
              borderRadius: '30px',
              color: '#fff',
              fontFamily: 'Poppins',
              fontWeight: 600,
              fontSize: '16px',
              textTransform: 'capitalize',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
              }
            }}
          >
            CONTACT US <span style={{ marginLeft: '10px', fontSize: '20px' }}>→</span>
          </Button>

        </Box>
      </Box>

      {/* Stats Section */}
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: { xs: '-50px', md: '-92px' }, position: 'relative', zIndex: 3 }}>
        <Box
          sx={{
            width: '1240px',
            maxWidth: '95%',
            minHeight: '184.81px',
            backgroundImage: `url(${statsBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '30.97px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            backgroundColor: '#fff',
            py: { xs: 4, md: 0 }
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-around', width: '701px', maxWidth: '100%', flexWrap: 'wrap', gap: { xs: 4, md: 0 },pb:1 }}>
            
            <Box sx={{ textAlign: 'center' }}>
              <Typography sx={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '51.62px', color: 'rgba(0, 28, 166, 1)', lineHeight: '51.62px' }}>
                30 +
              </Typography>
              <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '20.65px', color: '#000', lineHeight: '30.97px', mt: 1 }}>
                Years of Service
              </Typography>
            </Box>

            <Box sx={{ textAlign: 'center' }}>
              <Typography sx={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '51.62px', color: 'rgba(0, 28, 166, 1)', lineHeight: '51.62px' }}>
                100 +
              </Typography>
              <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '20.65px', color: '#000', lineHeight: '30.97px', mt: 1 }}>
                Active Members
              </Typography>
            </Box>

            <Box sx={{ textAlign: 'center' }}>
              <Typography sx={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '51.62px', color: 'rgba(0, 28, 166, 1)', lineHeight: '51.62px' }}>
                50 +
              </Typography>
              <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '20.65px', color: '#000', lineHeight: '30.97px', mt: 1 }}>
                Workshops & Events
              </Typography>
            </Box>

          </Box>
        </Box>
      </Box>

      {/* Our Core Objectives Section */}
      <Box sx={{ width: '100%', pt: '40px', pb: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#fff' }}>
        
        {/* Section Titles */}
        <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '16px', lineHeight: '22px', color: 'rgba(0, 28, 166, 1)', textAlign: 'center', mb: 1 }}>
          Our Core Objectives
        </Typography>

        <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: { xs: '20px', md: '25px' }, lineHeight: '30px', color: '#000', textAlign: 'center', mb: 2, px: 2 }}>
          Empowering Engineering Professionals Across Australia
        </Typography>

        <Typography sx={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '16px', lineHeight: '20px', color: 'rgba(117, 117, 117, 1)', textAlign: 'center', maxWidth: '835px', px: 2, mb: '80px' }}>
          SLEDAA is dedicated to supporting Sri Lankan engineering diplomates through professional growth, career development, community welfare, and cultural engagement. Together, we build a stronger network that empowers members to succeed and contribute to society.
        </Typography>

        {/* Cards Grid */}
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
            '&::-webkit-scrollbar': { display: 'none' }, // hide scrollbar for clean look
            scrollbarWidth: 'none',
            WebkitOverflowScrolling: 'touch',
            pb: 2
          }}
        >
          
          {/* Card 1 */}
          <Box sx={{ flexShrink: 0, scrollSnapAlign: 'center', width: '295px', height: 'auto', minHeight: '359px', backgroundColor: 'rgba(243, 243, 243, 1)', borderRadius: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', pt: '39px', px: '20px', pb: '20px', textAlign: 'center' }}>
            <Box sx={{ width: '56.69px', height: '56.69px', backgroundColor: 'rgba(221, 221, 221, 1)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', mb: '30px' }}>
              <img src={tokenTrustIcon} alt="Skill Development" style={{ width: '24px', height: '24px' }} />
            </Box>
            <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '18px', lineHeight: '18.29px', color: 'rgba(0, 0, 0, 1)', mb: '15px' }}>
              Skill Development
            </Typography>
            <Typography sx={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '16px', lineHeight: '20px', color: 'rgba(117, 117, 117, 1)' }}>
              Enhance your technical expertise and leadership capabilities through professional workshops, seminars, industry presentations, and continuous learning opportunities designed to keep members ahead in an evolving engineering landscape.
            </Typography>
          </Box>

          {/* Card 2 */}
          <Box sx={{ flexShrink: 0, scrollSnapAlign: 'center', width: '295px', height: 'auto', minHeight: '359px', backgroundColor: 'rgba(243, 243, 243, 1)', borderRadius: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', pt: '39px', px: '20px', pb: '20px', textAlign: 'center' }}>
            <Box sx={{ width: '56.69px', height: '56.69px', backgroundColor: 'rgba(221, 221, 221, 1)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', mb: '30px' }}>
              <img src={tokenTrustIcon} alt="Education & Career" style={{ width: '24px', height: '24px' }} />
            </Box>
            <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '18px', lineHeight: '20px', color: 'rgba(0, 0, 0, 1)', mb: '15px' }}>
              Education & Career Guidance
            </Typography>
            <Typography sx={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '16px', lineHeight: '20px', color: 'rgba(117, 117, 117, 1)' }}>
              Access mentoring, career advice, networking opportunities, and guidance for engineering recognition, professional registration, and career advancement across Australia.
            </Typography>
          </Box>

          {/* Card 3 */}
          <Box sx={{ flexShrink: 0, scrollSnapAlign: 'center', width: '295px', height: 'auto', minHeight: '359px', backgroundColor: 'rgba(243, 243, 243, 1)', borderRadius: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', pt: '39px', px: '20px', pb: '20px', textAlign: 'center' }}>
            <Box sx={{ width: '56.69px', height: '56.69px', backgroundColor: 'rgba(221, 221, 221, 1)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', mb: '30px' }}>
              <img src={tokenTrustIcon} alt="Welfare & Support" style={{ width: '24px', height: '24px' }} />
            </Box>
            <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '18px', lineHeight: '18.29px', color: 'rgba(0, 0, 0, 1)', mb: '15px' }}>
              Welfare & Support
            </Typography>
            <Typography sx={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '16px', lineHeight: '20px', color: 'rgba(117, 117, 117, 1)' }}>
              Supporting members and their families through welfare initiatives, community assistance, mentoring, and practical support during important milestones and challenging times.
            </Typography>
          </Box>

          {/* Card 4 */}
          <Box sx={{ flexShrink: 0, scrollSnapAlign: 'center', width: '295px', height: 'auto', minHeight: '359px', backgroundColor: 'rgba(243, 243, 243, 1)', borderRadius: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', pt: '39px', px: '20px', pb: '20px', textAlign: 'center' }}>
            <Box sx={{ width: '56.69px', height: '56.69px', backgroundColor: 'rgba(221, 221, 221, 1)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', mb: '30px' }}>
              <img src={tokenTrustIcon} alt="Social & Cultural" style={{ width: '24px', height: '24px' }} />
            </Box>
            <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '18px', lineHeight: '20px', color: 'rgba(0, 0, 0, 1)', mb: '15px' }}>
              Social & Cultural Activities
            </Typography>
            <Typography sx={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '16px', lineHeight: '20px', color: 'rgba(117, 117, 117, 1)' }}>
              Celebrate Sri Lankan heritage while building lifelong friendships through family gatherings, cultural festivals, sporting events, networking functions, and community celebrations.
            </Typography>
          </Box>

        </Box>

        {/* Pagination Dots (Mobile Only) */}
        <Box sx={{ display: { xs: 'flex', sm: 'none' }, justifyContent: 'center', gap: '8px', mt: 3, mb: 1 }}>
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

      {/* Why SLEDAA Matters Section */}
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#fff', py: { xs: '0px', md: '10px',lg:0 }, px: 5 }}>
        <Box sx={{ maxWidth: '1440px', width: '100%', display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', justifyContent: 'space-between', gap: { xs: '50px', sm: '30px', lg: '50px' } }}>
          
          {/* Text Area (Top on Mobile, Left on Desktop) */}
          <Box sx={{ width: { xs: '100%', sm: '48%', lg: '610px' }, display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', sm: 'flex-start' }, textAlign: { xs: 'center', sm: 'left' }, gap: { xs: '36px', sm: '20px', lg: '36px' } }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', sm: 'flex-start' } }}>
              <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: { xs: '20px', sm: '22px' }, lineHeight: '22px', color: 'rgba(0, 28, 166, 1)', mb: 2, textAlign: { xs: 'center', sm: 'left' } }}>
                Why SLEDAA Matters
              </Typography>
              
              <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: { xs: '28px', sm: '28px', lg: '35px' }, lineHeight: { xs: '34px', sm: '36px', lg: '40px' }, color: 'rgba(0, 0, 0, 1)', textAlign: { xs: 'center', sm: 'left' } }}>
                A Community That Grows <br /> With You
              </Typography>
            </Box>

            <Typography sx={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: { xs: '16px', sm: '14px', lg: '16px' }, lineHeight: { xs: '22px', sm: '20px', lg: '22px' }, color: 'rgba(117, 117, 117, 1)', textAlign: { xs: 'center', sm: 'left' } }}>
              Since 1994, SLEDAA has been bringing together Sri Lankan engineering diplomates across Australia, creating a trusted platform for networking, professional development, mentorship, and lifelong friendships.
              <br /><br />
              Whether you're a new migrant, an experienced professional, or a student beginning your engineering journey, SLEDAA provides valuable resources, guidance, and opportunities to help you succeed while staying connected to your Sri Lankan heritage.
            </Typography>

            <Button
              sx={{
                width: '153px',
                height: '58px',
                backgroundColor: 'rgba(0, 28, 166, 1)',
                borderRadius: '15.85px',
                padding: '12.68px 16.65px 12.68px 14.27px',
                fontFamily: 'Poppins',
                fontWeight: 700,
                fontSize: '16px',
                lineHeight: '19.82px',
                color: '#fff',
                textTransform: 'none',
                boxShadow: 'none',
                '&:hover': {
                  backgroundColor: 'rgba(0, 20, 120, 1)',
                  boxShadow: 'none',
                }
              }}
            >
              Learn More
            </Button>
          </Box>

          {/* Image Area (Bottom on Mobile, Right on Desktop) */}
          <Box sx={{ width: { xs: '100%', sm: '48%', lg: '50%' }, display: 'flex', justifyContent: 'center' }}>
            <img 
              src={whySleedaImg} 
              alt="Why SLEDAA Matters" 
              className="mobile-float-img"
              style={{ width: '100%', maxWidth: '700px', height: 'auto', objectFit: 'contain' }} 
            />
          </Box>

        </Box>
      </Box>

      {/* Our Mission Section */}
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#fff', py: { xs: '50px', md: '50px' }, px: 2 }}>
        <Box sx={{ maxWidth: '1440px', width: '100%', display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'stretch', gap: { xs: '30px', sm: '8px' } }}>
          
          {/* Text Box (Top on Mobile, Left on Desktop) */}
          <Box sx={{ 
            flex: 1, 
            backgroundColor: 'rgba(0, 28, 166, 1)', 
            borderRadius: '12px', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            px: { xs: 3, sm: 4, md: 5, lg: '60px' }, 
            py: { xs: 5, sm: 1, md: 4, lg: '40px' },
            textAlign: { xs: 'center', sm: 'left' },
            alignItems: { xs: 'center', sm: 'flex-start' }
          }}>
            <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: { xs: '20px', sm: '18px', md: '20px', lg: '22px' }, lineHeight: '22px', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 1)', mb: '15px', textAlign: { xs: 'center', sm: 'left' } }}>
              Our Mission
            </Typography>

            <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: { xs: '28px', sm: '24px', md: '28px', lg: '35px' }, lineHeight: { xs: '34px', sm: '30px', md: '34px', lg: '40px' }, textTransform: 'uppercase', color: 'rgba(255, 255, 255, 1)', mb: '20px', textAlign: { xs: 'center', sm: 'left' }, maxWidth: '455px' }}>
              Empowering Engineers Together
            </Typography>

            <Typography sx={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: { xs: '16px', sm: '14px', md: '16px', lg: '18px' }, lineHeight: '22px', color: 'rgba(239, 239, 239, 1)', textAlign: { xs: 'center', sm: 'left' }, maxWidth: '421px' }}>
              We foster an inclusive engineering community by promoting professional excellence, lifelong learning, mentoring, and collaboration while preserving the cultural values that unite Sri Lankan engineering diplomates throughout Australia.
            </Typography>
          </Box>

          {/* Image Area (Bottom on Mobile, Right on Desktop) */}
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img 
              src={flagUsaImg} 
              alt="Our Mission" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </Box>

        </Box>
      </Box>

      {/* Our Memories Section */}
      <Box sx={{ width: '100%', backgroundColor: '#fff', py: { xs: '20px', md: '50px' }, display: 'flex', flexDirection: 'column', alignItems: 'center', px: 2,mt:'-30px' }}>
        <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '16px', lineHeight: '22px', color: 'rgba(0, 28, 166, 1)', mb: 1, textAlign: 'center' }}>
          Our Memories
        </Typography>
        <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: { xs: '25px', md: '25px' }, lineHeight: '30px', color: 'rgba(0, 0, 0, 1)', mb: '40px', textAlign: 'center', maxWidth: '434px' }}>
          Moments That Bring Our Community Together
        </Typography>
        
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'center', gap: '20px', maxWidth: '1440px', width: '100%', px: { xs: 2, lg: '100px' } }}>
          <ScrollFocusReveal sx={{ flex: { sm: 1 }, display: 'flex' }} delay="0s">
            <Box component="img" src={ourMemo1} alt="Memory 1" sx={{ width: '100%', maxWidth: { xs: '400px', sm: '235px',md:'315px', lg: '400px' }, height: 'auto', borderRadius: '20px', objectFit: 'cover', margin: '0 auto' }} />
          </ScrollFocusReveal>
          
          <ScrollFocusReveal sx={{ flex: { sm: 1 }, display: 'flex' }} delay="0.2s">
            <Box component="img" src={ourMemo2} alt="Memory 2" sx={{ width: '100%', maxWidth: { xs: '400px', sm: '235px',md:'315px', lg: '400px' }, height: 'auto', borderRadius: '20px', objectFit: 'cover', margin: '0 auto' }} />
          </ScrollFocusReveal>
          
          <ScrollFocusReveal sx={{ flex: { sm: 1 }, display: 'flex' }} delay="0.4s">
            <Box component="img" src={ourMemo3} alt="Memory 3" sx={{ width: '100%', maxWidth: { xs: '400px', sm: '235px',md:'315px', lg: '400px' }, height: 'auto', borderRadius: '20px', objectFit: 'cover', margin: '0 auto' }} />
          </ScrollFocusReveal>
        </Box>
      </Box>

      {/* Network & Connect Section */}
      <Box sx={{ width: '100%', backgroundColor: '#fff', py: { xs: '60px', md: '0px',lg:'0px' }, display: 'flex', justifyContent: 'center', px: 2 }}>
        <Box sx={{ maxWidth: '1440px', width: '100%', display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', justifyContent: 'space-between', px: { xs: 0, lg: '100px' } }}>
          
          {/* Left Column: Join Our Network */}
          <Box sx={{ width: { xs: '100%', sm: '32%', md: '397px' }, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', mb: { xs: '50px', sm: 0, lg: 4 }, mr: { lg: 10 }}}>
            <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '16px', lineHeight: '16px', color: 'rgba(0, 28, 166, 1)', mb: 2 }}>
              Join Our Network
            </Typography>
            <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: { xs: '20px', sm: '18px', md: '20px' }, lineHeight: '25px', color: 'rgba(0, 0, 0, 1)', mb: 3, maxWidth: '262px' }}>
              Be a part of a strong engineering community
            </Typography>
            <Typography sx={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: { xs: '16px', sm: '14px', md: '16px' }, lineHeight: '22px', color: 'rgba(117, 117, 117, 1)', mb: 4 }}>
              Connect with experienced professionals, expand your network, participate in exclusive events, and contribute to a community dedicated to engineering excellence and mutual success.
            </Typography>
            <Button
              sx={{
                width: '180px',
                height: '45px',
                backgroundColor: 'rgba(0, 28, 166, 1)',
                borderRadius: '8px',
                fontFamily: 'Poppins',
                fontWeight: 700,
                fontSize: '14px',
                mt: '-15px',
                color: '#fff',
                textTransform: 'uppercase',
                boxShadow: 'none',
                '&:hover': { backgroundColor: 'rgba(0, 20, 120, 1)', boxShadow: 'none' }
              }}
            >
              Become a Member
            </Button>
          </Box>

          {/* Center Column: Middle Man Image */}
          <Box sx={{ display: 'flex', justifyContent: 'center', width: { xs: '65%', sm: '31%', md: '365px' }, mb: { xs: '50px', sm: 0 } }}>
            <img src={middleManImg} alt="Engineer" className="mobile-float-img" style={{ width: '100%', maxWidth: '365px', height: 'auto', objectFit: 'contain' }} />
          </Box>

          {/* Right Column: Let's Connect */}
          <Box sx={{ width: { xs: '100%', sm: '32%', md: '397px' }, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', ml: { lg: 6 }, mb: { xs: 4, sm: 0, lg: 6 }}}>
            <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '16px', lineHeight: '16px', color: 'rgba(0, 28, 166, 1)', mb: 2 }}>
              Let's Connect
            </Typography>
            <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: { xs: '20px', sm: '18px', md: '20px' }, lineHeight: '25px', color: 'rgba(0, 0, 0, 1)', mb: 3, maxWidth: '262px' }}>
              Have Questions? We'd Love to Hear From You
            </Typography>
            <Typography sx={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: { xs: '16px', sm: '14px', md: '16px' }, lineHeight: '22px', color: 'rgba(117, 117, 117, 1)', mb: 4 }}>
              Whether you're interested in membership, partnerships, sponsorship opportunities, or upcoming events, our team is here to help. Reach out and become part of the SLEDAA community.
            </Typography>
            <Button
              sx={{
                width: '180px',
                height: '45px',
                backgroundColor: 'rgba(0, 28, 166, 1)',
                borderRadius: '8px',
                fontFamily: 'Poppins',
                fontWeight: 700,
                fontSize: '14px',
                color: '#fff',
                textTransform: 'uppercase',
                boxShadow: 'none',
                '&:hover': { backgroundColor: 'rgba(0, 20, 120, 1)', boxShadow: 'none' }
              }}
            >
              Contact Us
            </Button>
          </Box>

        </Box>
      </Box>

      {/* Above Footer Image Section */}
      <Box sx={{ width: '100%', display: 'flex', mt: { xs: 0, lg: 4 } }}>
        <img 
          src={aboveFooterImg} 
          alt="Above Footer Banner" 
          style={{ width: '100%', height: 'auto', display: 'block' }} 
        />
      </Box>

      <Footer />

    </Box>
  );
};

export default Home;
