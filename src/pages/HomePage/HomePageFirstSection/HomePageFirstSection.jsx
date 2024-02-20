import c from "./HomePageFirstSection.module.scss";
import { IoMdStar } from "react-icons/io";
import firstSectionImage1 from "../../../assets/img/firstSection/firstSection1.jpg";
import firstSectionImage2 from "../../../assets/img/firstSection/firstSection2.jpg";

const HomePageFirstSection = () => {
  return (
    <div className={c.hPFSection}>
      <div className={c.hPFSectionContent}>
        <div className={c.hPFSectionStars}>
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
        </div>
        <div className={c.hPFSectionText}>
          <span className={c.hPFText1}>THE ROYAL GATE LUXURY HOTEL</span>
          <span className={c.hPFText2}>Enjoy a Luxury Experience</span>
          <span className={c.hPFText3}>
            Welcome to the best five-star deluxe hotel in New York. Hotel
            elementum sesue the aucan vestibulum aliquam justo in sapien rutrum
            volutpat. Donec in quis the pellentesque velit. <br /> <br /> Donec
            id velit ac arcu posuere blane. Hotel ut nisl quam nestibulum ac
            quam nec odio elementum sceisue the aucan ligula. Orci varius
            natoque penatibus et magnis dis parturient monte nascete ridiculus
            mus nellentesque habitant morbine.
          </span>
        </div>
      </div>
      <div className={c.hPFSectionImages}>
        <div className={c.hPFImage1}>
          <img src={firstSectionImage1} alt="" loading="lazy"/>
        </div>
        <div className={c.hPFImage2}>
          <img src={firstSectionImage2} alt="" loading="lazy"/>
        </div>
      </div>
    </div>
  );
};

export default HomePageFirstSection;
