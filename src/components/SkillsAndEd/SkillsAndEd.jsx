// =========================  STYLES  ========================= //

import "./SkillsAndEd.scss";
import "bootstrap/dist/css/bootstrap.min.css";

// =========================  LIBRARIES  ========================= //

import ProgressBar from "react-bootstrap/ProgressBar";
import { BsCode } from "react-icons/bs";

// =========================  CUSTOM IMPORTS  ========================= //

// ----------  COMPONENTS  ---------- //


const SkillsAndEd = () => {

  
  // ----------  RETURN  ---------- //

  return (
    <section className="secSkills" id="secSkills">
      <div className="infoSkills">
        <h2>
          <BsCode /> Front-End
        </h2>
        <p>
          Desarrollo Front-End con base en ReactJS, diseño HTML y CSS puro,
          ademas del uso de sus respectivos frameworks. Uso de JS
        </p>
      </div>
      <div className="skillsLevel">
        <div className="skillsBlock">
          <div className="skillBar">
            <div className="skillInfo">
              <h6>HTML</h6>
              <h6>80%</h6>
            </div>
            <ProgressBar now={80} />
          </div>
          <div className="skillBar">
            <div className="skillInfo">
              <h6>CSS</h6>
              <h6>75%</h6>
            </div>
            <ProgressBar now={75} />
          </div>
          <div className="skillBar">
            <div className="skillInfo">
              <h6>SASS</h6>
              <h6>65%</h6>
            </div>
            <ProgressBar now={65} />
          </div>
        </div>
        <div className="skillsBlock">
          <div className="skillBar">
            <div className="skillInfo">
              <h6>BOOTSTRAP</h6>
              <h6>80%</h6>
            </div>
            <ProgressBar now={80} />
          </div>
          <div className="skillBar">
            <div className="skillInfo">
              <h6>JAVASCRIPT</h6>
              <h6>75%</h6>
            </div>
            <ProgressBar now={75} />
          </div>
          <div className="skillBar">
            <div className="skillInfo">
              <h6>REACTJS</h6>
              <h6>70%</h6>
            </div>
            <ProgressBar now={70} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsAndEd;
