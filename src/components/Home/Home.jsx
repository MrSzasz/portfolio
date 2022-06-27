import { useEffect, useState } from "react";
import AboutMe from "../AboutMe/AboutMe";
import Contact from "../Contact/Contact";
import NavigateControls from "../NavigateControls/NavigateControls";
import SkillsAndEd from "../SkillsAndEd/SkillsAndEd";
import Welcome from "../Welcome/Welcome";
import Works from "../Works/Works";
import "./Home.scss";

const Home = () => {
  //   useEffect(() => {

  // const sections = document.querySelectorAll("section");
  // const linkSection = document.querySelectorAll(".controlPosition");
  // window.onscroll = () => {
  //     console.log("hola")
  //     let current;

  //     sections.forEach((section) => {
  //       const sectionTop = section.offsetTop;
  //       if (scrollY >= sectionTop - 60) {
  //         current = section.getAttribute("id");
  //       }

  //     });

  //     linkSection.forEach((link) => {
  //       link.classList.remove("activeSec");
  //       if (link.classList.contains(current)) {
  //         link.classList.add("activeSec");
  //       }
  //     });
  //   };
  //   }, [])

  const handleScroll = (event) => {
    let links = document.querySelectorAll(".controlPosition");
    let position = event.currentTarget.scrollTop;
    if (position <= 624) {
      links.forEach((link) => {
        link.classList.remove("activeSec");
      });
      links[0].classList.add("activeSec");
    } else if (625 <= position && position <= 1249) {
      links.forEach((link) => {
        link.classList.remove("activeSec");
      });
      links[1].classList.add("activeSec");
    } else if (1250 <= position && position <= 1874) {
      links.forEach((link) => {
        link.classList.remove("activeSec");
      });
      links[2].classList.add("activeSec");
    } else if (1875 <= position && position <= 2499) {
      links.forEach((link) => {
        link.classList.remove("activeSec");
      });
      links[3].classList.add("activeSec");
    } else if (2400 <= position) {
      links.forEach((link) => {
        link.classList.remove("activeSec");
      });
      links[4].classList.add("activeSec");
    }
  };

  return (
    <>
      <NavigateControls />
      <div className="bg"></div>
      <div className="homeContainer" onScroll={handleScroll}>
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
