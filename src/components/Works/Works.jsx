// =========================  STYLES  ========================= //

import "./Works.scss";

// =========================  LIBRARIES  ========================= //

import { useEffect, useState } from "react";
import $ from "jquery";
import { collection, getDocs, getFirestore } from "firebase/firestore";

// =========================  CUSTOM IMPORTS  ========================= //

// ----------  COMPONENTS  ---------- //

import Loading from "../Loading/Loading";
import SwiperWorks from "../SwiperWorks/SwiperWorks";
import ChoiceRadio from "../ChoiceRadio/ChoiceRadio";

const Works = () => {
  const [loading, setLoading] = useState(true);
  const [workArray, setWorkArray] = useState([]);
  const [arrayWithFilter, setArrayWithFilter] = useState([]);
  const [arrayFilter, setArrayFilter] = useState("all");

  // ==========  GET DATA FROM DATABASE  ========== //

  const getData = async () => {
    const db = getFirestore();
    await getDocs(collection(db, "works"))
      .then((res) => setWorkArray(res.docs.map((item) => ({ ...item.data() }))))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  // ==========  FILTER DATA  ========== //

  const filterArray = () => {
    let filteredArray;
    arrayFilter !== "all"
      ? (filteredArray = workArray.filter((work) => work.label === arrayFilter))
      : (filteredArray = workArray);
    setArrayWithFilter(filteredArray);
    $(".swiperContainer").fadeIn();
  };

  // ==========  GET DATA FOR FILTER  ========== //

  const filterArrayFunction = () => {
    $("input[type=radio][name=worksRadio]").on("change", () => {
      setArrayFilter($("input[type=radio][name=worksRadio]:checked").val());
    });
    $(".swiperContainer").fadeOut(1);
  };

  // ==========  fn GET DATA  ========== //

  useEffect(() => {
    getData();
  }, []);

  // ==========  fn FILTERS  ========== //

  useEffect(() => {
    filterArrayFunction();
    filterArray();
  }, [arrayFilter]);

  return (
    // ----------  RETURN  ---------- //

    <section className="secWorks" id="secWorks">
      <h2>Works</h2>
      <ChoiceRadio />
      {loading ? (
        <Loading />
      ) : arrayFilter === "all" ? (
        <SwiperWorks arrayFromMain={workArray} />
      ) : (
        <SwiperWorks arrayFromMain={arrayWithFilter} />
      )}
    </section>
  );
};

export default Works;
