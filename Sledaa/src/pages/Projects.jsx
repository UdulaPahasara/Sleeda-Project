import React from 'react';
import { Box, Typography } from '@mui/material';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import projectHeroBg from '../assets/Project/Projecthero.webp';
import AlternatingFeatureCard from '../components/common/AlternatingFeatureCard';
import projectReuseImg from '../assets/Project/ProjectReuseImg.webp';

const projectData = [
  {
    title: "Professional Development Program",
    description: "SLEDAA organizes workshops, technical seminars, and knowledge-sharing sessions that help members enhance their engineering expertise, leadership skills, and professional competencies.",
    image: projectReuseImg
  },
  {
    title: "Student Mentorship Initiative",
    description: "Connecting experienced engineering professionals with students and young graduates, this program provides career guidance, industry insights, and mentoring to support the next generation of engineers.",
    image: projectReuseImg
  },
  {
    title: "Community Outreach & Welfare",
    description: "SLEDAA actively supports community welfare through charitable initiatives, volunteer programs, and fundraising activities that create a positive impact for members and the wider community.",
    image: projectReuseImg
  },
  {
    title: "Industry Networking Platform",
    description: "Through networking events, professional forums, and industry collaborations, SLEDAA helps members build meaningful relationships, exchange knowledge, and explore new career opportunities.",
    image: projectReuseImg
  }
];

const Projects = () => {
  return (
    <Box sx={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      {/* Hero Section */}
      <Box sx={{ 
        width: '100%', 
        height: { xs: '300px', md: '370px' }, 
        backgroundImage: `url(${projectHeroBg})`, 
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
            fontSize: { xs: '40px', md: '40px', lg: '62.41px' }, 
            lineHeight: { xs: '50px', md: '65px', lg: '82.7px' }, 
            color: '#fff', 
            textTransform: 'uppercase', 
            textAlign: 'center',
            mb: 1
          }}>
            PROJECTS
          </Typography>
          <Typography sx={{ 
            fontFamily: 'Poppins', 
            fontWeight: 400, 
            fontSize: { xs: '14px', md: '16px' }, 
            lineHeight: '22px', 
            color: '#fff', 
            textAlign: 'center'
          }}>
            Discover the initiatives and programs through which SLEDAA <br /> empowers engineering professionals, supports the community, and <br /> creates lasting value across Australia.
          </Typography>
        </Box>
      </Box>

      {/* Main Content Area */}
      <Box sx={{ flex: 1, backgroundColor: '#fff', py: { xs: '60px', md: '100px' }, px: 2, display: 'flex', flexDirection: 'column', gap: { xs: '40px', md: '60px' } }}>
        {projectData.map((project, index) => (
          <AlternatingFeatureCard 
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            imagePosition={index % 2 === 0 ? 'left' : 'right'} 
          />
        ))}
      </Box>

      <Footer />
    </Box>
  );
};

export default Projects;
