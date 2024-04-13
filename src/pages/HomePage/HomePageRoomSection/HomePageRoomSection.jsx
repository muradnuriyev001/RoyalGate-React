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
        <HPRoomCards
          roomImage={RoomImage1}
          roomPrice="190$ / Night"
          roomName="Junior Suite"
        />
        <HPRoomCards
          roomImage={RoomImage3}
          roomPrice="290$ / Night"
          roomName="Family Suite"
        />
        <HPRoomCards
          roomImage={RoomImage2}
          roomPrice="390$ / Night"
          roomName="Double Room"
        />
        <HPRoomCards
          roomImage={RoomImage1}
          roomPrice="490$ / Night"
          roomName="Deluxe Room"
        />
        <HPRoomCards
          roomImage={RoomImage2}
          roomPrice="590$ / Night"
          roomName="King's Room"
        />
        <HPRoomCards
          roomImage={RoomImage3}
          roomPrice="990$ / Night"
          roomName="Royal Room"
        />
      </motion.div>
    </motion.div>
  );
};

export default HomePageRoomSection;
