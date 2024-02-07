import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import c from "./Layout.module.scss";
import Footer from "../../components/Footer/Footer";
const Layout = () => {
  return (
    <div className={c.layout}>
      <Sidebar />

      <div className={c.outlet}>
        <Outlet />
        <Footer/>
      </div>
    </div>
  );
};

export default Layout;
