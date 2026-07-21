import React, { useState, useEffect } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ScrollFocusReveal from '../components/common/ScrollFocusReveal';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Download from "yet-another-react-lightbox/plugins/download";
import Share from "yet-another-react-lightbox/plugins/share";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import galleryHeroBg from '../assets/Gallery/Galleryhero.webp';

const SleedaTechno = () => {
  const { id } = useParams();
  const [album, setAlbum] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const fetchAlbum = async () => {
    try {
      const response = await fetch(`http://localhost:8081/api/albums/${id}`);
      if (response.ok) {
        const data = await response.json();
        setAlbum(data);
      }
    } catch (error) {
      console.error("Error fetching album", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) fetchAlbum();
  }, [id]);

  const slides = album && album.images ? album.images.map((img) => ({ src: `http://localhost:8081${img.imageUrl}` })) : [];

  return (
    <Box sx={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      {/* Hero Section */}
      <Box sx={{ 
        width: '100%', 
        height: { xs: '300px', md: '370px' }, 
        backgroundImage: `url(${galleryHeroBg})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'relative',
        px: 2
      }}>
        <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.7)' }} />
        
        <Box sx={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '800px', pt: { xs: '20px', md: '40px' } }}>
          <Typography sx={{ 
            fontFamily: 'Poppins', 
            fontWeight: 800, 
            fontSize: { xs: '30px', sm: '40px', md: '50px', lg: '62.41px' }, 
            lineHeight: { xs: '40px', sm: '50px', md: '65px', lg: '82.7px' }, 
            color: '#fff', 
            textTransform: 'uppercase', 
            textAlign: 'center',
            mb: 1
          }}>
            Gallery
          </Typography>
          <Typography sx={{ 
            fontFamily: 'Poppins', 
            fontWeight: 400, 
            fontSize: { xs: '14px', md: '16px', lg: '18px' }, 
            lineHeight: '22px', 
            color: '#fff', 
            textAlign: 'center'
          }}>
            Moments that shaped our journey
          </Typography>
        </Box>
      </Box>

      {/* Main Content Area */}
      <Box sx={{ flex: 1, backgroundColor: '#fff', py: { xs: '40px', md: '60px' }, px: 2 }}>
        <Box sx={{ maxWidth: '1260px', margin: '0 auto' }}>
          
          {/* Top Button / Label */}
          <Box sx={{ mb: 4, display: 'flex', justifyContent: 'flex-start' }}>
            <Box sx={{
              backgroundColor: 'rgba(0, 28, 166, 1)',
              borderRadius: '15.85px',
              padding: '12.68px 24px',
              display: 'inline-block'
            }}>
              <Typography sx={{
                fontFamily: 'Poppins',
                fontWeight: 700,
                fontSize: { xs: '16px', md: '20px' },
                color: '#fff'
              }}>
                {album ? album.title : 'Loading...'}
              </Typography>
            </Box>
          </Box>

          {/* Masonry Grid using CSS Columns */}
          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
              <CircularProgress />
            </Box>
          ) : (
            <Box sx={{ 
              columnCount: { xs: 1, sm: 2, md: 3, lg: 4 }, // Automatically responsive masonry!
              columnGap: '16px' 
            }}>
              {album?.images?.map((img, idx) => (
                <ScrollFocusReveal key={img.id || idx}>
                  <Box 
                    onClick={() => setLightboxIndex(idx)}
                    sx={{ 
                      breakInside: 'avoid', // Crucial: prevents image splitting across columns
                      marginBottom: '16px',
                      cursor: 'pointer'
                    }}
                  >
                    <img 
                      src={`http://localhost:8081${img.imageUrl}`} 
                      alt={`${album.title} - ${idx}`} 
                      style={{ 
                        width: '100%', 
                        borderRadius: '16px', 
                        display: 'block' // removes default bottom gap from inline images
                      }} 
                    />
                  </Box>
                </ScrollFocusReveal>
              ))}
              {(!album?.images || album.images.length === 0) && (
                <Typography sx={{ fontFamily: 'Poppins', textAlign: 'center', gridColumn: '1 / -1' }}>
                  No images in this album.
                </Typography>
              )}
            </Box>
          )}
          
        </Box>
      </Box>

      <Lightbox
        index={lightboxIndex}
        slides={slides}
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        plugins={[Fullscreen, Download, Share, Zoom]}
      />

      <Footer />
    </Box>
  );
};

export default SleedaTechno;
