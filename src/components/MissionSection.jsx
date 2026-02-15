import React from "react";
import { Box, Container, Typography, Divider } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import forestStrip from "../assets/forest-strip.jpg";


const MissionSection = () => {
  return (
    <Box sx={{ backgroundColor: "#f7f6f2", py: { xs: 6, md: 10 } }}>
      <Container maxWidth="xl">
        <Box sx={{ mb: 4 }}>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "0.95rem",
              color: "#121d2c",
              mb: 0.5,
            }}
          >
            What do we do
          </Typography>
          <Typography sx={{ fontSize: "0.85rem", color: "#555" }}>
            Learn About Our Story and Mission
          </Typography>
        </Box>
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <Typography
            sx={{
              fontFamily: "Racostane",
              fontSize: { xs: "2rem", md: "3rem", lg: "3.5rem" },
              fontWeight: 400,
              color: "#121d2c",
              lineHeight: 1.3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 1,
            }}
          >
            We're Growing a
            <Box
              component="img"
              src={forestStrip}
              alt="Forest canopy"
              sx={{
                height: { xs: 40, md: 60 },
                width: { xs: 120, md: 180 },
                objectFit: "cover",
                borderRadius: "30px",
                display: "inline-block",
              }}
            />
            Greener Future
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <Typography
            sx={{
              fontFamily: "Racostane",
              fontSize: { xs: "1.5rem", md: "2.2rem", lg: "2.5rem" },
              fontWeight: 400,
              color: "#121d2c",
              lineHeight: 1.3,
            }}
          >
            Our Mission to Plant Trees and Reduce
          </Typography>
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 3,
            my: 3,
          }}
        >
          <AllInclusiveIcon sx={{ fontSize: 28 }} />
          <Typography
            sx={{
              fontFamily: "Racostane",
              fontSize: { xs: "1.5rem", md: "2.2rem", lg: "2.5rem" },
              fontWeight: 400,
              color: "#121d2c",
            }}
          >
            Carbon Footprint
          </Typography>
          <Box
            component="img"
            src={forestStrip}
            alt="Forest strip"
            sx={{
              height: { xs: 40, md: 55 },
              width: { xs: 140, md: 200 },
              objectFit: "cover",
              borderRadius: "30px",
            }}
          />
          <Box
            component="a"
            href="#"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0.5,
              color: "#2E7D32",
              fontWeight: 600,
              fontSize: "25px",
            }}
          >
            About Us <ArrowForwardIcon sx={{ fontSize: 18 }} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default MissionSection;
