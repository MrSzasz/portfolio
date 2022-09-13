// =========================  STYLES  ========================= //

// import "./ChoiceRadio.scss";

const ChoiceRadio = () => {

  return (
    // ----------  RETURN  ---------- //
    <div className="radioContainer">
      <div className="option">
        <input type="radio" id="all" name="worksRadio" value="all" defaultChecked />
        <label htmlFor="all">All</label>
      </div>
      <div className="option">
        <input
          type="radio"
          id="work"
          name="worksRadio"
          value="work"
        />
        <label htmlFor="work">Professional</label>
      </div>
      <div className="option">
        <input type="radio" id="personal" name="worksRadio" value="personal" />
        <label htmlFor="personal">Personal</label>
      </div>
      {/* <div className="option">
        <input type="radio" id="labs" name="worksRadio" value="labs" />
        <label htmlFor="labs">Labs</label>
      </div> */}
    </div>
  );
};

export default ChoiceRadio;
