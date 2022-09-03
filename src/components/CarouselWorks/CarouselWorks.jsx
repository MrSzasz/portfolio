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
            src="https://i.imgur.com/NTvM8L6.png"
            name="Tend Bond - Freelance (on development)"
            text="E-Commerce developed with ReactJS and Firebase (Spanish)"
          >
            <a
              className="btn-tb"
              href="https://trend-bond-react.netlify.app/"
              target="_blank"
            >
              Visit
            </a>
            <a
              className="btn-tb"
              href="https://github.com/MrSzasz/Trend-Bond-React"
              target="_blank"
            >
              Code
            </a>
          </CarouselWorksItem>
        </Carousel.Item>
        <Carousel.Item>
          <CarouselWorksItem
            src="https://i.imgur.com/tKZhhgL.png"
            name="Full-Stack Roadmap"
            text="This is my repository where I take the notes for my Full-stack roadmap almost every day. (Spanish)"
          >
            <a
              className="btn-notes"
              href="https://github.com/MrSzasz/Notes"
              target="_blank"
            >
              <span>Visit</span>
              <i></i>
            </a>
          </CarouselWorksItem>
        </Carousel.Item>
        <Carousel.Item>
          <CarouselWorksItem
            src="https://i.imgur.com/Cyyp2cZ.png"
            name="IDKHOW Band"
            text="On this page, you'll find all the information related to IDKHOW like their history, news, discography, and tour dates. (Spanish)"
          >
            <a
              className="btn btn-idkhow"
              href="https://mrszasz.github.io/IDKHOWBandLugo/index.html"
              target="_blank"
            >
              Visit
            </a>
            <a
              className="btn btn-idkhow"
              href="https://github.com/MrSzasz/IDKHOWBandLugo"
              target="_blank"
            >
              Code
            </a>
          </CarouselWorksItem>
        </Carousel.Item>
        <Carousel.Item>
          <CarouselWorksItem
            src="https://i.imgur.com/9iBKq9h.png"
            name="MMRecruiter - Freelance"
            text="MM Talent Search People es una consultora internacional de
          selección de personal y recursos humanos nacida en 2021 con el
          objetivo de encontrar talento y convertirlo en oportunidad... (Spanish)"
          >
            <button className="cssbuttons-io-button">
              Visit
              <a href="https://mmrecruiter.netlify.app/" className="icon">
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
              </a>
            </button>
            <button className="cssbuttons-io-button">
              Code
              <a href="https://github.com/MrSzasz/MMRecruiter" className="icon">
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
              </a>
            </button>
          </CarouselWorksItem>
        </Carousel.Item>
        <Carousel.Item>
          <CarouselWorksItem
            src="https://i.imgur.com/WsR7LtZ.png"
            name="Shax's Pouch"
            text="Shax's Pouch is a fake E-commerce with a dark and ominous tone, developed with JavaScript and their libraries. (Spanish)"
          >
            <a
              className="btn-nm"
              href="https://mrszasz.github.io/Night-Market/index.html"
              target="_blank"
            >
              Visit
            </a>
            <a
              className="btn-nm"
              href="https://github.com/MrSzasz/Night-Market"
              target="_blank"
            >
              Code
            </a>
          </CarouselWorksItem>
        </Carousel.Item>
        <Carousel.Item>
          <CarouselWorksItem
            src="https://i.imgur.com/FZ0FA7v.png"
            name="InkuA - Freelance"
            text="Inkua is a non-profit organization that creates learning and innovation opportunities to develop skills. (Spanish)"
          >
            <a
              className="btn-ik"
              href="https://mrszasz.github.io/inkua/"
              target="_blank"
            >
              Visit
            </a>
            <a
              className="btn-ik"
              href="https://github.com/MrSzasz/inkua"
              target="_blank"
            >
              Code
            </a>
          </CarouselWorksItem>
        </Carousel.Item>
        <Carousel.Item>
          <CarouselWorksItem
            src="https://i.imgur.com/jh6AVOy.png"
            name="Moon Farm"
            text="Moon Farm is a fake e-commerce based on the video game called Stardew Valley, developed with ReactJS and Firebase. (Spanish)"
          >
            <a
              className="btn-mf"
              href="https://moon-farm-coder.netlify.app/"
              target="_blank"
            >
              Visit
            </a>
            <a
              className="btn-mf"
              href="https://github.com/MrSzasz/Moon-Farm"
              target="_blank"
            >
              Code
            </a>
          </CarouselWorksItem>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselWorks;
