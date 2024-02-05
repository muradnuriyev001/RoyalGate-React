import HPRoomCards from "./HomePageRoomCards/HPRoomCards";
import c from "./HomePageRoomSection.module.scss";
import RoomImage1 from "../../../assets/img/RoomSection/1.jpg";
import RoomImage2 from "../../../assets/img/RoomSection/2.jpg";
import RoomImage3 from "../../../assets/img/RoomSection/3.jpg";

const HomePageRoomSection = () => {
  return (
    <div className={c.hPRoomSection}>
      <div className={c.hPRoomText}>
        <span className={c.hPRoomText1}>ROYAL GATE LUXURY HOTEL</span>
        <span className={c.hPRoomText2}>Rooms & Suites</span>
      </div>
      <div className={c.hPRoomCards}>
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
      </div>
    </div>
  );
};

export default HomePageRoomSection;
