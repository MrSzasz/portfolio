// =========================  STYLES  ========================= //

import "./AboutMe.scss";

const AboutMe = () => {
  
  // ----------  RETURN  ---------- //

  return (
    <section className="secAboutMe" id="secAboutMe">
      <div className="imgAboutMe">
        <img src="https://i.imgur.com/3uRASpN.png" alt="photo" />
      </div>
      <div className="infoAboutMe">
        <div className="textInfoAboutMe">
          <h2>SOBRE MI</h2>
          <p>
            ¡Hola! Mi nombre es Tomas y soy Desarrollador Front-End, finalice
            mis estudios en CoderHouse quedando en el Top10 de la cursada,
            gracias a que siempre tuve predisposición para la educación
            autodidacta, buscando mejorar y aprender algo nuevo cada día. Mi
            objetivo laboral es ser parte de una empresa qué me otorgue
            estabilidad, cumpliendo con el desempeño de las actividades
            asignadas en tiempo y forma para poder desarrollar mis habilidades,
            pudiendo así completar objetivos empresariales y personales.
          </p>
        </div>
        <a
          href="./CV-LugoTomas.pdf"
          download
          rel="noopener noreferrer"
          target="_blank"
        >
          <span>Descargar CV</span>
          <i></i>
        </a>
      </div>
    </section>
  );
};

export default AboutMe;
