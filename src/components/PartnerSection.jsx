import React from 'react';
import { Box,Container, Typography, Avatar } from '@mui/material';
import { partners } from '../utils/data';

const PartnerSection = () => {
  return (
   <Box sx={{ backgroundColor: '#f7f6f2', py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Typography
          sx={{
            fontFamily: "Racostane",
            fontSize: { xs: '1.8rem', md: '3rem' },
            fontWeight: 530,
            color: '#1a1a1a',
            textAlign: 'center',
            mb: 6,
            lineHeight: 1.3,
          }}
        >
          Meet Our Trusted Team of
          <br />
          Supervisory Authorities
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 3,
          }}
        >
          {partners.map((name, i) => (
            <Box
              key={i}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <Avatar
                sx={{
                  width: 172,
                  height: 172,
                  backgroundColor: '#fff',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                }}
              >
               <Box component="img" src={name.image} alt={name} sx={{ width: '100%', height: '100%' }} />
              </Avatar>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default PartnerSection;
