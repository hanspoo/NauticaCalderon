import React, { useState } from "react";
import "./App.css";
import main from "./jspelado/main";
import { home } from "./jspelado/home";

import { blogpost } from "./jspelado/blog-post";
import Header from "./components/header";
import Landing from "./components/landing";
import Footer from "./components/footer";
import MainComponent from "./components/maincomponent";
import BoatsPage from "./pages/boatslistpage";
import BoatDetails from "./pages/Boatdetails";
import PageMain from "./pages/pagemain";
import { Routes, Route } from "react-router-dom";
import { BoteContainer } from "./container/BoteContainer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageMain />} />
      <Route path="/index.html" element={<PageMain />} />
      <Route path="/Listadebotes" element={<BoatsPage />} />
      <Route path="/Listadebotes/:id" element={<BoteContainer />} />
    </Routes>
  );
}

export default App;
