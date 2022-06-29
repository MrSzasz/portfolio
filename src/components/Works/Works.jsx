import "./Works.scss";
import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

const Works = () => {
  const [sWidth, setSWidth] = useState();


  useEffect(() => {
    
  let width = window.screen.width;
    setSWidth(width);

  })
  

  return (
    <section className="secWorks" id="secWorks">
      {sWidth >= 425 ? (
        <div className="carouselContainer">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 h-100"
                src="https://i.imgur.com/Cyyp2cZ.png"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>= IDKHOW Band =</h3>
                <p>
                  "En esta página encontraras toda la información relacionada
                  con la banda IDKHOW, desde su historia, noticias, su
                  discografía completa y el tour actualizado."
                </p>
                <div className="buttonWorksContainer">
                  <a
                    className="btn btn-idkhow"
                    href="https://mrszasz.github.io/IDKHOWBandLugo/index.html"
                    target="_blank"
                  >
                    Visitar
                  </a>
                  <a
                    className="btn btn-idkhow"
                    href="https://github.com/MrSzasz/IDKHOWBandLugo"
                    target="_blank"
                  >
                    Ver código
                  </a>
                </div>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100 h-100"
                src="https://i.imgur.com/9iBKq9h.png"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>= MMRecruiter =</h3>
                <p>
                  "MM Talent Search People es una consultora internacional de
                  selección de personal y recursos humanos nacida en 2021 con el
                  objetivo de encontrar talento y convertirlo en oportunidad..."
                </p>
                <div className="buttonWorksContainer">
                  <button className="cssbuttons-io-button">
                    Visitar
                    <div className="icon">
                      <svg
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                          d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                  <button className="cssbuttons-io-button">
                    Ver código
                    <div className="icon">
                      <svg
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="https://github.com/MrSzasz/MMRecruiter"
                      >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                          d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </div>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.imgur.com/WsR7LtZ.png"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>= Shax's Pouch =</h3>
                <p>
                  "En Shax's Pouch nos encargamos de crear, recolectar y vender
                  diferentes artículos místicos, los cuales tienen una carga
                  energética particular, depende de ti elegir si seras el que la
                  reciba o si quieres entregársela a alguien mas..."
                </p>
                <div className="buttonWorksContainer">
                  <a
                    className="btn-nm"
                    href="https://mrszasz.github.io/Night-Market/index.html"
                    target="_blank"
                  >
                    Visitar
                  </a>
                  <a
                    className="btn-nm"
                    href="https://github.com/MrSzasz/Night-Market"
                    target="_blank"
                  >
                    Ver codigo
                  </a>
                </div>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.imgur.com/jh6AVOy.png"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>= Moon Farm =</h3>
                <p>
                  "Moon Farm es una tienda con productos caseros frescos,
                  cultivados a mano, con pasión y dedicación unica, proveniente
                  del corazón del Pueblo Pelícano. ¿Que esperas para darle un
                  vistazo?"
                </p>
                <div className="buttonWorksContainer">
                  <a
                    className="btn-mf"
                    href="https://moon-farm-coder.netlify.app/"
                    target="_blank"
                  >
                    Visitar
                  </a>
                  <a
                    className="btn-mf"
                    href="https://github.com/MrSzasz/Moon-Farm"
                    target="_blank"
                  >
                    Ver código
                  </a>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      ) : (

























        <div className="minWorkContainer">
          <div className="workCard">
            <div className="workCardBg workCardIDKHOW">
              <div className="workCardContent">
                <h3>= IDKHOW Band =</h3>
                <p>
                  "En esta página encontraras toda la información relacionada con
                  la banda IDKHOW, desde su historia, noticias, su discografía
                  completa y el tour actualizado."
                </p>
                <div className="buttonWorksContainer">
                  <a
                    className="btn btn-idkhow"
                    href="https://mrszasz.github.io/IDKHOWBandLugo/index.html"
                    target="_blank"
                  >
                    Visitar
                  </a>
                  <a
                    className="btn btn-idkhow"
                    href="https://github.com/MrSzasz/IDKHOWBandLugo"
                    target="_blank"
                  >
                    Ver código
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="workCard">
            <div className="workCardBg workCardMMR">
              <div className="workCardContent">
                <h3>= MMRecruiter =</h3>
                <p>
                  "MM Talent Search People es una consultora internacional de
                  selección de personal y recursos humanos nacida en 2021 con el
                  objetivo de encontrar talento y convertirlo en oportunidad..."
                </p>
                <div className="buttonWorksContainer">
                  <button className="cssbuttons-io-button">
                    Visitar
                    <div className="icon">
                      <svg
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                          d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                  <button className="cssbuttons-io-button">
                    Ver código
                    <div className="icon">
                      <svg
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="https://github.com/MrSzasz/MMRecruiter"
                      >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                          d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="workCard">
            <div className="grayscaleDiv"></div>

            <div className="workCardBg workCardNM">
              <div className="workCardContent">
                <h3>= Shax's Pouch =</h3>
                <p>
                  "En Shax's Pouch nos encargamos de crear, recolectar y vender
                  diferentes artículos místicos, los cuales tienen una carga
                  energética particular, depende de ti elegir si seras el que la
                  reciba o si quieres entregársela a alguien mas..."
                </p>
                <div className="buttonWorksContainer">
                  <a
                    className="btn-nm"
                    href="https://mrszasz.github.io/Night-Market/index.html"
                    target="_blank"
                  >
                    Visitar
                  </a>
                  <a
                    className="btn-nm"
                    href="https://github.com/MrSzasz/Night-Market"
                    target="_blank"
                  >
                    Ver codigo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="workCard">
            <div className="grayscaleDiv"></div>

            <div className="workCardBg workCardMF">
              <div className="workCardContent">
                <h3>= Moon Farm =</h3>
                <p>
                  "Moon Farm es una tienda con productos caseros frescos,
                  cultivados a mano, con pasión y dedicación unica, proveniente
                  del corazón del Pueblo Pelícano. ¿Que esperas para darle un
                  vistazo?"
                </p>
                <div className="buttonWorksContainer">
                  <a
                    className="btn-mf"
                    href="https://moon-farm-coder.netlify.app/"
                    target="_blank"
                  >
                    Visitar
                  </a>
                  <a
                    className="btn-mf"
                    href="https://github.com/MrSzasz/Moon-Farm"
                    target="_blank"
                  >
                    Ver código
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Works;
