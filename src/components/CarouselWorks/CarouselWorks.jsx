// =========================  STYLES  ========================= //

import "./CarouselWorks.scss";

// =========================  LIBRARIES  ========================= //

import { Carousel } from "react-bootstrap";

// =========================  CUSTOM IMPORTS  ========================= //

// ----------  COMPONENTS  ---------- //

import CarouselWorksItem from "../CarouselWorksItem/CarouselWorksItem";

const CarouselWorks = ({ works }) => {
  // ----------  RETURN  ---------- //

  return (
    <div className="carouselContainer">
      <Carousel>
        {works.map((work) => (
          <Carousel.Item key={work.id}>
            <CarouselWorksItem
              src={work.src}
              name={work.name}
              text={work.text}
              linkDeploy={work.linkDeploy}
              linkRepo={work.linkRepo}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselWorks;
