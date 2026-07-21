import React, { useState, useEffect } from 'react';
import { Box, Typography, CircularProgress, Dialog, Button, IconButton } from '@mui/material';
import { useParams } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
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

  // States for download validation
  const [downloadAuthOpen, setDownloadAuthOpen] = useState(false);
  const [batch, setBatch] = useState('');
  const [field, setField] = useState('');
  const [pendingDownloadUrl, setPendingDownloadUrl] = useState('');

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
    if (id) {
      fetchAlbum();
      const interval = setInterval(fetchAlbum, 5000);
      return () => clearInterval(interval);
    }
  }, [id]);

  const slides = album && album.images ? album.images.map((img) => ({ src: `http://localhost:8081${img.imageUrl}` })) : [];

  const downloadImage = async (url) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      // Get filename from the URL path
      const fileName = url.substring(url.lastIndexOf("/") + 1) || "download.jpg";
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Failed to download image directly", error);
      // Fallback
      window.open(url, "_blank");
    }
  };

  const handleDownloadAttempt = ({ slide }) => {
    const isAuthorized = localStorage.getItem("gallery_download_authorized");
    if (isAuthorized === "true") {
      downloadImage(slide.src);
    } else {
      setPendingDownloadUrl(slide.src);
      setDownloadAuthOpen(true);
    }
  };

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    if (!batch.trim() || !field.trim()) {
      alert("Please enter both Batch and Field to proceed with the download.");
      return;
    }
    
    // Save to localStorage
    localStorage.setItem("gallery_download_authorized", "true");
    localStorage.setItem("gallery_user_batch", batch.trim());
    localStorage.setItem("gallery_user_field", field.trim());

    setDownloadAuthOpen(false);

    if (pendingDownloadUrl) {
      downloadImage(pendingDownloadUrl);
      setPendingDownloadUrl('');
    }
  };

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
        download={{
          download: handleDownloadAttempt
        }}
      />

      {/* Validation Dialog for Download */}
      <Dialog
        open={downloadAuthOpen}
        onClose={() => setDownloadAuthOpen(false)}
        maxWidth={false}
        disableScrollLock={true}
        sx={{ zIndex: 100000 }} // Ensure it displays above the lightbox
        slotProps={{
          paper: {
            sx: {
              width: '100%',
              maxWidth: '400px',
              backgroundColor: '#F5F5F5',
              borderRadius: '12px',
              padding: '30px 24px',
              position: 'relative',
              margin: '16px',
              boxSizing: 'border-box'
            }
          }
        }}
      >
        <IconButton
          onClick={() => setDownloadAuthOpen(false)}
          sx={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            color: '#000',
            width: '24px',
            height: '24px'
          }}
        >
          <CloseIcon sx={{ fontSize: '18px' }} />
        </IconButton>

        <Typography sx={{ 
          fontFamily: 'Poppins, sans-serif', 
          fontWeight: 700, 
          fontSize: '18px', 
          color: '#000', 
          mb: '20px',
          textTransform: 'uppercase'
        }}>
          Download Authorization
        </Typography>
        
        <Typography sx={{ 
          fontFamily: 'Poppins, sans-serif', 
          fontWeight: 400, 
          fontSize: '13px', 
          color: 'rgba(117, 117, 117, 1)', 
          mb: '24px'
        }}>
          Please provide your Batch and Field to proceed with downloading images from the gallery.
        </Typography>

        <Box component="form" onSubmit={handleAuthSubmit}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px', mb: '24px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
              <Typography sx={{ 
                fontFamily: 'Poppins, sans-serif', 
                fontWeight: 500, 
                fontSize: '13px', 
                color: '#000', 
                mb: '6px' 
              }}>
                Batch
              </Typography>
              <Box
                component="input"
                type="text"
                placeholder="Enter Batch"
                value={batch}
                onChange={(e) => setBatch(e.target.value)}
                sx={{
                  width: '100%',
                  height: '42px',
                  backgroundColor: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  padding: '0 12px',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '14px',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
              <Typography sx={{ 
                fontFamily: 'Poppins, sans-serif', 
                fontWeight: 500, 
                fontSize: '13px', 
                color: '#000', 
                mb: '6px' 
              }}>
                Field
              </Typography>
              <Box
                component="input"
                type="text"
                placeholder="Enter Field"
                value={field}
                onChange={(e) => setField(e.target.value)}
                sx={{
                  width: '100%',
                  height: '42px',
                  backgroundColor: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  padding: '0 12px',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '14px',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </Box>
          </Box>

          <Button
            type="submit"
            fullWidth
            sx={{
              height: '48px',
              backgroundColor: 'rgba(0, 28, 166, 1)',
              color: '#fff',
              borderRadius: '6px',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              fontSize: '14px',
              textTransform: 'uppercase',
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: 'rgba(0, 20, 120, 1)',
                boxShadow: 'none'
              }
            }}
          >
            Save & Download
          </Button>
        </Box>
      </Dialog>

      <Footer />
    </Box>
  );
};

export default SleedaTechno;
