import c from "./HomePage.module.scss";
import HomePageBanner from "./HomePageBanner/HomePageBanner";
import HomePageFirstSection from "./HomePageFirstSection/HomePageFirstSection";
import HomePageOurServices from "./HomePageOurServices/HomePageOurServices";
import HomePageRoomSection from "./HomePageRoomSection/HomePageRoomSection";

const HomePage = () => {
  return (
    <div className={c.homePage}>
      <HomePageBanner />
      <HomePageFirstSection />
      <HomePageRoomSection/>
      <HomePageOurServices/>
    </div>
  );
};

export default HomePage;
