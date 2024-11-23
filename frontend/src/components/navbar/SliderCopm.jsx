import React, { useState } from "react";
import { Slider } from "@mui/material";
import useNavStore from "../../store/navbarStore";

const marks = [
  { value: 0, label: '0' },
  { value: 2, label: '2' },
  { value: 4, label: '4' },
  { value: 6, label: '6' },
  { value: 8, label: '8' },
  { value: 10, label: '10' },
];
const SliderCopm = () => {
  const { setAverageLikes, averageLikes } = useNavStore();

  return (
    <Slider
      size="small"
      sx={{
        "& .MuiSlider-markLabel": {
          color: "gray",
          fontSize: "10px",
          fontWeight: "semi-bold",
        },
      }}
      aria-label="Small"
      valueLabelDisplay="auto"
      marks={marks}
      min={0}
      max={10}
      step={0.1}
      value={averageLikes}
      onChange={(e) => setAverageLikes(e.target.value)}
    />
  );
};

export default SliderCopm;
