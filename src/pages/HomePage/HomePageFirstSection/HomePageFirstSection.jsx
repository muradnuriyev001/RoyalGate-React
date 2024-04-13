import c from "./HomePageFirstSection.module.scss";
import { IoMdStar } from "react-icons/io";
import firstSectionImage1 from "../../../assets/img/HomePics/firstSection1.jpg";
import firstSectionImage2 from "../../../assets/img/HomePics/firstSection2.jpg";

import { motion } from "framer-motion";

const Animation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 1 },
  },
};

const HomePageFirstSection = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className={c.hPFSection}
    >
      <motion.div variants={Animation} className={c.hPFSectionContent}>
        <div className={c.hPFSectionStars}>
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
        </div>
        <div className={c.hPFSectionText}>
          <span className={c.hPFText1}>THE ROYAL GATE LUXURY HOTEL</span>
          <span className={c.hPFText2}>Enjoy a Luxury Experience</span>
          <span className={c.hPFText3}>
            Welcome to the best five-star deluxe hotel in New York. Hotel
            elementum sesue the aucan vestibulum aliquam justo in sapien rutrum
            volutpat. Donec in quis the pellentesque velit. <br /> <br /> Donec
            id velit ac arcu posuere blane. Hotel ut nisl quam nestibulum ac
            quam nec odio elementum sceisue the aucan ligula. Orci varius
            natoque penatibus et magnis dis parturient monte nascete ridiculus
            mus nellentesque habitant morbine.
          </span>
        </div>
      </motion.div>
      <motion.div variants={Animation} className={c.hPFSectionImages}>
        <div className={c.hPFImage1}>
          <img src={firstSectionImage1} alt="" draggable="false" />
        </div>
        <div className={c.hPFImage2}>
          <img src={firstSectionImage2} alt="" draggable="false" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HomePageFirstSection;
