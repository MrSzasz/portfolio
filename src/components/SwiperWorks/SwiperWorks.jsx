import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import WorkCardSlider from '../WorkCardSlider/WorkCardSlider';

const SwiperWorks = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
    >
      <SwiperSlide><WorkCardSlider/></SwiperSlide>
      <SwiperSlide><WorkCardSlider/></SwiperSlide>
      <SwiperSlide><WorkCardSlider/></SwiperSlide>
      <SwiperSlide><WorkCardSlider/></SwiperSlide>
      ...
    </Swiper>
  )
}

export default SwiperWorks