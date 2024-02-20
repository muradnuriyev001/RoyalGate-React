import c from "./Layout.module.scss";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import TopButton from "../../components/TopButton/TopButton";
import Marquee from "../../components/Marquee/Marquee";
import Map from "../../components/Map/Map";
import Loader from "../../components/Loader/Loader";

const Layout = () => {
  //Loader Logic
  const { pathname } = useLocation();

  const [loaderState, setLoaderState] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); //scrolling to top on changing pathname

    setLoaderState(true);
    setTimeout(() => {
      setLoaderState(false);
    }, 1000);
  }, [pathname]);

  return (
    <div className={c.layout}>
      {loaderState && <Loader />}
      <Sidebar />
      <div className={c.outlet}>
        <Outlet />
        {["/", "/about", "/restaurant", "/spa-center", "/contact"].includes(
          pathname
        ) && (
          <>
            <Marquee />
            <Map />
            <Footer />
          </>
        )}
      </div>
      <TopButton />
    </div>
  );
};

export default Layout;
