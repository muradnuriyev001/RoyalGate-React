import RestaurantPageBanner from "./RestaurantPageBanner/RestaurantPageBanner";
import RestaurantPageInfo from "./RestaurantPageInfo/RestaurantPageInfo";
import RestaurantPageMenu from "./RestaurantPageMenu/RestaurantPageMenu";
import RestaurantPageBook from "../HomePage/HomePageBook/HomePageBook";
const RestaurantPage = () => {
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
