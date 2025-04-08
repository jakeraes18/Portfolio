import React from "react";
import NavBar from "./components/NavBar";
import SectionInfo from "./components/sectionInfo";
import Experience from "./components/Experience";
import AnimatedTooltipGallery from "./components/AnimatedTooltipGallery"

function App() {
  return (
    <div>
      <NavBar />
      <SectionInfo />
      <Experience />
      <AnimatedTooltipGallery />
    </div>
  );
}

export default App;