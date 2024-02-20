import c from "./RestaurantPage.module.scss";

import restaurantImage1 from "../../../assets/img/RestaurantPics/rest3.jpg";
import restaurantImage2 from "../../../assets/img/RestaurantPics/rest2.jpg";
import restaurantImage3 from "../../../assets/img/RestaurantPics/rest1.jpg";
import restaurantImage4 from "../../../assets/img/RestaurantPics/rest4.jpg";

//Swiper Library Components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
//Swiper Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const RestaurantPageBanner = () => {
  return (
    <div className={c.restaurantBanner}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 2200,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        slidesPerView={1}
      >
        <SwiperSlide>
          <img src={restaurantImage1} alt="" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={restaurantImage2} alt="" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={restaurantImage3} alt="" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={restaurantImage4} alt="" loading="lazy" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default RestaurantPageBanner;
