// =========================  STYLES  ========================= //

import MainButton from "../MainButton/MainButton";
import "./MinWorkCard.scss";

const MinWorkCard = ({ classCard, name, text, linkDeploy, linkRepo }) => {
  // ----------  RETURN  ---------- //

  return (
    <div className="workCard">
      <div className={"workCardBg " + classCard}>
        <div className="workCardContent">
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

export default MinWorkCard;
