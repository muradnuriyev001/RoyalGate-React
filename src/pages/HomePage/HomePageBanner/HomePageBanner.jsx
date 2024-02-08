import c from "../HomePageBanner/HomePageBanner.module.scss";
import { IoMdStar } from "react-icons/io";
const HomePageBanner = () => {
  return (
    <div className={c.homePageBanner}>
      <div className={c.hpBannerContent}>
        <div className={c.bannerStars}>
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
        </div>
        <div className={c.bannerText}>
          <span className={c.bT1}>LUXURY HOTEL & BEST RESORT</span>
          <span className={c.bT2}>ENJOY THE LUXURY EXPERIENCE</span>
        </div>
        <a href="#RoomSection" className={c.bannerButton}>
          ROOMS & SUITES
        </a>
      </div>
    </div>
  );
};

export default HomePageBanner;
