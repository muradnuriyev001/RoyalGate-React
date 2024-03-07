import c from "./HomePageOurServices.module.scss";
import HomePageServiceCard from "./HomePageServiceCard/HomePageServiceCard";

import { GiSchoolBag } from "react-icons/gi";
import { FaParking } from "react-icons/fa";
import { BiSolidBed } from "react-icons/bi";
import { FaSwimmingPool } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { GiMeal } from "react-icons/gi";

const HomePageOurServices = () => {
  return (
    <div className={c.hPServices}>
      <div className={c.hPServicesText}>
        <span>OUR SERVICES</span>
        <span>Hotel Facilities</span>
      </div>

      <div className={c.hPServicesCards}>
        <HomePageServiceCard
          serviceIcon={<GiSchoolBag />}
          serviceName="Pick Up & Drop"
          serviceInfo="We’ll pick up from airport while you comfy on your ride mus entue habitant."
        />
        <HomePageServiceCard
          serviceIcon={<FaParking />}
          serviceName="Parking Space"
          serviceInfo="Convenient parking spots, ensuring peace of mind and easy access."
        />
        <HomePageServiceCard
          serviceIcon={<BiSolidBed />}
          serviceName="Room Service"
          serviceInfo="Delightful meals delivered to your room, enhancing your stay comfort."
        />
        <HomePageServiceCard
          serviceIcon={<FaSwimmingPool />}
          serviceName="Swimming Pool"
          serviceInfo="Tranquil oasis for relaxation, offering a refreshing escape during stays."
        />
        <HomePageServiceCard
          serviceIcon={<FaWifi />}
          serviceName="Fiber Internet"
          serviceInfo="Seamless connectivity with high-speed fiber internet, ensuring rapid browsing."
        />
        <HomePageServiceCard
          serviceIcon={<GiMeal />}
          serviceName="Breakfast"
          serviceInfo="Gourmet delights await at our restaurant, promising unforgettable dining."
        />
      </div>
    </div>
  );
};

export default HomePageOurServices;
