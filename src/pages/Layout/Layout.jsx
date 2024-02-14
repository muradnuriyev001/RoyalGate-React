import c from "./Layout.module.scss";
import { Outlet } from "react-router-dom";

import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import TopButton from "../../components/TopButton/TopButton";
import Marquee from "../../components/Marquee/Marquee";
import Map from "../../components/Map/Map";

const Layout = () => {
  return (
    <div className={c.layout}>
      <Sidebar />
      <div className={c.outlet}>
        <Outlet />
        <Marquee />
        <Map />
        <Footer />
      </div>
      <TopButton />
    </div>
  );
};

export default Layout;
