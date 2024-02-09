import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import c from "./Layout.module.scss";
import Footer from "../../components/Footer/Footer";
import TopButton from "../../components/TopButton/TopButton";
import Marquee from "../../components/Marquee/Marquee";
const Layout = () => {
  return (
    <div className={c.layout}>
      <Sidebar />
      <div className={c.outlet}>
        <Outlet />
        <Marquee />
        <Footer />
      </div>
      <TopButton />
    </div>
  );
};

export default Layout;
