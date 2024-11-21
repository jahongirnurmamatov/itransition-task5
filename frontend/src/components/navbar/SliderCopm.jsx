import React, { useState } from "react";
import { Slider } from "@mui/material";
import useBookStore from "../../store/bookStore";

const marks = [
  { value: 0, label: '0' },
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
  { value: 5, label: '5' },
];
const SliderCopm = () => {
  const { setAverageLikes, averageLikes,lang } = useBookStore();

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
      max={5}
      step={0.1}
      value={averageLikes}
      onChange={(e) => setAverageLikes(e.target.value)}
    />
  );
};

export default SliderCopm;
