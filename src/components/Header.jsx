import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Container,
} from "@mui/material";
import SpaIcon from "@mui/icons-material/Spa";
import { navLinks } from "../utils/data";

const Header = () => {
  return (
    <AppBar
      position="stricky"
      elevation={0}
      sx={{
        backgroundColor: "#fcfaf8",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <SpaIcon sx={{ color: "#2E7D32", fontSize: 28 }} />

            <Typography variant="h6" component="div">
              GreenEco
            </Typography>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
            {navLinks.map((link) => (
              <Typography
                key={link}
                component="a"
                sx={{
                  color: "#555",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  cursor: "pointer",
                  "&:hover": { color: "#2E7D32" },
                }}
              >
                {link}
              </Typography>
            ))}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography
              component="a"
              href="#"
              sx={{
                color: "#555",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 500,
                display: { xs: "none", sm: "block" },
                "&:hover": { color: "#2E7D32" },
              }}
            >
              Sign in
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#3aa457",
                borderRadius: "8px",
                textTransform: "none",
                px: 3,
                py: 1.2,
                "&:hover": { backgroundColor: "#256b29" },
              }}
            >
              Make A Difference
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
