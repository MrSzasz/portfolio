// =========================  STYLES  ========================= //

import "./Works.scss";

// =========================  LIBRARIES  ========================= //

import { useEffect, useState } from "react";

// =========================  CUSTOM IMPORTS  ========================= //

// ----------  COMPONENTS  ---------- //

import CarouselWorks from "../CarouselWorks/CarouselWorks";
import MinWorks from "../MinWorks/MinWorks";
import ChoiceRadio from "../ChoiceRadio/ChoiceRadio";

const Works = () => {
  const [loading, setLoading] = useState(true);
  const [sWidth, setSWidth] = useState();
  const [workArray, setWorkArray] = useState([]);

  // ----------  GET WIDTH  ---------- //

  useEffect(() => {
    let width = window.screen.width;
    setSWidth(width);
  });

  const fetchData = async () => {
    try {
      let data = await fetch("src/data/work.js");
      let parsedData = await data.json();
      setWorkArray(parsedData);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    // ----------  RETURN  ---------- //

    <section className="secWorks" id="secWorks">
      <h2>Works</h2>
      <ChoiceRadio/>
      {loading ? (
        <h1>Loading</h1>
      ) : sWidth >= 425 ? (
        <CarouselWorks works={workArray} />
      ) : (
        <MinWorks works={workArray} />
      )}
    </section>
  );
};

export default Works;
