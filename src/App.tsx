// import React from "react";
// import { Hero } from "./components/Hero";
// import { ActivitiesSection } from "./components/activities/ActivitiesSection";
// import { Highlights } from "./components/Highlights";
// import Leaderboard from "./components/activities/leaderboard";
// import Testimonials from "./components/carousal";
// import { FAQ } from "./components/FAQ";
// import "./App.css";
// import PopperElement from "./components/Popper";
// // import StartingPage from "./components/intro";

// function App() {
//   // const [showStartingPage, setShowStartingPage] = useState(true);

//   // useEffect(() => {
//   //   const timer = setTimeout(() => {
//   //     setShowStartingPage(false);
//   //   }, 5500); // 4 seconds

//   //   return () => clearTimeout(timer); // Cleanup the timer on component unmount
//   // }, []);

//   return (
//     <div className="min-h-screen" style={{ backgroundColor: "white" }}>
//       {/* {showStartingPage && (
//         <div style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 999 }}>
//           <StartingPage />
//         </div>
//       )} */}
//       <Hero />
//       <PopperElement/>
//       <ActivitiesSection />
//       <Highlights />
//       <Testimonials />
//       <Leaderboard />
//       <FAQ />
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import { Hero } from "./components/Hero";
import { ActivitiesSection } from "./components/activities/ActivitiesSection";
import { Highlights } from "./components/Highlights";
import Leaderboard from "./components/activities/leaderboard";
import Testimonials from "./components/carousal";
import { FAQ } from "./components/FAQ";
import "./App.css";
import PopperElement from "./components/Popper";

function App() {
  const [isTimerFinished, setIsTimerFinished] = useState(false);

  // Update this state when the timer reaches zero
  const handleTimerCompletion = () => {
    setIsTimerFinished(true);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "white" }}>
        <Hero handleTimerCompletion={handleTimerCompletion} />
      {/* Pass the handleTimerCompletion prop to CountdownTimer */}
      
      {/* Conditionally render PopperElement based on isTimerFinished state */}
      {isTimerFinished && <PopperElement />}

      <ActivitiesSection />
      <Highlights />
      <Testimonials />
      <Leaderboard />
      <FAQ />
    </div>
  );
}

export default App;
