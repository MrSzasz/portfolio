import "./NavigateControls.scss"

const NavigateControls = () => {

  function navTo(nav) {
    document.getElementById(nav).scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className='controlContainer'>
      <div onClick={() => navTo("secWelcome")} className="controlPosition">- 01 INICIO</div>
      <div onClick={() => navTo("secAboutMe")} className="controlPosition">- 02 SOBRE MI</div>
      <div onClick={() => navTo("secSkills")} className="controlPosition">- 03 SKILLS</div>
      <div onClick={() => navTo("secWorks")} className="controlPosition">- 04 PROYECTOS</div>
      <div onClick={() => navTo("secContact")} className="controlPosition">- 05 CONTACTO</div>
    </div>
  )
}

export default NavigateControls