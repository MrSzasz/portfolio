// =========================  STYLES  ========================= //

import "./SkillsAndEd.scss";

// =========================  LIBRARIES  ========================= //

import { BsCode } from "react-icons/bs";
import SkillsBlock from "../SkillsBlock/SkillsBlock";
import SkillBar from "../SkillBar/SkillBar";

// =========================  CUSTOM IMPORTS  ========================= //

// ----------  COMPONENTS  ---------- //

const SkillsAndEd = () => {
  // ----------  RETURN  ---------- //

  return (
    <section className="secSkills" id="secSkills">
      <div className="infoSkills">
        <h2>
          <BsCode /> React Front-end Developer 
        </h2>
        <p>
        Front-end Developer based on ReactJS, HTML, and CSS with their frameworks and Firebase as database.
        </p>
      </div>
      <div className="skillsLevel">
        <SkillsBlock>
          <SkillBar name="HTML" value="80" />
          <SkillBar name="CSS" value="80" />
          <SkillBar name="SASS" value="70" />
        </SkillsBlock>
        <SkillsBlock>
          <SkillBar name="BOOTSTRAP" value="80" />
          <SkillBar name="TAILWIND" value="75" />
          <SkillBar name="JAVASCRIPT" value="75" />
        </SkillsBlock>
        <SkillsBlock>
          <SkillBar name="REACTJS" value="75" />
          <SkillBar name="GIT" value="70" />
          <SkillBar name="JQUERY" value="75" />
        </SkillsBlock>
        <SkillsBlock>
          <SkillBar name="TYPESCRIPT" value="55" />
          <SkillBar name="FIREBASE" value="55" />
          <SkillBar name="NODEJS" value="40" />
        </SkillsBlock>
        <SkillsBlock>
          <SkillBar name="MONGO" value="25" />
        </SkillsBlock>
      </div>
    </section>
  );
};

export default SkillsAndEd;
