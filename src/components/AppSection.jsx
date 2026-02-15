import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import app from '../assets/app.png';

const AppSection = () => {
  return (
   <Box
      sx={{
        background: '#745657',
        py: { xs: 5, md: 1 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <Box sx={{ maxWidth: 380, color: '#fff' }}>
            <Typography
            variant="h4"
              sx={{
                fontFamily: "Racostane",
                fontWeight: 600,  
                mb: 2,
                borderLeft: '3px solid #8bc34a',
              }}
            >
              1 Million trees worldwide
            </Typography>
            <Typography sx={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7 }}>
              Our app has helped plant over 1 million trees worldwide, with the help of our community of
              dedicated tree planters. Join us in our mission to create a greener future by downloading the
              app today!
            </Typography>
          </Box>

          <Box
            sx={{
              flex: '0 0 auto',
              display: 'flex',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                bottom: -30,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 200,
                height: 80,
                borderRadius: '50%',
              }}
            />
            <Box
              component="img"
              src={app}
              alt="GreenEco mobile app"
              sx={{
                height: { xs: 300, md: 500 },
                width: 'auto',
                objectFit: 'contain',
                position: 'relative',
                zIndex: 1,
              }}
            />
          </Box>

          <Box sx={{ maxWidth: 280, color: '#fff' }}>
            <Typography sx={{ fontSize: '0.8rem', color: '#ffffff', lineHeight: 1.7, mb: 3 }}>
              Join the tree planting movement from anywhere, at any time. Download our app and start making a
              difference today!
            </Typography>
            <Box sx={{ display: 'flex', gap: 1.5 }}>
              <Box
                sx={{
                  backgroundColor: '#000',
                  color: '#fff',
                  borderRadius: 1,
                  px: 2,
                  py: 1,
                  fontSize: '0.7rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
              >
                <Typography sx={{ fontSize: '0.55rem' }}>
                  GET IT ON
                </Typography>
                <Typography sx={{ fontSize: '0.85rem', fontWeight: 600 }}>Google Play</Typography>
              </Box>
              <Box
                sx={{
                  backgroundColor: '#000',
                  color: '#fff',
                  borderRadius: 1,
                  px: 2,
                  py: 1,
                  fontSize: '0.7rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
              >
              
                <Typography sx={{ fontSize: '0.55rem', color: '#ffffff' }}>
                  Download on the
                </Typography>
                <Typography sx={{ fontSize: '0.85rem', fontWeight: 600 }}> App Store</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AppSection;
