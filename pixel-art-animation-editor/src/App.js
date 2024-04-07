// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;

// import React from 'react';
// // import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import InputPage from './component/InputDataPage';
// // import InputPage from './InputPage';
// // import OtherPage from './OtherPage'; 

// function App() {
//   return (
//     <Router>
//       {/* <div>
//         <Switch>
//         </Switch>
//       </div> */}

//       <Routes>
//         <Route path="/" component={InputPage} />
//           {/* <Route path="/other" component={OtherPage} /> */}
//               {/* <Route path="/" element={<HomePage />} />
//               <Route path="/education" element={<EducationPage />} />
//               <Route path="/chatbot" element={<ChatbotPage />} />
//               <Route path="/expenses-tracking" element={<ExpensesTrackingPage />} /> 
//               <Route path="/communities" element={<CommunitiesPage />} /> */}
//         </Routes>
//     </Router>
//   );
// }


// // function App() {
// //   const { userLoggedIn } = useAuth(); // Get the userLoggedIn state from AuthProvider

// //   return (
// //     <Router>
// //       <div className="App">
// //         {/* <Navigation /> */}
// //         {userLoggedIn ? <Navigation /> : null}
// //         <Routes>
// //           {/* Render LoginPage if the user is not logged in */}
// //           {!userLoggedIn && <Route path="/*" element={<Login />} />}
// //           {/* Render other pages only if the user is logged in */}
// //           {userLoggedIn && (
// //             <>
// //               <Route path="/" element={<HomePage />} />
// //               <Route path="/education" element={<EducationPage />} />
// //               <Route path="/chatbot" element={<ChatbotPage />} />
// //               <Route path="/expenses-tracking" element={<ExpensesTrackingPage />} /> 
// //               <Route path="/communities" element={<CommunitiesPage />} />
// //             </>
// //           )}
// //         </Routes>
// //       </div>
// //     </Router>
// //   );
// // }

// export default App;


import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import InputPage from './component/InputDataPage';
import DrawingPage from './component/DrawingPage/DrawingPage';
// Import other pages here

function App() {
  const handleSubmit = (formData, route) => {
    // Handle form submission logic here
    console.log(formData);
    // Navigate to the specified route
    return <Navigate to={route} />;
  };

  // return (
  //   <Router>
  //     <Routes>
  //       <Route path="/" element={<InputPage />} />
  //       <Route path="/DrawingPage" element={<DrawingPage />} />
  //       {/* Add more Route components for other pages */}
  //       {/* <Route path="/other" element={<OtherPage />} /> */}
  //     </Routes>
  //   </Router>
  // );
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InputPage onSubmit={handleSubmit} />} />
        <Route path="/DrawingPage" element={<DrawingPage />} />
        {/* Add more Route components for other pages */}
        {/* <Route path="/other" element={<OtherPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
