import AboutMe from "../AboutMe/AboutMe";
import NavigateControls from "../NavigateControls/NavigateControls";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <NavigateControls />
      <div className="homeContainer">
        <section className="secWelcome" id="secWelcome">
          <h1 className="welcome">Bienvenido</h1>
        </section>
        <section className="secAboutMe" id="secAboutMe">
          <AboutMe />
        </section>
        <section className="secSkills" id="secSkills">
          <h2 className="welcome">Skills</h2>
        </section>
        <section className="secWorks" id="secWorks">
          <h2 className="welcome">Proyectos</h2>
        </section>
        <section className="secContact" id="secContact">
          <h2 className="welcome">Contacto</h2>
        </section>
      </div>
    </>
  );
};

export default Home;
