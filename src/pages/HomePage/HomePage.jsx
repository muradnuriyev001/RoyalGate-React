import c from "./HomePage.module.scss";
import HomePageBanner from "./HomePageBanner/HomePageBanner";
import HomePageFirstSection from "./HomePageFirstSection/HomePageFirstSection";

const HomePage = () => {
  return (
    <div className={c.homePage}>
      <HomePageBanner />
      <HomePageFirstSection/>
    </div>
  );
};

export default HomePage;
