import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { counts } from "../utils/data";

const CountSection = () => {
  return (
    <Box
      sx={{
        background: "#0f1925",
        py: { xs: 6, md: 8 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: 4, md: 0 },
          }}
        >
          {counts.map((stat, index) => (
            <Box sx={{ textAlign: "center", flex: 1, px: { md: 4 } }}>
              <Typography
                variant="h3"
                sx={{
                  color: "#fff",
                  fontWeight: 700,
                  fontFamily: "Racostane",
                  fontSize: { xs: "2rem", md: "2.5rem" },
                  mb: 1,
                }}
              >
                {stat.value}
              </Typography>
              <Typography
                sx={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "0.95rem",
                  maxWidth: 220,
                  mx: "auto",
                }}
              >
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default CountSection;
