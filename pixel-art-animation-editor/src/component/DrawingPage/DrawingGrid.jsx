// import React from 'react';
// // import './Grid.css';
// import './DrawingGrid.css';

// const offCell = {
//   on: false,
//   color: '#000000',
// };

// const DrawingGrid = ({ width, length, currentColor, cells, setCells }) => {
//   const updateCell = (i) => (e) => {
//     e.preventDefault();
//     if (e.buttons === 1 || e.buttons === 2) {
//       setCells(
//         cells.map((cell, cellIndex) => {
//           if (cellIndex === i) {
//             if (e.buttons === 1) {
//               return {
//                 on: true,
//                 color: currentColor,
//               };
//             }
//             return offCell;
//           }
//           return cell;
//         })
//       );
//     }
//   };

//   return (
//     <div className="grid">
//       {cells.map((cell, i) => (
//         <div
//           key={i}
//           style={{ background: cell.on ? cell.color : '#ffffff' }}
//           className="cell"
//           onMouseOver={updateCell(i)}
//           onMouseDown={updateCell(i)}
//           onContextMenu={(e) => e.preventDefault()}
//         />
//       ))}
//     </div>
//   );
// };

// export default DrawingGrid;


// DrawingGrid.js

import React from 'react';
import './DrawingGrid.css';

const offCell = {
  on: false,
  color: '#000000',
};

const DrawingGrid = ({ width, length, currentColor, cells, setCells }) => {
  const updateCell = (i) => (e) => {
    e.preventDefault();
    if (e.buttons === 1 || e.buttons === 2) {
      setCells(
        cells.map((cell, cellIndex) => {
          if (cellIndex === i) {
            if (e.buttons === 1) {
              return {
                on: true,
                color: currentColor,
              };
            }
            return offCell;
          }
          return cell;
        })
      );
    }
  };

  const gridStyles = {
    '--grid-rows': length, // Set the --grid-rows CSS variable to the length prop
    '--grid-columns': width, // Set the --grid-columns CSS variable to the width prop
  };

  return (
    <div className="grid" style={gridStyles}>
      {cells.map((cell, i) => (
        <div
          key={i}
          style={{ background: cell.on ? cell.color : '#ffffff' }}
          className="cell"
          onMouseOver={updateCell(i)}
          onMouseDown={updateCell(i)}
          onContextMenu={(e) => e.preventDefault()}
        />
      ))}
    </div>
  );
};

export default DrawingGrid;
