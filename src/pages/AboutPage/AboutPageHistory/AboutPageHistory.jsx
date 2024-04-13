import c from "./AboutPageHistory.module.scss";

import oldHotelImage from "../../../assets/img/AboutPics/AboutPageOldHotel.png";
import newHotelImage from "../../../assets/img/AboutPics/AboutPageNewHotel.jpg";

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

const AboutPageHistory = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.4, once: true }}
      id="history-section"
      className={c.aboutHistory}
    >
      <motion.div variants={Animation} custom={0.6} className={c.aboutOldHotel}>
        <div className={c.oldHotelText}>
          <motion.h1 variants={Animation} custom={0.7}>
            "Where History Meets Hospitality"
          </motion.h1>
          <motion.span variants={Animation} custom={0.8}>
            Welcome to Royal Gate Hotel, where timeless elegance meets modern
            luxury. Nestled in the heart of the bustling city, our historic
            establishment has been a beacon of hospitality since its
            establishment in 1903.
            <br />
            <br />
            As you step through our grand entrance, you are greeted by a blend
            of classic charm and contemporary sophistication. The rich history
            of the hotel is evident in every detail, from the ornate
            architecture to the meticulously curated decor. Our rooms and suites
            offer a sanctuary of comfort and style, each thoughtfully designed
            to ensure a restful stay. Whether you're here for business or
            leisure, our attentive staff is dedicated to providing unparalleled
            service to make your experience truly unforgettable.
          </motion.span>
        </div>

        <div className={c.oldHotelImage}>
          <img src={oldHotelImage} alt="" />
        </div>
      </motion.div>

      <motion.div variants={Animation} custom={1.5} className={c.aboutNewHotel}>
        <div className={c.newHotelText}>
          <motion.h1 variants={Animation} custom={1.6}>
            "Discover Modern Luxury."
          </motion.h1>
          <motion.span variants={Animation} custom={1.7}>
            Indulge your palate at our renowned restaurant, where culinary
            delights crafted from the finest ingredients await.
            <br />
            <br />
            For those seeking relaxation, our spa offers a haven of tranquility
            where you can rejuvenate your body and mind with a range of
            indulgent treatments. Unwind in our sauna, take a refreshing dip in
            the pool, or simply lounge in luxury as our expert therapists pamper
            you.
            <br />
            <br />
            With our prime location, just steps away from the city's most iconic
            attractions and vibrant nightlife, Royal Gate Hotel is the perfect
            choice for discerning travelers seeking an unforgettable experience.
            <br />
            <br />
            Experience the timeless allure of Royal Gate Hotel, where every
            moment is infused with elegance and grace.
          </motion.span>
        </div>

        <div className={c.newHotelImage}>
          <img src={newHotelImage} alt="" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutPageHistory;
