// =========================  STYLES  ========================= //

import "./Works.scss";

// =========================  LIBRARIES  ========================= //

import { useEffect, useState } from "react";

// =========================  CUSTOM IMPORTS  ========================= //

// ----------  COMPONENTS  ---------- //

import CarouselWorks from "../CarouselWorks/CarouselWorks";
import MinWorks from "../MinWorks/MinWorks";


const Works = () => {
  const [sWidth, setSWidth] = useState();


  // ----------  GET WIDTH  ---------- //

  useEffect(() => {
    let width = window.screen.width;
    setSWidth(width);
  });

  return (

    // ----------  RETURN  ---------- //

    <section className="secWorks" id="secWorks">
      {sWidth >= 425 ? <CarouselWorks /> : <MinWorks />}
    </section>
  );
};

export default Works;
