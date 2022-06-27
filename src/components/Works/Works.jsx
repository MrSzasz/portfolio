import "./Works.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Works = () => {
  return (
    <section className="secWorks" id="secWorks">
      <Splide
        options={{
          rewind: true,
          easing: "cubic-bezier(0.65, 0, 0.35, 1)",
          autoplay: true,
          interval: 4000,
          pauseOnHover: true,
          pagination: false,
        }}
      >
        <SplideSlide>
          <div className="sliderCard cardIDKHOW">
            <div className="sliderInfo infoIDKHOW">
              <h4> = IDKHOW Band = </h4>
              <p>
                "En esta página encontraras toda la información relacionada con la
                banda IDKHOW, desde su historia, noticias, su discografía completa
                y el tour actualizado."
              </p>
            </div>
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
        </SplideSlide>
        <SplideSlide>
          <div className="sliderCard cardMMR">
            <div className="sliderInfo infoMMR">
              <h4> = MMRecruiter = </h4>
              <p>
                "MM Talent Search People es una consultora internacional de
                selección de personal y recursos humanos nacida en 2021 con el
                objetivo de encontrar talento y convertirlo en oportunidad.."
              </p>
            </div>
            <div className="buttonWorksContainer">
              <button className="cssbuttons-io-button">
                {" "}
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
                {" "}
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
        </SplideSlide>
        <SplideSlide>
          <div className="sliderCard cardNM">
            <div className="sliderInfo infoNM">
              <h4> = Shax's Pouch = </h4>
              <p>
                "En Shax's Pouch nos encargamos de crear, recolectar y vender
                diferentes artículos místicos, los cuales tienen una carga
                energética particular, depende de ti elegir si seras el que la
                reciba o si quieres entregársela a alguien mas..."
              </p>
            </div>
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
        </SplideSlide>
        <SplideSlide>
          <div className="sliderCard cardMF">
            <div className="sliderInfo infoMF">
              <h4> = Moon Farm = </h4>
              <p>
                "Moon Farm es una tienda con productos caseros frescos, cultivados
                a mano, con pasión y dedicación unica, proveniente del corazón del
                Pueblo Pelícano. ¿Que esperas para darle un vistazo?"
              </p>
            </div>
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
        </SplideSlide>
      </Splide>
    </section>
  );
};

export default Works;
