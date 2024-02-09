import c from "./HomePageBook.module.scss";

import { FaPhoneVolume } from "react-icons/fa6";
import { TiStar } from "react-icons/ti";
import { IoIosCheckmark } from "react-icons/io";

const HomePageBook = () => {
  return (
    <div className={c.HPBook}>
      <div className={c.HPBookText}>
        <div className={c.HPBookStars}>
          <TiStar />
          <TiStar />
          <TiStar />
          <TiStar />
          <TiStar />
        </div>
        <span>
          Each of our guest rooms feature a private bath, wi-fi, cable
          television and include full breakfast.
        </span>
        <div className={c.HPBookContact}>
          <FaPhoneVolume />
          <div className={c.HPBookContactReserve}>
            <span>Reservation</span>
            <span>555 911 1000</span>
          </div>
        </div>
        <div className={c.HPBookContactFree}>
          <IoIosCheckmark />
          <span>Call us, it's tool-free</span>
        </div>
      </div>

      <div className={c.HPBookForm}>
        <div className={c.HPBookFormText}>
          <span>ROOMS & SUITES</span>
          <span>Hotel Booking Form</span>
        </div>

        <form className={c.HPBookFormInputs} action="">
          <div className={c.HPBookFormInputsCheckIn}>
            <span>Check In</span>
            <input type="date" />
          </div>
          <div className={c.HPBookFormInputsCheckOut}>
            <span>Check Out</span>
            <input type="date" />
          </div>

          <div className={c.HPBookFormInputsGuests}>
            <select>
              <option>Adults</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
            <select>
              <option>Children</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
          <button>CHECK AVAILABILITY</button>
        </form>
      </div>
    </div>
  );
};

export default HomePageBook;
