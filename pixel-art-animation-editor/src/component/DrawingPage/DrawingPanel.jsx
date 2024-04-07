import React, { useRef } from "react";
// import "../styles/drawingPanel.scss";
// import DrawingRow from "./Row";
import DrawingRow from "./DrawingRow";
// import { exportComponentAsPNG } from "react-component-export-image";

export default function DrawingPanel(props) {
  const { width, height, selectedColor } = props;

  const panelRef = useRef();

  let rows = [];

  for (let i = 0; i < height; i++) {
    rows.push(<DrawingRow key={i} width={width} selectedColor={selectedColor} />);
  }

  return (
    <div id="drawingPanel">
      <div id="pixels" ref={panelRef}>
        {rows}
      </div>

      <button className="button">
        Export as PNG
      </button>

      {/* <button onClick={() => exportComponentAsPNG(panelRef)} className="button">
        Export as PNG
      </button> */}
    </div>
  );
}