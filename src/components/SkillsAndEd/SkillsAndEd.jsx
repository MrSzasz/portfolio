// =========================  STYLES  ========================= //

import "./SkillsAndEd.scss";

// =========================  LIBRARIES  ========================= //

import { BsCode } from "react-icons/bs";
import HexagonSkill from "../HexagonSkill/HexagonSkill";
import { FaDatabase } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiBootstrap,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiGit,
  SiJquery,
  SiTypescript,
  SiFirebase,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiGithub,
  SiRedux,
  SiMarkdown,
  SiNextdotjs,
  SiExpress,
  SiJsonwebtokens,
} from "react-icons/si";

// =========================  CUSTOM IMPORTS  ========================= //

// ----------  COMPONENTS  ---------- //

const SkillsAndEd = () => {
  // ----------  RETURN  ---------- //

  return (
    <section className="secSkills" id="secSkills">
      <div className="infoSkills">
        <h2>
          <BsCode /> React Full-Stack Developer
        </h2>
        <p>
          Front-end Developer based on NextJS with Firebase as Database.
          Back-end Developer based on NodeJs with MongoDB as Database.
        </p>
      </div>
      <div className="skillsLevel">
        <HexagonSkill skillName={"html"}>
          <SiHtml5 color={"#D84924"} className="iconSkill" />
        </HexagonSkill>
        <HexagonSkill skillName={"css"}>
          <SiCss3 color={"#2760E5"} className="iconSkill" />
        </HexagonSkill>
        <HexagonSkill skillName={"sass"}>
          <SiSass color={"#C36192"} className="iconSkill" />
        </HexagonSkill>
        <HexagonSkill skillName={"bootstrap"}>
          <SiBootstrap color={"#7410EC"} className="iconSkill" />
        </HexagonSkill>
        <HexagonSkill skillName={"tailwind"}>
          <SiTailwindcss color={"#35B3EB"} className="iconSkill" />
        </HexagonSkill>
        <HexagonSkill skillName={"javascript"}>
          <SiJavascript color={"#EAD41C"} className="iconSkill" />
        </HexagonSkill>
        <HexagonSkill skillName={"jquery"}>
          <SiJquery color={"#1161A0"} className="iconSkill" />
        </HexagonSkill>
        <HexagonSkill skillName={"reactjs"}>
          <SiReact color={"#5CCFEE"} className="iconSkill" />
        </HexagonSkill>
        <HexagonSkill skillName={"typescript"}>
          <SiTypescript color={"#2E72BC"} className="iconSkill" />
        </HexagonSkill>
        <HexagonSkill skillName={"redux"}>
          <SiRedux color={"#7248B6"} className="iconSkill" />
        </HexagonSkill>
        <HexagonSkill skillName={"nextjs"}>
          <SiNextdotjs color={"#FFFFFF"} className="iconSkill" />
        </HexagonSkill>
        <HexagonSkill skillName={"firebase"}>
          <SiFirebase color={"#F2C129"} className="iconSkill" />
        </HexagonSkill>
        <HexagonSkill skillName={"nodejs"}>
          <SiNodedotjs color={"#7CC327"} className="iconSkill" />
        </HexagonSkill>
        <HexagonSkill skillName={"expressjs"}>
          <SiExpress color={"#FFFFFF"} className="iconSkill" />
        </HexagonSkill>
        <HexagonSkill skillName={"mongodb"}>
          <SiMongodb color={"#0FA14C"} className="iconSkill" />
        </HexagonSkill>
        <HexagonSkill skillName={"mongoose"}>
          <img
            src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongoose/mongoose.png"
            alt="MongooseJS Logo"
            style={{
              height: "4.5em",
              position: "absolute",
              pointerEvents: "none",
            }}
          />
        </HexagonSkill>
        <HexagonSkill skillName={"jwt"}>
          <SiJsonwebtokens color={"#FB015B"} className="iconSkill" />
        </HexagonSkill>
        <HexagonSkill skillName={"sql"}>
          <FaDatabase color={"#1478EE"} className="iconSkill" />
        </HexagonSkill>
        <HexagonSkill skillName={"mysql"}>
          <SiMysql color={"#006F88"} className="iconSkill" />
        </HexagonSkill>
        <HexagonSkill skillName={"markdown"}>
          <SiMarkdown color={"#3f3f3f"} className="iconSkill" />
        </HexagonSkill>
        <HexagonSkill skillName={"git"}>
          <SiGit color={"#E44D30"} className="iconSkill" />
        </HexagonSkill>
        <HexagonSkill skillName={"github"}>
          <SiGithub color={"#F2F2F2"} className="iconSkill" />
        </HexagonSkill>
      </div>
    </section>
  );
};

export default SkillsAndEd;
