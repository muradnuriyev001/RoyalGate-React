import c from "./SpaPageServices.module.scss";
import SpaPageServicesCard from "./SpaPageServicesCard/SpaPageServicesCard";

import spaCardImage1 from "../../../assets/img/SpaPics/spacard1.jpg";
import spaCardImage2 from "../../../assets/img/SpaPics/spacard2.jpg";
import spaCardImage3 from "../../../assets/img/SpaPics/spacard3.jpg";

const SpaPageServices = () => {
  return (
    <div className={c.spaServices}>
      <div className={c.spaServicesText}>
        <p>LUXURY HOTEL</p>
        <h1>Spa Center</h1>
      </div>
      <div className={c.spaServicesCards}>
        <SpaPageServicesCard
          heading="Fitness"
          price="49$ / week"
          image={spaCardImage1}
        />
        <SpaPageServicesCard
          heading="Fitness / Pool"
          price="59$ / week"
          image={spaCardImage2}
        />
        <SpaPageServicesCard
          heading="Fitness / Pool / Spa"
          price="99$ / week"
          image={spaCardImage3}
        />
      </div>
    </div>
  );
};

export default SpaPageServices;
