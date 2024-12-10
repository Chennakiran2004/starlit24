import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App";
import "./index.css";

import { Contact } from "./components/Contact";

import { Routes, Route, BrowserRouter as Router, useLocation } from 'react-router-dom';
import { ActivityDetails } from './components/activities/ActivityDetails';
import Quizzotopia from './components/quizzotopia';
import Freefirerules from './components/freefire1';
import ChessRules from './components/chess1';
import AirHockeyRules from './components/airhocky1';
import TableTennisRules from './components/tabletennis';
import CarromRules from './components/carroms';
import FoosballRules from './components/fooseball';
import GenAIVideoSubmissionForm from "./components/genai";
import WebsiteAboutSection from "./components/website";
import RampWalk from "./components/rampwalk";
import StartingPage from "./components/intro";
import Navbar  from "./components/Navbar";
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    // if (pathname === "/") {
    //   window.location.reload();
    // }
  }, [pathname]);
  return null;
}
function AppOuter() {
  const { pathname } = useLocation();

  return (
    <>

      {pathname !== "/" &&  <Navbar  />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<StartingPage/>} />
        <Route path="/Home" element={<App  />} />
        <Route path="/activity/IndoorGames" element={<ActivityDetails />} />
        <Route path="/activity/Quizzotopia" element={<Quizzotopia />} />
        <Route path="/activity/FreeFire" element={<Freefirerules />} />
        <Route path="/activity/ChessChess" element={<ChessRules />} />
        <Route path="/activity/AirHockey" element={<AirHockeyRules />} />
        <Route path="/activity/TableTennies" element={<TableTennisRules />} />
        <Route path="/activity/Carroms" element={<CarromRules />} />
        <Route path="/activity/Rampwalk" element={<RampWalk />} />
        <Route path="/activity/FooseBall" element={<FoosballRules />} />
        <Route path="/activity/Genai" element={<GenAIVideoSubmissionForm />} />
        <Route path="/activity/Website" element={<WebsiteAboutSection />} />
      </Routes>
      {pathname !== "/" && <Contact />}
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <AppOuter />
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
