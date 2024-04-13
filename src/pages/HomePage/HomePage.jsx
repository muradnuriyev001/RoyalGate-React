import HotelVideo from "../../components/Videos/HotelVideo/HotelVideo";
import HomePageBanner from "./HomePageBanner/HomePageBanner";
import HomePageBook from "./HomePageBook/HomePageBook";
import HomePageFirstSection from "./HomePageFirstSection/HomePageFirstSection";
import HomePageOurServices from "./HomePageOurServices/HomePageOurServices";
import HomePageRoomSection from "./HomePageRoomSection/HomePageRoomSection";
import usePageTitle from "../../hooks/usePageTitle";
const HomePage = () => {
  usePageTitle("Royal Gate | Home");
  return (
    <>
      <HomePageBanner />
      <HomePageFirstSection />
      <HomePageRoomSection />
      <HotelVideo />
      <HomePageOurServices />
      <HomePageBook />
    </>
  );
};

export default HomePage;
