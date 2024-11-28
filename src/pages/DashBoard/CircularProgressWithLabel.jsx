import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

const CircularProgressWithLabel = ({ value, maxPoints }) => {
  return (
    <Box position="relative" display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="50vh"
    bgcolor="#f5f5f5">
      {/* Circular Progress */}
      <CircularProgress
        variant="determinate"
        value={value}
        size={150}   // Size of the circular progress
        thickness={10} // Thickness of the progress line
        sx={{
          color: "#AED581", // Green color for the filled progress
          position: "relative",
          zIndex: 1,
        }}
      />
      {/* Circular background */}
      <CircularProgress
        variant="determinate"
        value={100}
        size={150}   // Size of the background progress
        thickness={10} // Thickness of the background progress
        sx={{
          color: "#E0E0E0", // Grey color for the background
          position: "absolute",
        }}
      />
      {/* Text inside the circle */}
      <Box
        top={10}
        left={10}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h6" component="div" color="textSecondary">
          {`${Math.round(value)} points`} <br />
          of {maxPoints}
        </Typography>
      </Box>
    </Box>
  );
};

export default CircularProgressWithLabel;
