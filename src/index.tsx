// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { Navbar } from './components/Navbar';
import { Contact } from './components/Contact';

import { Routes, Route, BrowserRouter as Router, useLocation } from 'react-router-dom';
import { ActivityDetails } from './components/activities/ActivityDetails';
import Quizzotopia from './components/quizzotopia';
import Freefirerules from './components/freefire1';
import ChessRules from './components/chess1';
import AirHockeyRules from './components/airhocky1';
import FreeFireRules from './components/freefire1';
import TableTennisRules from './components/tabletennis';
import CarromRules from './components/carroms';
import FoosballRules from './components/fooseball';
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/activity/IndoorGames" element={<ActivityDetails />} />
        <Route path="/activity/Quizzotopia" element={<Quizzotopia />} />
        <Route path="/activity/FreeFire" element={<Freefirerules />} />
        <Route path="/activity/ChessChess" element={<ChessRules/>} />
         <Route path="/activity/AirHockey" element={<AirHockeyRules/>} />
         <Route path="/activity/TableTennies" element={<TableTennisRules/>} />
         <Route path="/activity/Carroms" element={<CarromRules/>} />
         <Route path="/activity/FooseBall" element={<FoosballRules/>} />
        
      </Routes>
      <Contact />
    </Router>
  </StrictMode>
);


// import React from "react";
// import ReactDOM from "react-dom/client";
// import { StrictMode, useEffect } from "react";
// import "./index.css";
// import App from "./App";
// import WrappedApp from "./App";
// import { Navbar } from "./components/Navbar";
// import { Contact } from "./components/Contact";
// import { Routes, Route, BrowserRouter as Router, useLocation } from "react-router-dom";
// import { ActivityDetails } from "./components/activities/ActivityDetails";
// import Quizzotopia from "./components/quizzotopia";
// import reportWebVitals from "./reportWebVitals";

// function ScrollToTop() {
//   const { pathname } = useLocation();
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);
//   return null;
// }

// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );

// root.render(
//   <StrictMode>
//     <Router>
//       <Navbar />
//       <ScrollToTop />
//       <Routes>
        
//         <Route path="/activity/IndoorGames" element={<ActivityDetails />} />
//         <Route path="/activity/Quizzotopia" element={<Quizzotopia />} />
//         <Route  path="/" element={<App />} />
//         {/* Add additional routes here */}
//       </Routes>
//       <Contact />
//     </Router>
//   </StrictMode>
// );

// // Optional: for performance measurement
// reportWebVitals();
