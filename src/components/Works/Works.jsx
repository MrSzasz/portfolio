// // =========================  STYLES  ========================= //

// import "./Works.scss";

// // =========================  LIBRARIES  ========================= //

// import { useEffect, useState } from "react";

// // =========================  CUSTOM IMPORTS  ========================= //

// // ----------  COMPONENTS  ---------- //

// import CarouselWorks from "../CarouselWorks/CarouselWorks";
// import MinWorks from "../MinWorks/MinWorks";
// import ChoiceRadio from "../ChoiceRadio/ChoiceRadio";

// const Works = () => {
//   const [loading, setLoading] = useState(true);
//   const [sWidth, setSWidth] = useState();
//   const [workArray, setWorkArray] = useState([]);

//   // ----------  GET WIDTH  ---------- //

//   useEffect(() => {
//     let width = window.screen.width;
//     setSWidth(width);
//   });

//   const fetchData = async () => {
//     try {
//       let data = await fetch("src/data/work.js");
//       let parsedData = await data.json();
//       setWorkArray(parsedData);
//       setLoading(false);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     // ----------  RETURN  ---------- //

//     <section className="secWorks" id="secWorks">
//       <h2>Works</h2>
//       {/* <ChoiceRadio/> */}
//       {loading ? (
//         <h1>Loading</h1>
//       ) : sWidth >= 425 ? (
//         <CarouselWorks works={workArray} />
//       ) : (
//         <MinWorks works={workArray} />
//       )}
//     </section>
//   );
// };

// export default Works;

// =========================  STYLES  ========================= //

import "./Works.scss";

// =========================  LIBRARIES  ========================= //

import { useEffect, useState } from "react";

// =========================  CUSTOM IMPORTS  ========================= //

// ----------  COMPONENTS  ---------- //

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import WorkCardSlider from "../WorkCardSlider/WorkCardSlider";
import Loading from "../Loading/Loading";

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
        <div className="contenedorSwiper">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{
              delay: 5000,
            }}
            loop={true}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
          >
            {workArray.map((work) => (
              <SwiperSlide>
                <WorkCardSlider
                  name={work.name}
                  text={work.text}
                  src={work.src}
                  linkDeploy={work.linkDeploy}
                  linkRepo={work.linkRepo}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </section>
  );
};

export default Works;
