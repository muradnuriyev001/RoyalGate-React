import HPRoomCards from "./HomePageRoomCards/HPRoomCards";
import c from "./HomePageRoomSection.module.scss";
import RoomImage1 from "../../../assets/img/RoomSection/1.jpg";
import RoomImage2 from "../../../assets/img/RoomSection/2.jpg";
import RoomImage3 from "../../../assets/img/RoomSection/3.jpg";
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

const roomData = [
  { image: RoomImage1, price: "190$ / Night", name: "Junior Suite" },
  { image: RoomImage3, price: "290$ / Night", name: "Family Suite" },
  { image: RoomImage2, price: "390$ / Night", name: "Double Suite" },
  { image: RoomImage1, price: "490$ / Night", name: "Deluxe Suite" },
  { image: RoomImage2, price: "590$ / Night", name: "King's Suite" },
  { image: RoomImage3, price: "990$ / Night", name: "Royal Suite" },
];

const HomePageRoomSection = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: true }}
      id="room-section"
      className={c.hPRoomSection}
    >
      <div className={c.hPRoomText}>
        <motion.span
          variants={Animation}
          custom={0.4}
          className={c.hPRoomText1}
        >
          ROYAL GATE LUXURY HOTEL
        </motion.span>
        <motion.span
          variants={Animation}
          custom={0.5}
          className={c.hPRoomText2}
        >
          Rooms & Suites
        </motion.span>
      </div>
      <motion.div variants={Animation} custom={0.6} className={c.hPRoomCards}>
        {roomData.map((room, i) => (
          <HPRoomCards
            key={i}
            roomImage={room.image}
            roomName={room.name}
            roomPrice={room.price}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default HomePageRoomSection;
