import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
} from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import Button from './ui/Button';
import homePlant from '../assets/home-plant.png';
import treeHand from '../assets/treeHand1.png';

const HomeSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#f6f4f0',
        minHeight: '80vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, py: { xs: 6, md: 8 } }}>
        <Typography
          variant="h1"
          sx={{
            fontFamily: "Racostane",
            fontSize: { xs: '2.5rem', md: '4rem', lg: '6.5rem' },
            fontWeight: 400,
            color: '#121d2c',
            textAlign: 'center',
            lineHeight: 1.15,
            mb: 6,
            maxWidth: '80%',
            mx: 'auto',
          }}
        >
          Planting trees <br /> 
          for better future
         
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 4,
          }}
        >
        
          <Box sx={{ maxWidth: 280 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <LanguageIcon sx={{ color: '#bfb4a8', fontSize: 32 }} />
            </Box>
            <Typography
              sx={{ fontSize: '0.85rem', lineHeight: 1.7, mb: 3 }}
            >
             Did you know that deforestation contributes to over 15% of global greenhouse gas emissions? Join us in our mission to create a healthier planet for all
            </Typography>
            <Button>
              Contribute Now
            </Button>
          </Box>

       
          <Box
            sx={{
              flex: '0 0 auto',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Box
              component="img"
              src={homePlant}
              alt="Green tropical plant in a terracotta pot"
              sx={{
                height: { xs: 280, md: 400, lg: 450 },
                objectFit: 'contain',
                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.15))',
              }}
            />
          </Box>
          <Card
            elevation={3}
            sx={{
              maxWidth: 400,
              borderRadius: 3,
              backgroundColor: '#fff',
            }}
          >
            <Grid container spacing={0} alignItems="center">
              <Grid size={{ xs: 12, sm: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Box
                    component="img"
                    src={treeHand}
                    alt="Hands holding a tree with soil"
                    sx={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                  />
                </Box>
              </Grid>
              <Grid size={{ xs: 12, sm: 8 }}>
                <CardContent sx={{ p: 2 }}>
                  <Typography
                    sx={{
                      fontFamily: "Racostane",
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      color: '#1a1a1a',
                      mb: 1.5,
                    }}
                  >
                    Ready to make a difference?
                  </Typography>
                  <Typography sx={{ fontSize: '0.8rem', mb: 1.5, lineHeight: 1.6 }}>
                  You can choose how to contribute to tree planting today!
                  </Typography>
                  <Box
                    component="a"
                    href="#"
                    sx={{
                    color: '#000',
                    fontWeight: 600,
                    }}
                  >

                    Take Action
                  </Box>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeSection;
