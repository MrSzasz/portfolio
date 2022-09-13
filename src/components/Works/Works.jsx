// =========================  STYLES  ========================= //

import "./Works.scss";

// =========================  LIBRARIES  ========================= //

import { useEffect, useState } from "react";

// =========================  CUSTOM IMPORTS  ========================= //

// ----------  COMPONENTS  ---------- //

import Loading from "../Loading/Loading";
import SwiperWorks from "../SwiperWorks/SwiperWorks";

const Works = () => {
  const [loading, setLoading] = useState(true);
  const [workArray, setWorkArray] = useState([]);

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
      {loading ? (
        <Loading />
      ) : (
        <SwiperWorks arrayFromMain={workArray}/>
      )}
    </section>
  );
};

export default Works;
