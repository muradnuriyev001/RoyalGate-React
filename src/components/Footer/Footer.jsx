import c from "./Footer.module.scss";
import { NavLink } from "react-router-dom";
import { PiPhoneCall } from "react-icons/pi";
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={c.Footer}>
      <div className={c.footerFirstLayer}>
        <div className={c.firstLayerAbout}>
          <span>Royal Gate Hotel</span>
          <span>
            Welcome to the best five-star deluxe hotel in New York. Hotel
            elementum sesue the aucan ivestane aliquam usto.
          </span>
          <select name="" id="">
            <option value="English">English</option>
            <option value="Russian">Russian</option>
            <option value="Turkish">Turkish</option>
          </select>
        </div>

        <div className={c.firstLayerExplore}>
          <span>Explore Hotel</span>
          <ul>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/restaurant"}>Restaurant</NavLink>
            <NavLink to={"spa-center"}>Spa Center</NavLink>
            <NavLink to={"/contact"}>Contact</NavLink>
          </ul>
        </div>

        <div className={c.firstLayerContact}>
          <div className={c.contactText}>
            <span>Contact</span>
            <span>
              1616 Broadway NY, New York 10001 United States of America
            </span>
          </div>

          <div className={c.contactPhone}>
            <PiPhoneCall />
            <span>555 911 1000</span>
          </div>
          <div className={c.contactIcons}>
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
            <FaFacebook />
          </div>
        </div>
      </div>
      <div className={c.footerSecondLayer}>
        © Copyright 2024 by Murad Nuriyev
      </div>
    </div>
  );
};

export default Footer;
