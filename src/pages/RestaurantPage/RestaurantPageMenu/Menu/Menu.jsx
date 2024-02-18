import c from "./Menu.module.scss";

import MenuCard from "../MenuCard/MenuCard";

const Menu = ({ activeMenu }) => {
  return (
    <div className={c.menu}>
      {activeMenu.map((meal, index) => (
        <MenuCard key={index} meal={meal} />
      ))}
    </div>
  );
};

export default Menu;
