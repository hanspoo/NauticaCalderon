import React, { useState } from "react";
import "./App.css";
import main from "./main";
import { home } from "./home";

import { blogpost } from "./blog-post";
import { bookingform } from "./booking-form";
import Header from "./components/header";
import Landing from "./components/landing";
import Footer from "./components/footer";
import MainComponent from "./components/maincomponent";
import BoatsPage from "./components/boatslistpage";
import BoatDetails from "./components/Boatdetails";
import Products from "./components/Boat";

function App() {
  React.useEffect(() => {
    main();
  }, []);
  const [principalPage, setPrincipalPage] = useState(true);

  const handleClick = () => {
    setPrincipalPage(true);
    setProductsPage(false);
    setDetailsPage(false);
  };

  const [productsPage, setProductsPage] = useState(false);

  const mostrarPaginaProductos = () => {
    setProductsPage(true);
    setDetailsPage(false);
    setPrincipalPage(false);
  };

  const [detailsPage, setDetailsPage] = useState(false);

  const mostrarPaginaDetalles = () => {
    setDetailsPage(true);
    setProductsPage(false);

    setPrincipalPage(false);
  };

  return (
    <>
      <div className="scroll-top flex-center">
        <span>
          <i className="fa-solid fa-arrow-up" />
        </span>
      </div>
      <button onClick={mostrarPaginaProductos}>mostrar producto</button>
      <button onClick={mostrarPaginaDetalles}>mostrar detalles</button>
      <button onClick={handleClick}>mostrar principal</button>
      <Header></Header>
      {/* 
      {principalPage ? (
        <MainComponent manejar={handleClick}></MainComponent>
      ) : (
        <BoatsPage></BoatsPage>
      )} */}

      {principalPage && <MainComponent manejar={handleClick}></MainComponent>}
      {productsPage && <BoatsPage />}
      {detailsPage && <BoatDetails></BoatDetails>}

      <Footer></Footer>

      <section className="by-me">
        2022
        <a
          href="https://portfolio-ahmedfahiim.vercel.app/"
          className="developer"
        >
          FAHII.M
        </a>
        - Boat Rentals . All rights reserved © .
      </section>
      {/* search div */}
      <div className="search-overLay">
        <div className="input-holder">
          <form action="#">
            <input type="text" placeholder="Type to search" id="search" />
            <i className="fa-solid fa-magnifying-glass" />
          </form>
          <p className="guide">
            Begin typing your search above and press return to search.
          </p>
        </div>
        <button className="close-Overlay">X</button>
      </div>
      {/* search div */}
    </>
  );
}

export default App;
