import HotelVideo from "../../components/Videos/HotelVideo/HotelVideo";
import c from "./HomePage.module.scss";
import HomePageBanner from "./HomePageBanner/HomePageBanner";
import HomePageBook from "./HomePageBook/HomePageBook";
import HomePageFirstSection from "./HomePageFirstSection/HomePageFirstSection";
import HomePageOurServices from "./HomePageOurServices/HomePageOurServices";
import HomePageRoomSection from "./HomePageRoomSection/HomePageRoomSection";

const HomePage = () => {
  return (
    <div className={c.homePage}>
      <HomePageBanner />
      <HomePageFirstSection />
      <HomePageRoomSection />
      <HotelVideo />
      <HomePageOurServices />
      <HomePageBook />
    </div>
  );
};

export default HomePage;
