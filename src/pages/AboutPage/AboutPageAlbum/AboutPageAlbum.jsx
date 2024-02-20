import c from "./AboutPageAlbum.module.scss";

import hotelImage1 from "../../../assets/img/HotelPics/hotel1.jpg";
import hotelImage2 from "../../../assets/img/HotelPics/hotel2.jpg";
import hotelImage3 from "../../../assets/img/HotelPics/hotel3.jpg";
import hotelImage4 from "../../../assets/img/HotelPics/hotel4.jpg";
import hotelImage5 from "../../../assets/img/HotelPics/hotel5.jpg";
import hotelImage6 from "../../../assets/img/HotelPics/hotel6.jpg";
import hotelImage7 from "../../../assets/img/HotelPics/hotel7.jpg";

//Swiper Library Components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
//Swiper Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const AboutPageAlbum = () => {
  return (
    <div className={c.sliderContent}>
      <div className={c.sliderHeader}>
        <h1>Royal Gate's view</h1>
      </div>
      <div className={c.slider}>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          navigation={true}
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            //Responsive of slidesPerView
            1280: {
              slidesPerView: 3,
            },
            600: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
        >
          <SwiperSlide>
            <img src={hotelImage1} alt="" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={hotelImage2} alt="" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={hotelImage3} alt="" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={hotelImage4} alt="" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={hotelImage5} alt="" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={hotelImage6} alt="" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={hotelImage7} alt="" loading="lazy" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default AboutPageAlbum;
