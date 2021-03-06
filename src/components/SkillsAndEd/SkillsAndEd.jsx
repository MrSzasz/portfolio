// =========================  STYLES  ========================= //

import "./SkillsAndEd.scss";

// =========================  LIBRARIES  ========================= //

import { BsCode } from "react-icons/bs";
import { CgDatabase } from "react-icons/cg";
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
          <BsCode /> Desarrollador Front-End 
        </h2>
        <p>
          Desarrollo Front-End con base en ReactJS, diseño HTML y CSS puro,
          ademas del uso de sus respectivos frameworks.<br />
          Manejo de base de datos con Firebase.
        </p>
      </div>
      <div className="skillsLevel">
        <SkillsBlock>
          <SkillBar name="HTML" value="80" />
          <SkillBar name="CSS" value="75" />
          <SkillBar name="SASS" value="65" />
        </SkillsBlock>
        <SkillsBlock>
          <SkillBar name="BOOTSTRAP" value="80" />
          <SkillBar name="JAVASCRIPT" value="75" />
          <SkillBar name="REACTJS" value="75" />
        </SkillsBlock>
        <SkillsBlock>
          <SkillBar name="GIT" value="70" />
          <SkillBar name="JQUERY" value="60" />
          <SkillBar name="TYPESCRIPT" value="55" />
        </SkillsBlock>
        <SkillsBlock>
          <SkillBar name="FIREBASE" value="50" />
          <SkillBar name="NODEJS" value="10" />
        </SkillsBlock>
      </div>
    </section>
  );
};

export default SkillsAndEd;
