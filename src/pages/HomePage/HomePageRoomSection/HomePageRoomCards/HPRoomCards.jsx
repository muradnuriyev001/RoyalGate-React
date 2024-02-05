import c from "./HPRoomCard.module.scss";
import { useNavigate } from "react-router-dom";

import { FaPersonSwimming, FaTaxi, FaWifi } from "react-icons/fa6";
import { MdOutlineSportsTennis } from "react-icons/md";
import { GrFormNextLink } from "react-icons/gr";

const HPRoomCards = ({ roomImage, roomPrice, roomName }) => {
  const navigate = useNavigate();
  const goToContact = () => navigate("/contact", { replace: true });

  return (
    <div onClick={goToContact} className={c.HPRoomCard}>
      <img src={roomImage} draggable={false} alt="Room Image" />
      <div className={c.HPRoomCardLayer}>
        <span className={c.HPRoomLayerText1}>{roomPrice}</span>
        <span className={c.HPRoomLayerText2}>{roomName}</span>
        <div className={c.HPRoomLayerIcons}>
          <FaPersonSwimming className={c.HPRoomLayerIcon} />
          <MdOutlineSportsTennis className={c.HPRoomLayerIcon} />
          <FaTaxi className={c.HPRoomLayerIcon} />
          <FaWifi className={c.HPRoomLayerIcon} />
        </div>
        <div onClick={goToContact} className={c.HPRoomBook}>
          Book Now <GrFormNextLink className={c.HPRoomBookIcon} />
        </div>
      </div>
    </div>
  );
};

export default HPRoomCards;
