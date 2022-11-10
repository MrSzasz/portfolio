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
          href="https://drive.google.com/uc?export=download&id=1k1OTSKl9RPczdqq3toD8pH9EjLO4hCte"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span>Download CV (English)</span>
          <i></i>
        </a>
        <a 
          href="https://drive.google.com/uc?export=download&id=1s6H88mV77UFZ7GiHGMoNxOuaC9N26wqX"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span>Descargar CV (Español)</span>
          <i></i>
        </a>
      </div>
    </section>
  );
};

export default AboutMe;
