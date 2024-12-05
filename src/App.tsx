import React from "react";
// import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ActivitiesSection } from "./components/activities/ActivitiesSection";
import { Highlights } from "./components/Highlights";
import { Contact } from "./components/Contact";
import Leaderboard from "./components/activities/leaderboard";
import Testimonials from "./components/carousal";
import { FAQ } from "./components/FAQ";

// Remove logo import as it's not used in your original implementation
// import logo from './logo.svg';
import "./App.css";

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "white" }}>
      <Hero />
      <ActivitiesSection />
      <Highlights />
      <Testimonials />
      <Leaderboard />
      <FAQ />
    </div>
  );
}

export default App;
