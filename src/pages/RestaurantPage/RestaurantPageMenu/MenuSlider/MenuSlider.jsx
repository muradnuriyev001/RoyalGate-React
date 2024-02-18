import menuDb from "../MenuDB.json";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "./MenuSlider.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default ({ activeKey, setActiveKey }) => {
  const menuKeys = Object.keys(menuDb);

  const handleMenuClick = (e) => {
    setActiveKey(e);
  };

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
      {menuKeys.map((menuKey, key) => (
        <SwiperSlide
          className={`${menuKey === activeKey && "active-key"} swiper-slide`}
          onClick={() => handleMenuClick(menuKey)}
          key={key}
        >
          {menuKey}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
