import { Box, Container, Typography, Card, CardMedia, CardContent, Grid } from '@mui/material';
import newsForest from '../assets/news-forest.jpg';
import newsTimber from '../assets/news-timber.jpg';
import newsHandsTree from '../assets/treeHand1.png';

const newsCards = [{ image: newsForest }, { image: newsTimber }];

const AppSection = () => {
  return (
    <Box sx={{ backgroundColor: "#f7f6f2", py: { xs: 6, md: 10 } }}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{}}>
              <Typography
                sx={{
                  fontFamily: "Racostane",
                  fontSize: { xs: "2rem", md: "3.5rem" },
                  fontWeight: 400,
                  color: "#1a1a1a",
                  lineHeight: 1.2,
                  textAlign: "center",  
                  mb: 4,
                }}
              >
                Keep up with
                <br />
                Latest News
              </Typography>
              <Box
                component="img"
                src={newsHandsTree}
                alt="Hands holding tree"
                sx={{
                  width: "100%",
                  borderRadius: 3,
                }}
              />
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            <Grid container spacing={4}>
              {newsCards.map((card, i) => (
                <Grid key={i} size={{ xs: 12, sm: 6 }}>
                  <Box>
                    <CardMedia
                      component="img"
                      image={card.image}
                      alt="Climate news"
                      sx={{
                        height: 300,
                        objectFit: "cover",
                        borderRadius: "45%",
                      }}
                    />
                    <CardContent sx={{ px: 2, py: 2 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "Racostane",
                          fontWeight: 600,
                          color: "#1a1a1a",
                          mb: 1.5,
                          textAlign: "center",
                        }}
                      >
                        Introducing Our Newest Climate Neutral Certified Brands
                      </Typography>
                      <Typography
                        sx={{ fontSize: "0.75rem", lineHeight: 1.6, mb: 2 }}
                      >
                        This Earth Week, we're delighted to introduce the newest
                        Climate Neutral Certified brands. Each successfully met
                        the leading Standard of climate action and took
                        immediate steps to 'Invest in Our Planet'.
                      </Typography>
                      <Typography
                        component="a"
                        href="#"
                        sx={{
                          color: "#3aa457",
                          fontSize: "0.9rem",
                          textDecoration: "underline",
                          cursor: "pointer",
                          justifyContent: "center",
                          display: "flex",
                        }}
                      >
                        Learn More
                      </Typography>
                    </CardContent>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AppSection;
