// =========================  STYLES  ========================= //

import "./CarouselWorks.scss";

// =========================  LIBRARIES  ========================= //

import { Carousel } from "react-bootstrap";

// =========================  CUSTOM IMPORTS  ========================= //

// ----------  COMPONENTS  ---------- //

import CarouselWorksItem from "../CarouselWorksItem/CarouselWorksItem";


const CarouselWorks = () => {


    // ----------  RETURN  ---------- //

    return (
    <div className="carouselContainer">
      <Carousel>
        <Carousel.Item>
          <CarouselWorksItem
            src="https://i.imgur.com/Cyyp2cZ.png"
            name="IDKHOW Band"
            text="En esta página encontraras toda la información relacionada
            con la banda IDKHOW, desde su historia, noticias, su
            discografía completa y el tour actualizado."
          >
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
          </CarouselWorksItem>
        </Carousel.Item>
        <Carousel.Item>
          <CarouselWorksItem
            src="https://i.imgur.com/9iBKq9h.png"
            name="MMRecruiter"
            text="MM Talent Search People es una consultora internacional de
          selección de personal y recursos humanos nacida en 2021 con el
          objetivo de encontrar talento y convertirlo en oportunidad..."
          >
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
          </CarouselWorksItem>
        </Carousel.Item>
        <Carousel.Item>
          <CarouselWorksItem
            src="https://i.imgur.com/WsR7LtZ.png"
            name="Shax's Pouch"
            text="En Shax's Pouch nos encargamos de crear, recolectar y vender
            diferentes artículos místicos, los cuales tienen una carga
            energética particular, depende de ti elegir si seras el que la
            reciba o si quieres entregársela a alguien mas..."
          >
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
          </CarouselWorksItem>
        </Carousel.Item>
        <Carousel.Item>
          <CarouselWorksItem
            src="https://i.imgur.com/jh6AVOy.png"
            name="Moon Farm"
            text="Moon Farm es una tienda con productos caseros frescos, cultivados
            a mano, con pasión y dedicación unica, proveniente del corazón del
            Pueblo Pelícano. ¿Que esperas para darle un vistazo?"
          >
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
          </CarouselWorksItem>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselWorks;
