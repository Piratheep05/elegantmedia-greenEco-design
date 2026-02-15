import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import Button from "./ui/Button";
import { contributionData } from "../utils/data";

const ContributionSection = () => {
  return (
    <Box
      sx={{
        background: "#c3f0ce",
        py: { xs: 6, md: 10 },
      }}
    >
      <Container>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Racostane",
              fontWeight: 400,
              mb: 1,
            }}
          >
            Join the Green Revolution
          </Typography>
          <Typography variant="h4">
            Choose Your Path to Making a Difference Today!
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {contributionData.map((item) => (
            <Grid item size={{ xs: 12, sm: 6, md: 3, lg: 3 }} key={item.title}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{
                    width: 200,
                    height: 200,
                    borderRadius: "50%",
                    objectFit: "cover",
                    mb: 2,
                  }}
                />
                <Typography
                  variant="h5"
                  sx={{
                    mb: 1,
                    minHeight: 44,
                    textAlign: "center",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.78rem",
                    lineHeight: 1.6,
                    mb: 2,
                    textAlign: "center",
                  }}
                >
                  {item.description}
                </Typography>
                <Button size="small">Contribute Now</Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ContributionSection;
