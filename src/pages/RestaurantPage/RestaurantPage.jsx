import RestaurantPageBanner from "./RestaurantPageBanner/RestaurantPageBanner";
import RestaurantPageInfo from "./RestaurantPageInfo/RestaurantPageInfo";
import RestaurantPageMenu from "./RestaurantPageMenu/RestaurantPageMenu";
import RestaurantPageBook from "../HomePage/HomePageBook/HomePageBook";
import usePageTitle from "../../hooks/usePageTitle";

const RestaurantPage = () => {
  usePageTitle("Royal Gate | Restaurant");
  return (
    <>
      <RestaurantPageBanner />
      <RestaurantPageInfo />
      <RestaurantPageMenu />
      <RestaurantPageBook />
    </>
  );
};

export default RestaurantPage;
