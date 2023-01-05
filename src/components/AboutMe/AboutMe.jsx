// =========================  STYLES  ========================= //

import "./AboutMe.scss";

const AboutMe = () => {

// ----------  RETURN  ---------- //

  return (
    <section className="secAboutMe" id="secAboutMe">
      <div className="imgAboutMe">
        <img src="https://imgur.com/U6xhGpE.png" alt="profile photo" />
      </div>
      <div className="infoAboutMe">
        <div className="textInfoAboutMe">
          <h2>ABOUT ME</h2>
          <p>
            Hi! My name is Tomas. I'm a React Front-end Developer from Argentina. I finished my studies being in the TOP 10 of the course, thanks to the fact that I love programming and development, and that I was always inclined towards self-taught education, seeking to learn something new every day.
            Long term I would love to become a Full-stack Developer, based on a MERN stack.
          </p>
        </div>
        <a 
          href="/docs/TomasLeandroLugoCVEng.docx"
          rel="noopener noreferrer"
          target="_blank"
          download="Tomas L. Lugo CV.docx"
        >
          <span>Download CV (English)</span>
          <i></i>
        </a>
        <a 
          href="/docs/TomasLeandroLugoCV.docx"
          rel="noopener noreferrer"
          target="_blank"
          download="Tomas L. Lugo CV.docx"
        >
          <span>Descargar CV (Español)</span>
          <i></i>
        </a>
      </div>
    </section>
  );
};

export default AboutMe;
