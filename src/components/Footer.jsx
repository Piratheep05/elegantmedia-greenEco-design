import React from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import SpaIcon from '@mui/icons-material/Spa';
import { leftLinks, rightLinks } from '../utils/data';


const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#111c2d', color: '#fff', pt: { xs: 6, md: 8 }, pb: 3 }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            gap: 5,
            mb: 6,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: "Racostane",
                fontSize: { xs: '1.8rem', md: '2.2rem' },
                fontWeight: 400,
                mb: 3,
              }}
            >
              Connect on Social
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {[LinkedInIcon, TwitterIcon, InstagramIcon].map((Icon, i) => (
                <IconButton
                  key={i}
                  sx={{
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    color: '#fff',
                    width: 36,
                    height: 36,
                    '&:hover': { backgroundColor: 'rgba(255,255,255,0.25)' },
                  }}
                >
                  <Icon sx={{ fontSize: 18 }} />
                </IconButton>
              ))}
            </Box>
          </Box>

          <Box>
            {leftLinks.map((link) => (
              <Typography
                key={link}
                component="a"
                href="#"
                sx={{
                  display: 'block',
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  mb: 1.5,
                  borderBottom: '1px solid #3aa457',
                  pb: 1,
                  '&:hover': { color: '#fff' },
                }}
              >
                {link}
              </Typography>
            ))}
          </Box>

          <Box>
            {rightLinks.map((link) => (
              <Typography
                key={link}
                component="a"
                href="#"
                sx={{
                  display: 'block',
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  mb: 1.5,
                  borderBottom: '1px solid #3aa457',
                  pb: 1,
                  '&:hover': { color: '#fff' },
                }}
              >
                {link}
              </Typography>
            ))}
          </Box>

          <Box>
            <Box
              sx={{
                border: '1px solid rgba(255,255,255,0.3)',
                borderRadius: 1,
                px: 2,
                py: 1,
                display: 'inline-block',
                fontSize: '0.85rem',
                color: 'rgba(255,255,255,0.8)',
                cursor: 'pointer',
                '&:hover': { borderColor: 'rgba(255,255,255,0.5)' },
              }}
            >
              English ▾
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            borderTop: '1px solid rgba(255,255,255,0.15)',
            pt: 3,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <SpaIcon sx={{ color: '#4caf50', fontSize: 24 }} />
            <Typography sx={{ fontWeight: 700, fontSize: '1.1rem' }}>GreenEco</Typography>
          </Box>
          <Typography sx={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>
            All rights reserved to GreenEco &nbsp;&nbsp; © 2023
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
