import SelectBox from "./selectbox.js";
import News from "./news";
import Testimonies from "./testimonies";
import FormFaqs from "./formfaqs";
import Services from "./services";
import Oferta from "./oferta";
import VideoSection from "./videosection";
import Info from "./info";
import Products from "./Boat";
import React from "react";
import { home } from "../home.js";
import { blogpost } from "../blog-post.js";
import { bookingform } from "../booking-form.js";
import Landing from "./landing.js";

export default function MainComponent(props) {
  React.useEffect(() => {
    home();
    blogpost();

    bookingform();
  }, []);

  const manejar = props.manejar;

  return (
    <>
      {" "}
      <Landing></Landing>
      <SelectBox></SelectBox>
      <Info></Info>
      <section className="fleet" id="fleet">
        <article className="text">
          <h2>Fleet of Luxury Boats</h2>
          <button className="btn btn-main" onClick={manejar}>
            hola mundo
          </button>
          <p>
            Dolore magna aliqua enim ad minim veniam, quis nostrud exercitation
            aliquip duis aute irure dolorin reprehenderits vol dolore fugiat
            nulla pariatur excepteur sint occaecat cupidatat.
          </p>
          <img src="./Imgs/decoreGold.png" alt="decore" />
        </article>
        <div className="styling top" />
      </section>
      <Products manejar={manejar} />
      <Oferta></Oferta>
      <Services></Services>
      <VideoSection></VideoSection>
      <FormFaqs></FormFaqs>
      <Testimonies></Testimonies>
      <News></News>
    </>
  );
}
