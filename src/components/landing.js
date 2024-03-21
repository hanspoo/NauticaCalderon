import main from "../main";
import NavBar from "./navbar";

export default function Landing() {
  return (
    <section className="landing">
      <div className="container">
        <NavBar></NavBar>

        <section className="textbox-holder">
          <article className="textbox">
            <span>Your Dream Boats </span>
            <p>
              Most Realiable <br />
              <span className="lux">Luxury</span> Boat Rental
            </p>
            <a href="#" className="explore">
              Explore Now{" "}
            </a>
          </article>
          <article className="textbox">
            <span>Your Dream Boats </span>
            <p>
              Most Realiable <br />
              <span className="lux">Luxury</span> Boat Rental
            </p>
            <a href="#" className="explore">
              Explore Now{" "}
            </a>
          </article>
        </section>
        <i className="fa-solid fa-chevron-right angles" />
        <i className="fa-solid fa-chevron-left angles" />
      </div>
    </section>
  );
}
