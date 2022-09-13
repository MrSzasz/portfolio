import MainButton from "../MainButton/MainButton";
import "./WorkCardSlider.scss";

const WorkCardSlider = ({ name, text, src, linkDeploy, linkRepo }) => {
  return (
    <div className="cardSliderContainer">
      <img
        src={src}
        alt=""
      />
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
