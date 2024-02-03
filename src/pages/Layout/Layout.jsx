import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import c from "./Layout.module.scss";
const Layout = () => {
  return (
    <div className={c.layout}>
      <Sidebar />

      <div className={c.outlet}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
