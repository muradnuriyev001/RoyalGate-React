import c from "./MenuCard.module.scss";

const MenuCard = ({ meal }) => {
  const { name, price, description } = meal;
  return (
    <div className={c.menuCard}>
      <div className={c.menuCardNamePrice}>
        <h2>{name}</h2>
        <span>{price}</span>
      </div>
      <p className={c.menuCardDescription}>{description}</p>
    </div>
  );
};

export default MenuCard;
