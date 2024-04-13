import c from "./ContactPageForm.module.scss";
import { PiPhoneCall } from "react-icons/pi";
import { MdOutlineMail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
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
const ContactPageForm = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5, once: true }}
      id="contact-form"
      className={c.contactForm}
    >
      <motion.div
        variants={Animation}
        custom={0.4}
        className={c.contactFormText}
      >
        <h1>Your feedback matters</h1>
        <span>
          Please provide your feedback so that we can continue to improve our
          service.
        </span>

        <div className={c.contactFormTextPhone}>
          <PiPhoneCall />
          <div className={c.df}>
            <p>Reservation</p>
            <span>555 911 1000</span>
          </div>
        </div>

        <div className={c.contactFormTextEmail}>
          <MdOutlineMail />
          <div className={c.df}>
            <p>Email info</p>
            <span>info@royalgatehotel.com</span>
          </div>
        </div>

        <div className={c.contactFormTextAddress}>
          <FaMapMarkerAlt />
          <div className={c.df}>
            <p>Address</p>
            <span>1616 Broadway NY, New York 10001 USA</span>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={Animation}
        custom={0.4}
        className={c.contactFormReview}
      >
        <h1>Get in touch</h1>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Your Surname" />
          <input type="text" placeholder="Your Email Address" />
          <input type="text" placeholder="Subject" />
          <textarea type="text" placeholder="Your Message" />
        </form>
        <button className={c.btn}>Send Message</button>
      </motion.div>
    </motion.div>
  );
};

export default ContactPageForm;
