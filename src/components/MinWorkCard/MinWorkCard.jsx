// =========================  STYLES  ========================= //

import "./MinWorkCard.scss";


const MinWorkCard = ({ classCard, name, text, children }) => {


  // ----------  RETURN  ---------- //

  return (
    <div className="workCard">
      <div className={"workCardBg " + classCard}>
        <div className="workCardContent">
          <h3>= {name} =</h3>
          <p>"{text}"</p>
          <div className="buttonWorksContainer">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default MinWorkCard;
