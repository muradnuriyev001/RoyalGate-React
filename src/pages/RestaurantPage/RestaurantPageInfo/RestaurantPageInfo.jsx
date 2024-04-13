import c from "./RestaurantPageInfo.module.scss";

import { IoMdStar } from "react-icons/io";
import { TbClockHour3 } from "react-icons/tb";
import { motion } from "framer-motion";
const Animation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 1 },
  }),
};
const RestaurantPageInfo = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: true }}
      className={c.restaurantInfo}
    >
      <motion.div
        variants={Animation}
        custom={0.5}
        className={c.restaurantInfoHeader}
      >
        <div className={c.restaurantStars}>
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
        </div>
        <div className={c.headerText}>
          <h3>AN EXPERIENCE FOR THE SENSES</h3>
          <h1>The Restaurant</h1>
          <span className={c.headerSpan}>
            Led by Chef de Micheal Martin, The Restaurant is celebrated for its
            excellent cuisine and unique ambience. The gorgeous dining room
            features three open studio kitchens, allowing you to enjoy the
            sights and sounds of the culinary artistry on display. The menu
            showcases both Asian and European influences, with a tempting
            selection of classic favorites and creative dishes for you to
            sample. Cheese connoisseurs will be drawn to the The Wine and Cheese
            Cellar, housed in five-meter-high glass walls, where our
            knowledgeable staff can introduce you to some of New York's greatest
            culinary treasures.
          </span>
        </div>
      </motion.div>

      <motion.div
        variants={Animation}
        custom={0.7}
        className={c.restaurantInfoMainText}
      >
        <span>Hours</span>
        <div className={c.mealTimes}>
          <div className={c.mealTime}>
            <TbClockHour3 />
            <span>Breakfast: 7.00 am – 11.00 am (daily)</span>
          </div>
          <div className={c.mealTime}>
            <TbClockHour3 />
            <span>Lunch: 12.00 noon – 2.00 pm (daily)</span>
          </div>
          <div className={c.mealTime}>
            <TbClockHour3 />
            <span>Dinner: 6.30 pm - 10.00 pm (daily)</span>
          </div>
        </div>
        <motion.div variants={Animation} custom={0.9} className={c.rulesInfo}>
          <h2>Dress Code</h2>
          <p>Smart casual (no shorts, hats, or sandals permitted)</p>
          <h2>Terrace</h2>
          <p>Open for drinks only</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default RestaurantPageInfo;
