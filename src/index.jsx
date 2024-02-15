import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./utils/scrollToTop";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop /> {/*Scrolling to top on changing route*/}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
