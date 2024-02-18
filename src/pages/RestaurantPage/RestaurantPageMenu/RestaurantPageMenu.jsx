import Menu from "./Menu/Menu";
import MenuSlider from "./MenuSlider/MenuSlider";
import c from "./RestaurantPageMenu.module.scss";

const RestaurantPageMenu = () => {
  return (
    <div className={c.restaurantMenu}>
      <div className={c.headerMenu}>
        <p>LUXURY HOTEL</p>
        <h1>Restaurant Menu</h1>
      </div>

      <div className={c.menuSlider}>
        <MenuSlider />
      </div>

      <div className={c.menu}>
        <Menu />
      </div>
    </div>
  );
};

export default RestaurantPageMenu;
