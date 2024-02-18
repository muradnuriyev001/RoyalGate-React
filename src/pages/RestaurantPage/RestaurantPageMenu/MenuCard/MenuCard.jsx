import c from "./MenuCard.module.scss";
import { Starters } from "../MenuDB";
const MenuCard = () => {
  return (
    <div className={c.menuCard}>
      <div className={c.menuCardNamePrice}>
        <h2>{Starters[1].name}</h2>
        <span>{Starters[1].price}</span>
      </div>
      <p className={c.menuCardDescription}>{Starters[1].description}</p>
    </div>
  );
};

export default MenuCard;
