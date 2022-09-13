// =========================  STYLES  ========================= //

import "./Works.scss";

// =========================  LIBRARIES  ========================= //

import { useEffect, useState } from "react";
import $ from "jquery";

// =========================  CUSTOM IMPORTS  ========================= //

// ----------  COMPONENTS  ---------- //

import Loading from "../Loading/Loading";
import SwiperWorks from "../SwiperWorks/SwiperWorks";
import ChoiceRadio from "../ChoiceRadio/ChoiceRadio";

const Works = () => {
  const [loading, setLoading] = useState(true);
  const [workArray, setWorkArray] = useState([]);
  const [arrayFilter, setArrayFilter] = useState("all");

  const fetchData = async () => {
    try {
      let data = await fetch("src/data/work.js");
      let parsedData = await data.json();
      let filteredArray;
      arrayFilter !== "all"
        ? ((filteredArray = parsedData.filter(
            (work) => work.label === arrayFilter
          )))
        : ((filteredArray = parsedData));
      setWorkArray(filteredArray);
      $(".contenedorSwiper").fadeIn()
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  const filterArrayFunction = () => {
    $("input[type=radio][name=worksRadio]").on("change", () => {
      setArrayFilter($("input[type=radio][name=worksRadio]:checked").val());
    });
    $(".contenedorSwiper").fadeOut(1)
  };

  useEffect(() => {
    fetchData();
    filterArrayFunction();
  }, [arrayFilter]);

  return (
    // ----------  RETURN  ---------- //

    <section className="secWorks" id="secWorks">
      <h2>Works</h2>
      <ChoiceRadio />
      {loading ? <Loading /> : <SwiperWorks arrayFromMain={workArray} />}
    </section>
  );
};

export default Works;
