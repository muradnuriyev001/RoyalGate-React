import c from "./ContactPageBanner.module.scss";

const ContactPageBanner = () => {
  return (
    <div className={c.contactBanner}>
      <h1>Royal Gate Hotel: Where Luxury Awaits.</h1>
      <a href="#contact-form">Contact Us</a>
    </div>
  );
};

export default ContactPageBanner;
