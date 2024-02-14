import AboutPageFirstSection from "../HomePage/HomePageFirstSection/HomePageFirstSection";
import AboutPageOurServices from "../HomePage/HomePageOurServices/HomePageOurServices";
import AboutPageBanner from "./AboutPageBanner/AboutPageBanner";
import AboutPageHistory from "./AboutPageHistory/AboutPageHistory";
const AboutPage = () => {
  return (
    <>
      <AboutPageBanner />
      <AboutPageFirstSection />
      <AboutPageHistory />
      <AboutPageOurServices />
    </>
  );
};

export default AboutPage;
