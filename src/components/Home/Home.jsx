// =========================  STYLES  ========================= //

import "./Home.scss";

// =========================  CUSTOM IMPORTS  ========================= //

// ----------  COMPONENTS  ---------- //

import AboutMe from "../AboutMe/AboutMe";
import Contact from "../Contact/Contact";
import NavigateControls from "../NavigateControls/NavigateControls";
import SkillsAndEd from "../SkillsAndEd/SkillsAndEd";
import Welcome from "../Welcome/Welcome";
import Works from "../Works/Works";


const Home = () => {
  
  // ----------  RETURN  ---------- //

  return (
    <>
      <NavigateControls />
      <div className="homeContainer">
        <Welcome />
        <AboutMe />
        <SkillsAndEd />
        <Works />
        <Contact />
      </div>
    </>
  );
};

export default Home;
