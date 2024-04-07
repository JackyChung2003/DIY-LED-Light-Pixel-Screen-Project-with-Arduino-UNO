// // // // import React, { useRef, useState } from 'react';

// // // // function DrawingPage() {
// // // //   const canvasRef = useRef(null);
// // // //   const [isDrawing, setIsDrawing] = useState(false);

// // // //   const startDrawing = (e) => {
// // // //     setIsDrawing(true);
// // // //     const canvas = canvasRef.current;
// // // //     const ctx = canvas.getContext('2d');
// // // //     const x = e.nativeEvent.offsetX;
// // // //     const y = e.nativeEvent.offsetY;
// // // //     ctx.beginPath();
// // // //     ctx.moveTo(x, y);
// // // //   };

// // // //   const draw = (e) => {
// // // //     if (!isDrawing) return;
// // // //     const canvas = canvasRef.current;
// // // //     const ctx = canvas.getContext('2d');
// // // //     const x = e.nativeEvent.offsetX;
// // // //     const y = e.nativeEvent.offsetY;
// // // //     ctx.lineTo(x, y);
// // // //     ctx.stroke();
// // // //   };

// // // //   const stopDrawing = () => {
// // // //     setIsDrawing(false);
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <h2>Drawing Page</h2>
// // // //       <canvas
// // // //         ref={canvasRef}
// // // //         width={800} // Set width and height as needed
// // // //         height={600}
// // // //         onMouseDown={startDrawing}
// // // //         onMouseMove={draw}
// // // //         onMouseUp={stopDrawing}
// // // //         onMouseOut={stopDrawing}
// // // //         style={{ border: '1px solid black' }}
// // // //       ></canvas>
// // // //       {/* Add navigation buttons and export button as needed */}
// // // //     </div>
// // // //   );
// // // // }

// // // // export default DrawingPage;

// // // // // import React, { useState, useRef } from 'react';
// // // // // // import '../styles/editor.scss';
// // // // // import { CirclePicker } from 'react-color';
// // // // // import DrawingPanel from './DrawingPanel';

// // // // // export default function DrawingPage() {
// // // // //   const [panelWidth, setPanelWidth] = useState(16);
// // // // //   const [panelHeight, setPanelHeight] = useState(16);
// // // // //   const [hideOptions, setHideOptions] = useState(false);
// // // // //   const [hideDrawingPanel, setHideDrawingPanel] = useState(true);
// // // // //   const [buttonText, setButtonText] = useState('start drawing');
// // // // //   const [selectedColor, setSelectedColor] = useState('#f44336');
// // // // //   const [brushSize, setBrushSize] = useState(1);
// // // // //   const [history, setHistory] = useState([]);
// // // // //   const [redoStack, setRedoStack] = useState([]);
// // // // //   const drawingPanelRef = useRef(null);

// // // // //   function initializeDrawingPanel() {
// // // // //     setHideOptions(!hideOptions);
// // // // //     setHideDrawingPanel(!hideDrawingPanel);

// // // // //     setButtonText(buttonText === 'start drawing' ? 'reset' : 'start drawing');
// // // // //   }

// // // // //   function changeColor(color) {
// // // // //     setSelectedColor(color.hex);
// // // // //   }

// // // // //   function handleBrushSizeChange(size) {
// // // // //     setBrushSize(size);
// // // // //   }

// // // // //   function handleDrawAction(x, y, color) {
// // // // //     const newHistory = [...history, { x, y, color }];
// // // // //     setHistory(newHistory);
// // // // //     setRedoStack([]);
// // // // //   }

// // // // //   function undoAction() {
// // // // //     if (history.length === 0) return;
// // // // //     const lastAction = history[history.length - 1];
// // // // //     setRedoStack([...redoStack, lastAction]);
// // // // //     setHistory(history.slice(0, -1));
// // // // //   }

// // // // //   function redoAction() {
// // // // //     if (redoStack.length === 0) return;
// // // // //     const lastUndoAction = redoStack[redoStack.length - 1];
// // // // //     setHistory([...history, lastUndoAction]);
// // // // //     setRedoStack(redoStack.slice(0, -1));
// // // // //   }

// // // // //   function clearDrawing() {
// // // // //     setHistory([]);
// // // // //     setRedoStack([]);
// // // // //     drawingPanelRef.current.clearCanvas();
// // // // //   }

// // // // //   return (
// // // // //     <div id="editor">
// // // // //       <h1>Pixel Editor</h1>
// // // // //       {hideDrawingPanel && <h2>Enter Panel Dimensions</h2>}
// // // // //       {hideDrawingPanel && (
// // // // //         <div id="options">
// // // // //           <div className="option">
// // // // //             <input
// // // // //               type="number"
// // // // //               className="panelInput"
// // // // //               defaultValue={panelWidth}
// // // // //               onChange={(e) => setPanelWidth(e.target.value)}
// // // // //             />
// // // // //             <span>Width</span>
// // // // //           </div>
// // // // //           <div className="option">
// // // // //             <input
// // // // //               type="number"
// // // // //               className="panelInput"
// // // // //               defaultValue={panelHeight}
// // // // //               onChange={(e) => setPanelHeight(e.target.value)}
// // // // //             />
// // // // //             <span>Height</span>
// // // // //           </div>
// // // // //         </div>
// // // // //       )}

// // // // //       <button onClick={initializeDrawingPanel} className="button">
// // // // //         {buttonText}
// // // // //       </button>

// // // // //       {hideOptions && (
// // // // //         <>
// // // // //           <CirclePicker color={selectedColor} onChangeComplete={changeColor} />
// // // // //           <div>
// // // // //             <span>Brush Size: </span>
// // // // //             <button onClick={() => handleBrushSizeChange(1)}>1</button>
// // // // //             <button onClick={() => handleBrushSizeChange(2)}>2</button>
// // // // //             <button onClick={() => handleBrushSizeChange(3)}>3</button>
// // // // //           </div>
// // // // //           <div>
// // // // //             <button onClick={undoAction}>Undo</button>
// // // // //             <button onClick={redoAction}>Redo</button>
// // // // //             <button onClick={clearDrawing}>Clear Drawing</button>
// // // // //           </div>
// // // // //         </>
// // // // //       )}

// // // // //       {hideOptions && (
// // // // //         <DrawingPanel
// // // // //           ref={drawingPanelRef}
// // // // //           width={panelWidth}
// // // // //           height={panelHeight}
// // // // //           selectedColor={selectedColor}
// // // // //           brushSize={brushSize}
// // // // //           onDrawAction={handleDrawAction}
// // // // //         />
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // }

// // // import React, { useState } from 'react';

// // // function DrawingPage({ length, width }) {
// // //   const [pixels, setPixels] = useState(Array(length * width).fill('#ffffff')); // Initialize all pixels to white
// // //   const [selectedColor, setSelectedColor] = useState('#000000'); // Default color black

// // //   const handlePixelClick = (index) => {
// // //     // Create a new array with the pixel at the given index colored with the selected color
// // //     const updatedPixels = [...pixels];
// // //     updatedPixels[index] = selectedColor;
// // //     setPixels(updatedPixels);
// // //   };

// // //   const handleColorChange = (color) => {
// // //     setSelectedColor(color);
// // //   };

// // //   return (
// // //     <div>
// // //       <h2>Pixel Drawing Panel</h2>
// // //       <div style={{ display: 'grid', gridTemplateColumns: `repeat(${width}, 20px)` }}>
// // //         {pixels.map((color, index) => (
// // //           <div
// // //             key={index}
// // //             style={{
// // //               width: '20px',
// // //               height: '20px',
// // //               backgroundColor: color,
// // //               border: '1px solid #000',
// // //             }}
// // //             onClick={() => handlePixelClick(index)}
// // //           />
// // //         ))}
// // //       </div>
// // //       <h3>Color Options</h3>
// // //       <input type="color" value={selectedColor} onChange={(e) => handleColorChange(e.target.value)} />
// // //     </div>
// // //   );
// // // }

// // // export default DrawingPage;

// // // import React, { useState } from 'react';
// // import React, { useState, useMemo } from 'react';

// // import Grid from './components/Grid';
// // // import ColorPicker from './components/ColorPicker';
// // // import useStyles from './App.styles';
// // import useStyles from './DrawingPage.styles';

// // const offCell = {
// //     on: false,
// //     color: '#000000',
// //   };
  
// // const initialCells = Array.from({ length: 40 }, () => offCell);

// // function DrawingPage({ length, width }) {
// //     const [cells, setCells] = useState(initialCells);
// //     const [currentColor, setCurrentColor] = useState('#56BC58');
// //     const classes = useStyles();
// //     const colorSwatch = useMemo(
// //       () => [
// //         ...new Set(cells.filter((cell) => cell.on).map((cell) => cell.color)),
// //       ],
// //       [cells]
// //     );
// //     const chatString = useMemo(
// //       () => cells.map((cell) => cell.color.slice(1)).join(','),
// //       [cells]
// //     );

// //   return (
// //     <div className={classes.app}>
// //       <ColorPicker currentColor={currentColor} onSetColor={setCurrentColor} />
// //       <div className={classes.colorSwatchContainer}>
// //         {colorSwatch.map((color) => (
// //           <div
// //             key={color}
// //             onClick={() => setCurrentColor(color)}
// //             className={classes.colorSwatch}
// //             style={{ background: color }}
// //           />
// //         ))}
// //       </div>
// //       <Grid cells={cells} setCells={setCells} currentColor={currentColor} />
// //       <p className={classes.chatString}>
// //         {/* eslint-disable-next-line */}
// //         !rgb
// //         {' '}
// //         {chatString}
// //       </p>
// //     </div>
// //   );
// // }

// // export default DrawingPage;

// import React, { useState, useMemo } from 'react';
// import { useParams } from 'react-router-dom';

// // import Grid from './components/Grid';
// import DrawingGrid from './DrawingGrid';
// // import ColorPicker from './components/ColorPicker';
// // Import CSS file instead of useStyles
// import './DrawingPage.css';

// const offCell = {
//   on: false,
//   color: '#000000',
// };
// const initialCells = Array.from({ length: 80 }, () => offCell);

// // function DrawingPage({ length, width }) {
    
// function DrawingPage() {
//   const { length, width } = useParams(); // Get length and width from URL params
//   const [cells, setCells] = useState(initialCells);
//   const [currentColor, setCurrentColor] = useState('#56BC58');
//   // Removed useStyles

//   const colorSwatch = useMemo(
//     () => [
//       ...new Set(cells.filter((cell) => cell.on).map((cell) => cell.color)),
//     ],
//     [cells]
//   );
//   const chatString = useMemo(
//     () => cells.map((cell) => cell.color.slice(1)).join(','),
//     [cells]
//   );

//   return (
//     <div className="app"> {/* Use class name directly */}
//       {/* ColorPicker and color swatches go here */}
//       <DrawingGrid cells={cells} setCells={setCells} currentColor={currentColor} />
//       <p className="chatString"> {/* Use class name directly */}
//         {/* eslint-disable-next-line */}
//         !rgb
//         {' '}
//         {chatString}
//       </p>
//     </div>
//   );
// }

// export default DrawingPage;

import React, { useState, useMemo } from 'react';
// import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import DrawingGrid from './DrawingGrid';
import './DrawingPage.css';

const offCell = {
  on: false,
  color: '#000000',
};

function DrawingPage() {
  const location = useLocation();
  const { length, width } = location.state;


//   const { length, width } = useParams(); // Get length and width from URL params
//   const [cells, setCells] = useState(() => Array.from({ length: parseInt(length) }, () => Array.from({ length: parseInt(width) }, () => offCell)));

//   const [cells, setCells] = useState(() => 
//   Array.from({ length: parseInt(length) }, () => 
//     Array.from({ length: parseInt(width) }, () => offCell)
//   )
//   );

  const [cells, setCells] = useState(() => {
    const totalPixels = parseInt(length) * parseInt(width);
    return Array.from({ length: totalPixels }, () => offCell);
  });
  
  const [currentColor, setCurrentColor] = useState('#56BC58');

  const colorSwatch = useMemo(
    () => [
      ...new Set(cells.flat().filter((cell) => cell.on).map((cell) => cell.color)),
    ],
    [cells]
  );
  const chatString = useMemo(
    () => cells.flat().map((cell) => cell.color.slice(1)).join(','),
    [cells]
  );

  return (
    <div className="app">
      <DrawingGrid width={width} length={length} cells={cells} setCells={setCells} currentColor={currentColor} />
      <p className="chatString">
        {/* eslint-disable-next-line */}
        <h2>Drawing Page</h2>
        <p>Length: {length}</p>
        <p>Width: {width}</p>
        !rgb
        {' '}
        {chatString}
      </p>
    </div>
  );
}

export default DrawingPage;
