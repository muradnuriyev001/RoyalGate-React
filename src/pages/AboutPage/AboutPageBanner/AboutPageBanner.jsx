import c from "./AboutPageBanner.module.scss";
const AboutPageBanner = () => {
  return (
    <div className={c.aboutBanner}>
      <p>"Royal Gate Hotel: Where Luxury Awaits."</p>
      <a href="#history-section">Explore Our History!</a>
    </div>
  );
};

export default AboutPageBanner;
