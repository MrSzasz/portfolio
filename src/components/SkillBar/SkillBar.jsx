// =========================  STYLES  ========================= //

import "./SkillBar.scss";
import "bootstrap/dist/css/bootstrap.min.css";


// =========================  LIBRARIES  ========================= //

import ProgressBar from "react-bootstrap/ProgressBar";


// =========================  CUSTOM IMPORTS  ========================= //


const SkillBar = ({ name, value }) => {

    // ----------  RETURN  ---------- //

    return (
    <div className="skillBar">
      <div className="skillInfo">
        <h6>{name}</h6>
        <h6>{value}%</h6>
      </div>
      <ProgressBar now={value} />
    </div>
  );
};

export default SkillBar;
