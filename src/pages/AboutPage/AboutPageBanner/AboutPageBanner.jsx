import c from "./AboutPageBanner.module.scss";
const AboutPageBanner = () => {
  return (
    <div className={c.aboutBanner}>
      <h1>About Royal Gate</h1>
      <p>"Royal Gate Hotel: Where Luxury Awaits."</p>
      <a href="#history-section">Explore Our History!</a>
    </div>
  );
};

export default AboutPageBanner;
