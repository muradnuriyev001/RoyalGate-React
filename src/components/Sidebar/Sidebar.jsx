import c from "./Sidebar.module.scss";

import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import logoSidebar from "../../assets/img/logoSidebar.png";
import SidebarNav from "./SidebarNav/SidebarNav";

import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  const toggleIsActive = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsActive(window.innerWidth > 1024);
    };

    handleResize(); // Check initial width
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [location]);

  return (
    <>
      {isActive ? (
        <IoCloseOutline onClick={toggleIsActive} className={c.burger} />
      ) : (
        <IoMenuOutline onClick={toggleIsActive} className={c.burger} />
      )}

      {isActive && (
        <div className={c.sidebar}>
          <NavLink to={"/"}>
            <img
              className={c.image}
              src={logoSidebar}
              alt="Hotel Logo"
              draggable={false}
            />
          </NavLink>

          <SidebarNav />
        </div>
      )}
    </>
  );
};

export default Sidebar;
