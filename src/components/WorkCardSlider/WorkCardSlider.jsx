// =========================  STYLES  ========================= //

import "./WorkCardSlider.scss";

// =========================  CUSTOM IMPORTS  ========================= //

// ----------  COMPONENTS  ---------- //

import MainButton from "../MainButton/MainButton";

const WorkCardSlider = ({ name, text, src, linkDeploy, linkRepo }) => {
  return (
    
    // ----------  RETURN  ---------- //
    
    <div className="cardSliderContainer">
      <img src={src} alt="" />
      <div className="textCard">
        <div className="infoCard">
          <h3>= {name} =</h3>
          <p>"{text}"</p>
          <div className="buttonWorksContainer">
            {name !== "Full-Stack Roadmap" && (
              <MainButton link={linkDeploy} text="Visit" />
            )}
            <MainButton link={linkRepo} text="Code" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCardSlider;
