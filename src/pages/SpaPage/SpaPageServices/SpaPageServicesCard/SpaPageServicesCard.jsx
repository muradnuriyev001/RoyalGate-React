import c from "./SpaPageServicesCard.module.scss";

const SpaPageServicesCard = ({ heading, price, image }) => {
  return (
    <div className={c.spaServicesCard}>
      <div className={c.spaSerivcesCardText}>
        <h2>{heading}</h2>
        <p>{price}</p>
      </div>
      <img draggable="false" src={image} alt="" />
    </div>
  );
};

export default SpaPageServicesCard;
