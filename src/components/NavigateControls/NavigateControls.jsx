import "./NavigateControls.scss";

const NavigateControls = () => {
  function navTo(nav) {
    document.getElementById(nav).scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="controlContainer">
      <div
        onClick={() => navTo("secWelcome")}
        className="controlPosition sec1"
      >
        INICIO
      </div>
      <div onClick={() => navTo("secAboutMe")} className="controlPosition sec2">SOBRE MI
      </div>
      <div onClick={() => navTo("secSkills")} className="controlPosition sec3">SKILLS
      </div>
      <div onClick={() => navTo("secWorks")} className="controlPosition sec4">PROYECTOS
      </div>
      <div onClick={() => navTo("secContact")} className="controlPosition sec5">CONTACTO
      </div>
    </div>
  );
};

export default NavigateControls;
