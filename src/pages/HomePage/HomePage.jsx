import c from "./HomePage.module.scss";
import HomePageBanner from "./HomePageBanner/HomePageBanner";
import HomePageFirstSection from "./HomePageFirstSection/HomePageFirstSection";
import HomePageRoomSection from "./HomePageRoomSection/HomePageRoomSection";

const HomePage = () => {
  return (
    <div className={c.homePage}>
      <HomePageBanner />
      <HomePageFirstSection />
      <HomePageRoomSection/>
    </div>
  );
};

export default HomePage;
