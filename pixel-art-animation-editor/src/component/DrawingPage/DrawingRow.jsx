import React from "react";
// import "../styles/row.scss";
// import Pixel from "./Pixel";
import DrawingPixel from "./DrawingPixel";

export default function DrawingRow(props) {
  const { width, selectedColor } = props;

  let pixels = [];

  for (let i = 0; i < width; i++) {
    pixels.push(<DrawingPixel key={i} selectedColor={selectedColor} />);
  }

  return <div className="row">{pixels}</div>;
}