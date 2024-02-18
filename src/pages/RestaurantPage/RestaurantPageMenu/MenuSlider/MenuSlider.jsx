// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "./MenuSlider.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      navigation
      loop={true}
      breakpoints={{
        820: {
          slidesPerView: 4,
        },
        0: {
          slidesPerView: 3,
        },
      }}
    >
      <SwiperSlide>Starters</SwiperSlide>
      <SwiperSlide>Mains</SwiperSlide>
      <SwiperSlide>Salads</SwiperSlide>
      <SwiperSlide>Wine</SwiperSlide>
      <SwiperSlide>Breakfast</SwiperSlide>
      <SwiperSlide>Dessert</SwiperSlide>
    </Swiper>
  );
};
