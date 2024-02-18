import { useState } from "react";
import c from "./RestaurantPageMenu.module.scss";

import Menu from "./Menu/Menu";
import MenuSlider from "./MenuSlider/MenuSlider";

import menuDb from "./MenuDB.json";

const RestaurantPageMenu = () => {
  const [activeKey, setActiveKey] = useState("Starters");
  const activeMenu = menuDb[activeKey];
  return (
    <div className={c.restaurantMenu}>
      <div className={c.headerMenu}>
        <p>LUXURY HOTEL</p>
        <h1>Restaurant Menu</h1>
      </div>

      <div className={c.menuSlider}>
        <MenuSlider activeKey={activeKey} setActiveKey={setActiveKey} />
      </div>

      <div className={c.menu}>
        <Menu activeMenu={activeMenu} />
      </div>
    </div>
  );
};

export default RestaurantPageMenu;
