import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import BoatsPage from "./pages/boatslistpage";

import { BrowserRouter, Router } from "react-router-dom";
import ErrorPage404 from "./pages/error404page";
import BoatDetails from "./pages/Boatdetails";

import PageMain from "./pages/pagemain.js";
import ScrollToTop from "./components/utils/ScrollToTop.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
