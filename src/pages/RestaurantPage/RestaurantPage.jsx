import RestaurantPageBanner from "./RestaurantPageBanner/RestaurantPageBanner";
import RestaurantPageInfo from "./RestaurantPageInfo/RestaurantPageInfo";
import RestaurantPageMenu from "./RestaurantPageMenu/RestaurantPageMenu";

const RestaurantPage = () => {
  return (
    <>
      <RestaurantPageBanner />
      <RestaurantPageInfo />
      <RestaurantPageMenu />
    </>
  );
};

export default RestaurantPage;
