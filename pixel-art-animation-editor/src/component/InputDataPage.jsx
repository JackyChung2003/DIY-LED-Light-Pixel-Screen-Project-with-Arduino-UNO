// // // // // import React, { useState } from 'react';

// // // // // function InputPage({ onSubmit }) {
// // // // //   const [length, setLength] = useState('');
// // // // //   const [width, setWidth] = useState('');
// // // // //   const [dataPin, setDataPin] = useState('');
// // // // //   const [orientation, setOrientation] = useState('');

// // // // //   const handleSubmit = (e) => {
// // // // //     e.preventDefault();
// // // // //     onSubmit({ length, width, dataPin, orientation });
// // // // //   };

// // // // //   return (
// // // // //     <div>
// // // // //       <h2>Pixel Art Drawing Animation Editor</h2>
// // // // //       <form onSubmit={handleSubmit}>
// // // // //         <div>
// // // // //           <label>Length:</label>
// // // // //           <input type="text" value={length} onChange={(e) => setLength(e.target.value)} />
// // // // //         </div>
// // // // //         <div>
// // // // //           <label>Width:</label>
// // // // //           <input type="text" value={width} onChange={(e) => setWidth(e.target.value)} />
// // // // //         </div>
// // // // //         <div>
// // // // //           <label>Data Pin:</label>
// // // // //           <input type="text" value={dataPin} onChange={(e) => setDataPin(e.target.value)} />
// // // // //         </div>
// // // // //         <div>
// // // // //           <label>Orientation:</label>
// // // // //           <select value={orientation} onChange={(e) => setOrientation(e.target.value)}>
// // // // //             <option value="horizontal">Horizontal</option>
// // // // //             <option value="vertical">Vertical</option>
// // // // //           </select>
// // // // //         </div>
// // // // //         <button type="submit">Next</button>
// // // // //       </form>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default InputPage;

// // // // import React, { useState } from 'react';
// // // // import { useHistory } from 'react-router-dom';

// // // // function InputPage({ onSubmit }) {
// // // //   const history = useHistory();
// // // //   const [length, setLength] = useState(16);
// // // //   const [width, setWidth] = useState(16);
// // // //   const [dataPin, setDataPin] = useState(6);
// // // //   const [orientation, setOrientation] = useState('');

// // // //   const handleSubmit = (e) => {
// // // //     e.preventDefault();
// // // //     onSubmit({ length, width, dataPin, orientation });
// // // //     // Navigate to another page here
// // // //     history.push('/DrawingPage'); 
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <h2>Pixel Art Drawing Animation Editor</h2>
// // // //       <form onSubmit={handleSubmit}>
// // // //         <div>
// // // //           <label>Length:</label>
// // // //           <input type="number" value={length} onChange={(e) => setLength(parseInt(e.target.value))} />
// // // //         </div>
// // // //         <div>
// // // //           <label>Width:</label>
// // // //           <input type="number" value={width} onChange={(e) => setWidth(parseInt(e.target.value))} />
// // // //         </div>
// // // //         <div>
// // // //           <label>Data Pin:</label>
// // // //           <input type="number" value={dataPin} onChange={(e) => setDataPin(e.target.value)} />
// // // //         </div>
// // // //         <div>
// // // //           <label>Orientation:</label>
// // // //           <select value={orientation} onChange={(e) => setOrientation(e.target.value)}>
// // // //             <option value="horizontal">Horizontal</option>
// // // //             <option value="vertical">Vertical</option>
// // // //           </select>
// // // //         </div>
// // // //         <button type="submit">Next</button>
// // // //       </form>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default InputPage;

// // // import React, { useState } from 'react';
// // // import { useHistory } from 'react-router-dom';

// // // function InputPage({ onSubmit }) {
// // //   const history = useHistory();
// // //   const [length, setLength] = useState(16);
// // //   const [width, setWidth] = useState(16);
// // //   const [dataPin, setDataPin] = useState(6);
// // //   const [orientation, setOrientation] = useState('');

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     onSubmit({ length, width, dataPin, orientation });
// // //     // Navigate to DrawingPage
// // //     history.push('/DrawingPage');
// // //   };

// // //   return (
// // //     <div>
// // //       <h2>Pixel Art Drawing Animation Editor</h2>
// // //       <form onSubmit={handleSubmit}>
// // //         <div>
// // //           <label>Length:</label>
// // //           <input type="number" value={length} onChange={(e) => setLength(parseInt(e.target.value))} />
// // //         </div>
// // //         <div>
// // //           <label>Width:</label>
// // //           <input type="number" value={width} onChange={(e) => setWidth(parseInt(e.target.value))} />
// // //         </div>
// // //         <div>
// // //           <label>Data Pin:</label>
// // //           <input type="number" value={dataPin} onChange={(e) => setDataPin(parseInt(e.target.value))} />
// // //         </div>
// // //         <div>
// // //           <label>Orientation:</label>
// // //           <select value={orientation} onChange={(e) => setOrientation(e.target.value)}>
// // //             <option value="horizontal">Horizontal</option>
// // //             <option value="vertical">Vertical</option>
// // //           </select>
// // //         </div>
// // //         <button type="submit">Next</button>
// // //       </form>
// // //     </div>
// // //   );
// // // }

// // // export default InputPage;

// // import React, { useState } from 'react';

// // function InputPage({ onSubmit }) {
// //   const [length, setLength] = useState(16);
// //   const [width, setWidth] = useState(16);
// //   const [dataPin, setDataPin] = useState(6);
// //   const [orientation, setOrientation] = useState('');

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     onSubmit({ length, width, dataPin, orientation }, '/DrawingPage');
// //   };

// //   return (
// //     <div>
// //       <h2>Pixel Art Drawing Animation Editor</h2>
// //       <form onSubmit={handleSubmit}>
// //         <div>
// //           <label>Length:</label>
// //           <input type="number" value={length} onChange={(e) => setLength(parseInt(e.target.value))} />
// //         </div>
// //         <div>
// //           <label>Width:</label>
// //           <input type="number" value={width} onChange={(e) => setWidth(parseInt(e.target.value))} />
// //         </div>
// //         <div>
// //           <label>Data Pin:</label>
// //           <input type="number" value={dataPin} onChange={(e) => setDataPin(parseInt(e.target.value))} />
// //         </div>
// //         <div>
// //           <label>Orientation:</label>
// //           <select value={orientation} onChange={(e) => setOrientation(e.target.value)}>
// //             <option value="horizontal">Horizontal</option>
// //             <option value="vertical">Vertical</option>
// //           </select>
// //         </div>
// //         <button type="submit">Next</button>
// //       </form>
// //     </div>
// //   );
// // }

// // export default InputPage;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function InputPage() {
//   const navigate = useNavigate();
//   const [length, setLength] = useState(16);
//   const [width, setWidth] = useState(16);
//   const [dataPin, setDataPin] = useState(6);
//   const [orientation, setOrientation] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     // navigate('/DrawingPage'); // Navigate to the DrawingPage
//     navigate(`/DrawingPage?length=${length}&width=${width}`);
//   };

//   return (
//     <div>
//       <h2>Pixel Art Drawing Animation Editor</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Length:</label>
//           <input type="number" value={length} onChange={(e) => setLength(parseInt(e.target.value))} />
//         </div>
//         <div>
//           <label>Width:</label>
//           <input type="number" value={width} onChange={(e) => setWidth(parseInt(e.target.value))} />
//         </div>
//         <div>
//           <label>Data Pin:</label>
//           <input type="number" value={dataPin} onChange={(e) => setDataPin(parseInt(e.target.value))} />
//         </div>
//         <div>
//           <label>Orientation:</label>
//           <select value={orientation} onChange={(e) => setOrientation(e.target.value)}>
//             <option value="horizontal">Horizontal</option>
//             <option value="vertical">Vertical</option>
//           </select>
//         </div>
//         <button type="submit">Next</button>
//       </form>
//     </div>
//   );
// }

// export default InputPage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function InputPage() {
  const navigate = useNavigate();
  const [length, setLength] = useState(16);
  const [width, setWidth] = useState(16);
  const [dataPin, setDataPin] = useState(6);
  const [orientation, setOrientation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // navigate(`/DrawingPage/${length}/${width}`); // Navigate to the DrawingPage with length and width as URL params
    navigate('/DrawingPage', { state: { length, width } }); // Navigate to the DrawingPage with length and width as state
  };

  return (
    <div>
      <h2>Pixel Art Drawing Animation Editor</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Length:</label>
          <input type="number" value={length} onChange={(e) => setLength(parseInt(e.target.value))} />
        </div>
        <div>
          <label>Width:</label>
          <input type="number" value={width} onChange={(e) => setWidth(parseInt(e.target.value))} />
        </div>
        <div>
          <label>Data Pin:</label>
          <input type="number" value={dataPin} onChange={(e) => setDataPin(parseInt(e.target.value))} />
        </div>
        <div>
          <label>Orientation:</label>
          <select value={orientation} onChange={(e) => setOrientation(e.target.value)}>
            <option value="horizontal">Horizontal</option>
            <option value="vertical">Vertical</option>
          </select>
        </div>
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default InputPage;
