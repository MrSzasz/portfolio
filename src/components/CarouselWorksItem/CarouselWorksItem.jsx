// =========================  LIBRARIES  ========================= //

import { Carousel } from "react-bootstrap";
import MainButton from "../MainButton/MainButton";

const CarouselWorksItem = ({
  src,
  name,
  text,
  linkDeploy,
  linkRepo,
}) => {
  // ----------  RETURN  ---------- //

  return (
    <>
      <img className="d-block w-100 h-100" src={src} alt={name + " slide"} />
      <Carousel.Caption>
        <h3>= {name} =</h3>
        <p>"{text}"</p>
        <div className="buttonWorksContainer">
          {name !== "Full-Stack Roadmap" && (
            <MainButton link={linkDeploy} text="Visit" />
          )}
          <MainButton link={linkRepo} text="Code" />
        </div>
      </Carousel.Caption>
    </>
  );
};

export default CarouselWorksItem;
