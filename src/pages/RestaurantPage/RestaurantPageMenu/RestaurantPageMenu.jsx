import { useState } from "react";
import c from "./RestaurantPageMenu.module.scss";

import Menu from "./Menu/Menu";
import MenuSlider from "./MenuSlider/MenuSlider";

import menuDb from "./MenuDB.json";
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
const RestaurantPageMenu = () => {
  const [activeKey, setActiveKey] = useState("Starters");
  const activeMenu = menuDb[activeKey];
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: true }}
      className={c.restaurantMenu}
    >
      <div className={c.headerMenu}>
        <motion.p variants={Animation} custom={0.4}>
          LUXURY HOTEL
        </motion.p>
        <motion.h1 variants={Animation} custom={0.5}>
          Restaurant Menu
        </motion.h1>
      </div>

      <motion.div variants={Animation} custom={0.6} className={c.menuSlider}>
        <MenuSlider activeKey={activeKey} setActiveKey={setActiveKey} />
      </motion.div>

      <motion.div variants={Animation} custom={0.7} className={c.menu}>
        <Menu activeMenu={activeMenu} />
      </motion.div>
    </motion.div>
  );
};

export default RestaurantPageMenu;
