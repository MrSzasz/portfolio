// =========================  LIBRARIES  ========================= //

import { Carousel } from "react-bootstrap";


const CarouselWorksItem = ({ src, name, text, children }) => {


    // ----------  RETURN  ---------- //

    return (
    <>
      <img className="d-block w-100 h-100" src={src} alt={name + " slide"} />
      <Carousel.Caption>
        <h3>= {name} =</h3>
        <p>"{text}"</p>
        <div className="buttonWorksContainer">{children}</div>
      </Carousel.Caption>
    </>
  );
};

export default CarouselWorksItem;
