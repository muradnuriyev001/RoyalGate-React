import SpaPageBanner from "./SpaPageBanner/SpaPageBanner";
import SpaPageServices from "./SpaPageServices/SpaPageServices";
import SpaPageBook from "../HomePage/HomePageBook/HomePageBook";
import SpaGymVideo from "../../components/Videos/SpaGymVideo/SpaGymVideo";
import SpaPageAlbum from "../AboutPage/AboutPageAlbum/AboutPageAlbum";
import usePageTitle from "../../hooks/usePageTitle";

const SpaPage = () => {
  usePageTitle("Royal Gate | Spa");
  return (
    <>
      <SpaPageBanner />
      <SpaPageServices />
      <SpaGymVideo />
      <SpaPageAlbum />
      <SpaPageBook />
    </>
  );
};

export default SpaPage;
