import { Route, Routes } from "react-router-dom";

import "./App.module.scss";

import Layout from "../pages/Layout/Layout";
import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage";
import RestaurantPage from "../pages/RestaurantPage/RestaurantPage";
import SpaPage from "../pages/SpaPage/SpaPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/restaurant" element={<RestaurantPage />} />
        <Route path="/spa-center" element={<SpaPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
