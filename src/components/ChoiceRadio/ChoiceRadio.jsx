import $ from "jquery";

// =========================  STYLES  ========================= //

import "./ChoiceRadio.scss";

const ChoiceRadio = () => {
  let value = $("input:radio[name=worksRadio]");
  value.on("change", () => {
    value.attr("checked", () => {
      console.log(value);
    });
  });

  return (
    // ----------  RETURN  ---------- //
    <div className="radioContainer">
      <div className="option">
        <input type="radio" id="all" name="worksRadio" value="all" />
        <label for="all">All</label>
      </div>
      <div className="option">
        <input
          type="radio"
          id="professional"
          name="worksRadio"
          value="professional"
        />
        <label for="professional">Professional</label>
      </div>
      <div className="option">
        <input type="radio" id="personal" name="worksRadio" value="personal" />
        <label for="personal">Personal</label>
      </div>
      <div className="option">
        <input type="radio" id="labs" name="worksRadio" value="labs" />
        <label for="labs">Labs</label>
      </div>
    </div>
  );
};

export default ChoiceRadio;
