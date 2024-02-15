import c from "./ContactPageBanner.module.scss";

const ContactPageBanner = () => {
  return (
    <div className={c.contactBanner}>
      <span>Royal Gate Hotel: Where Luxury Awaits.</span>
      <a href="#contact-form">Contact Us</a>
    </div>
  );
};

export default ContactPageBanner;
