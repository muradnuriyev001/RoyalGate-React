import c from "./RestaurantPageInfo.module.scss";

import { IoMdStar } from "react-icons/io";
import { TbClockHour3 } from "react-icons/tb";

const RestaurantPageInfo = () => {
  return (
    <div className={c.restaurantInfo}>
      <div className={c.restaurantInfoHeader}>
        <div className={c.restaurantStars}>
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
        </div>
        <div className={c.headerText}>
          <h3>AN EXPERIENCE FOR THE SENSES</h3>
          <h1>The Restaurant</h1>
          <span className={c.headerSpan}>
            Led by Chef de Micheal Martin, The Restaurant is celebrated for its
            excellent cuisine and unique ambience. The gorgeous dining room
            features three open studio kitchens, allowing you to enjoy the
            sights and sounds of the culinary artistry on display. The menu
            showcases both Asian and European influences, with a tempting
            selection of classic favorites and creative dishes for you to
            sample. Cheese connoisseurs will be drawn to the The Wine and Cheese
            Cellar, housed in five-meter-high glass walls, where our
            knowledgeable staff can introduce you to some of New York's greatest
            culinary treasures.
          </span>
        </div>
      </div>

      <div className={c.restaurantInfoMainText}>
        <span>Hours</span>
        <div className={c.mealTimes}>
          <div className={c.mealTime}>
            <TbClockHour3 />
            <span>Breakfast: 7.00 am – 11.00 am (daily)</span>
          </div>
          <div className={c.mealTime}>
            <TbClockHour3 />
            <span>Lunch: 12.00 noon – 2.00 pm (daily)</span>
          </div>
          <div className={c.mealTime}>
            <TbClockHour3 />
            <span>
              Dinner: open from 6.30 pm, last order at 10.00 pm (daily)
            </span>
          </div>
        </div>
        <div className={c.rulesInfo}>
          <h2>Dress Code</h2>
          <p>Smart casual (no shorts, hats, or sandals permitted)</p>
          <h2>Terrace</h2>
          <p>Open for drinks only</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantPageInfo;
