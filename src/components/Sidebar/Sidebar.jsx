import c from "./Sidebar.module.scss";
import { NavLink } from "react-router-dom";
import logoSidebar from "../../assets/img/logoSidebar.png";
import SidebarNav from "./SidebarNav/SidebarNav";
const Sidebar = () => {
  return (
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
  );
};

export default Sidebar;
