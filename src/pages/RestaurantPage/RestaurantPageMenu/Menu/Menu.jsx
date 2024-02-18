import c from "./Menu.module.scss";

import MenuCard from "../MenuCard/MenuCard";

const Menu = () => {
  return (
    <div className={c.menu}>
      <MenuCard />
      <MenuCard />
      <MenuCard />
      <MenuCard />
      <MenuCard />
      <MenuCard />
    </div>
  );
};

export default Menu;
