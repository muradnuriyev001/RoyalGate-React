import c from "./SidebarNav.module.scss";
import { NavLink } from "react-router-dom";
import { LuPhoneCall } from "react-icons/lu";

const SidebarNav = () => {
  return (
    <div>
      <ul>
        <NavLink to={"/"}>
          <li>HOME</li>
        </NavLink>
        <NavLink to={"/about"}>
          <li>ABOUT</li>
        </NavLink>
        <NavLink to={"/restaurant"}>
          <li>RESTAURANT</li>
        </NavLink>
        <NavLink to={"/spa-center"}>
          <li>SPA CENTER</li>
        </NavLink>
        <NavLink to={"/contact"}>
          <li>CONTACT</li>
        </NavLink>
      </ul>

      <div className={c.contact}>
        <LuPhoneCall className={c.contactPhoneLogo} />
        <div className={c.contactText}>
          <span className={c.contactReserve}>Reservation</span>
          <span className={c.contactPhone}>555 911 1000</span>
        </div>
      </div>
    </div>
  );
};

export default SidebarNav;
