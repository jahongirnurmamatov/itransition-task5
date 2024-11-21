import React from "react";
import { Slider } from "@mui/material";


const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 10,
    label: "1",
  },
  {
    value: 20,
    label: "2",
  },
  {
    value: 30,
    label: "3",
  },
  {
    value: 40,
    label: "4",
  },
  {
    value: 50,
    label: "5",
  },
];
function calculateValue(value) {
  return value / 10;
}
const SliderCopm = () => {
  return (
    <Slider
      size="small"
      scale={calculateValue}
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
      max={50}
    />
  );
};

export default SliderCopm;
