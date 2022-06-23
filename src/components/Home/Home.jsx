import AboutMe from "../AboutMe/AboutMe";
import Contact from "../Contact/Contact";
import NavigateControls from "../NavigateControls/NavigateControls";
import SkillsAndEd from "../SkillsAndEd/SkillsAndEd";
import Welcome from "../Welcome/Welcome";
import Works from "../Works/Works";
import "./Home.scss";

const Home = () => {
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
