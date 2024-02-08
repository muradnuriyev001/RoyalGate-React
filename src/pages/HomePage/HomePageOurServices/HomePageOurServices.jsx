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
          serviceInfo="Fusce tincidunt nis ace park norttito sit amet space mus entue habitant."
        />
        <HomePageServiceCard
          serviceIcon={<BiSolidBed />}
          serviceName="Room Service"
          serviceInfo="We’ll pick up from airport while you comfy on your ride mus entue habitant."
        />
        <HomePageServiceCard
          serviceIcon={<FaSwimmingPool />}
          serviceName="Swimming Pool"
          serviceInfo="We’ll pick up from airport while you comfy on your ride mus entue habitant."
        />
        <HomePageServiceCard
          serviceIcon={<FaWifi />}
          serviceName="Fibre Internet"
          serviceInfo="We’ll pick up from airport while you comfy on your ride mus entue habitant."
        />
        <HomePageServiceCard
          serviceIcon={<GiMeal />}
          serviceName="Breakfast"
          serviceInfo="We’ll pick up from airport while you comfy on your ride mus entue habitant."
        />
      </div>
    </div>
  );
};

export default HomePageOurServices;
