import c from "./SpaPageServicesCard.module.scss";
import { Link } from "react-router-dom";
const SpaPageServicesCard = ({ heading, price, image }) => {
  return (
    <div className={c.spaServicesCard}>
      <div className={c.spaSerivcesCardText}>
        <div>
          <h2>{heading}</h2>
          <p>{price}</p>
        </div>

        <Link to={"/contact"}>Check Av.</Link>
      </div>
      <img draggable="false" src={image} alt="" />
    </div>
  );
};

export default SpaPageServicesCard;
