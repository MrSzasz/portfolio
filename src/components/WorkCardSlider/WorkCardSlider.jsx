// =========================  STYLES  ========================= //

import "./WorkCardSlider.scss";

// =========================  CUSTOM IMPORTS  ========================= //

// ----------  COMPONENTS  ---------- //

import MainButton from "../MainButton/MainButton";

const WorkCardSlider = ({ name, text, src, linkDeploy, linkRepo, skills }) => {

  return (
    // ----------  RETURN  ---------- //

    <div className="cardSliderContainer">
      <img className="cardSliderBackground" src={src} alt="" />
      <div className="textCard">
        <div className="infoCard">
          <h3>= {name} =</h3>
          <p>"{text}"</p>
          <div className="buttonWorksContainer">
            {linkDeploy && <MainButton link={linkDeploy} text="Visit" />}
            <MainButton link={linkRepo} text="Code" />
          </div>
          <div className="SkillWorksContainer">
            {skills.map((img, i)=>(
              <img
              key={i}
              title={img.title}
              src={img.link}
            />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCardSlider;
