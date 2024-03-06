import c from "./SpaPageBanner.module.scss";

import spaImage1 from "../../../assets/img/SpaPics/spa1.jpg";
import spaImage2 from "../../../assets/img/SpaPics/spa2.jpg";
import spaImage3 from "../../../assets/img/SpaPics/spa3.jpg";
import spaImage4 from "../../../assets/img/SpaPics/spa4.jpg";

//Alternative images for banner
import spaImage5 from "../../../assets/img/SpaPics/spaPageCard1.webp";
import spaImage6 from "../../../assets/img/SpaPics/spaPageCard2.webp";
import spaImage7 from "../../../assets/img/SpaPics/spaPageCard3.webp";
import spaImage8 from "../../../assets/img/SpaPics/spaPageCard4.webp";

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
          <img src={spaImage7} alt="" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={spaImage5} alt="" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={spaImage4} alt="" loading="lazy" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SpaPageBanner;
