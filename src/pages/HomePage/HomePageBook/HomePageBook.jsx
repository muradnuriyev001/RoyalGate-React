import c from "./HomePageBook.module.scss";

import { FaPhoneVolume } from "react-icons/fa6";
import { TiStar } from "react-icons/ti";
import { IoIosCheckmark } from "react-icons/io";

import { motion } from "framer-motion";
const Animation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 1 },
  }),
};
const HomePageBook = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: true }}
      className={c.HPBook}
    >
      <motion.div variants={Animation} custom={0.4} className={c.HPBookText}>
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
      </motion.div>

      <motion.div variants={Animation} custom={0.4} className={c.HPBookForm}>
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
      </motion.div>
    </motion.div>
  );
};

export default HomePageBook;
