import c from "./HomePage.module.scss";
import HomePageBanner from "./HomePageBanner/HomePageBanner";

const HomePage = () => {
  return (
    <div className={c.homePage}>
      <HomePageBanner />

    </div>
  );
};

export default HomePage;
