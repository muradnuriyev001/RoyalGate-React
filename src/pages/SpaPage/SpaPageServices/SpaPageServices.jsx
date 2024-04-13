import c from "./SpaPageServices.module.scss";
import SpaPageServicesCard from "./SpaPageServicesCard/SpaPageServicesCard";

import spaCardImage1 from "../../../assets/img/SpaPics/spacard1.jpg";
import spaCardImage2 from "../../../assets/img/SpaPics/spacard2.jpg";
import spaCardImage3 from "../../../assets/img/SpaPics/spacard3.jpg";

import { motion } from "framer-motion";
const Animation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 1 },
  }),
};

const SpaPageServices = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: true }}
      className={c.spaServices}
    >
      <div className={c.spaServicesText}>
        <motion.p variants={Animation} custom={0.4}>
          LUXURY HOTEL
        </motion.p>
        <motion.h1 variants={Animation} custom={0.5}>
          Spa Center
        </motion.h1>
      </div>
      <motion.div
        variants={Animation}
        custom={0.6}
        className={c.spaServicesCards}
      >
        <SpaPageServicesCard
          heading="Fitness"
          price="$39 / week"
          image={spaCardImage1}
        />
        <SpaPageServicesCard
          heading="Pool / Spa"
          price="$59 / week"
          image={spaCardImage2}
        />
        <SpaPageServicesCard
          heading="All in one"
          price="$99 / week"
          image={spaCardImage3}
        />
      </motion.div>
    </motion.div>
  );
};

export default SpaPageServices;
