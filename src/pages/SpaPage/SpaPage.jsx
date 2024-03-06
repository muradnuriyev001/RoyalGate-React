import SpaPageBanner from "./SpaPageBanner/SpaPageBanner";
import SpaPageServices from "./SpaPageServices/SpaPageServices";
import SpaPageBook from "../HomePage/HomePageBook/HomePageBook";
import SpaGymVideo from "../../components/Videos/SpaGymVideo/SpaGymVideo";

const SpaPage = () => {
  return (
    <>
      <SpaPageBanner />
      <SpaPageServices />
      <SpaGymVideo />
      <SpaPageBook />
    </>
  );
};

export default SpaPage;
