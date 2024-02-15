import c from "./ContactPageForm.module.scss";
import { PiPhoneCall } from "react-icons/pi";
import { MdOutlineMail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

const ContactPageForm = () => {
  return (
    <div id="contact-form" className={c.contactForm}>
      <div className={c.contactFormText}>
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
            <span>
              1616 Broadway NY, New York 10001 United States of America
            </span>
          </div>
        </div>
      </div>
      <div className={c.contactFormReview}>
        <h1>Get in touch</h1>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Your Surname" />
          <input type="text" placeholder="Your Email Address" />
          <input type="text" placeholder="Subject" />
          <textarea type="text" placeholder="Your Message" />
        </form>
        <button className={c.btn}>Send Message</button>
      </div>
    </div>
  );
};

export default ContactPageForm;
