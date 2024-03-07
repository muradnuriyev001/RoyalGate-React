import c from "./SpaPageBanner.module.scss";

import spaImage1 from "../../../assets/img/SpaPics/spa1.jpg";
import spaImage2 from "../../../assets/img/SpaPics/spa2.jpg";
import spaImage3 from "../../../assets/img/SpaPics/spa3.jpg";
import spaImage4 from "../../../assets/img/SpaPics/spa4.jpg";
import spaImage5 from "../../../assets/img/SpaPics/spa5.jpg";
import spaImage6 from "../../../assets/img/SpaPics/spa6.jpg";
//Swiper Library Components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
//Swiper Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SpaPageBanner = () => {
  return (
    <div className={c.spaBanner}>
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
          <img src={spaImage1} alt="" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={spaImage2} alt="" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={spaImage3} alt="" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={spaImage4} alt="" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={spaImage5} alt="" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={spaImage6} alt="" loading="lazy" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SpaPageBanner;
