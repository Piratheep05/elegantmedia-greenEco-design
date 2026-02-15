import React from "react";
import { Box, Typography } from "@mui/material";
import { hashTags } from "../utils/data";

const HashtagSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f7f6f2",
        py: 2,
        overflow: "hidden",
        borderTop: "1px solid #e0dcd4",
        borderBottom: "1px solid #e0dcd4",
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: 5,
        }}
      >
        {hashTags.map((tag, i) => (
          <Typography
            key={i}
            sx={{
              fontWeight: 500,
              fontSize: '0.95rem',
              color: '#1a1a1a',
              whiteSpace: 'nowrap',
            }}
          >
            {tag}
          </Typography>
        ))}
      </Box>
      
     
    </Box>
  );
};

export default HashtagSection;
