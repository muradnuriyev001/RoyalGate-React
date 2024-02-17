import AboutPageFirstSection from "../HomePage/HomePageFirstSection/HomePageFirstSection";
import AboutPageOurServices from "../HomePage/HomePageOurServices/HomePageOurServices";
import AboutPageBanner from "./AboutPageBanner/AboutPageBanner";
import AboutPageHistory from "./AboutPageHistory/AboutPageHistory";
import AboutPageAlbum from "./AboutPageAlbum/AboutPageAlbum";
const AboutPage = () => {
  return (
    <>
      <AboutPageBanner />
      <AboutPageFirstSection />
      <AboutPageHistory />
      <AboutPageAlbum/>
      <AboutPageOurServices />
    </>
  );
};

export default AboutPage;
