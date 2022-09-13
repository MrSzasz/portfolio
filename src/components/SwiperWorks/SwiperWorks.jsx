// =========================  STYLES  ========================= //

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// =========================  LIBRARIES  ========================= //

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper";

// =========================  CUSTOM IMPORTS  ========================= //

// ----------  COMPONENTS  ---------- //

import WorkCardSlider from "../WorkCardSlider/WorkCardSlider";

const SwiperWorks = ({ arrayFromMain }) => {
  return (
    // ----------  RETURN  ---------- //

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
        {arrayFromMain.map((work) => (
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
  );
};

export default SwiperWorks;
