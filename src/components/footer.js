export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="col">
            <a href="#">
              {" "}
              <img src="/Imgs/logo-light.png" alt="Logo" />
            </a>
            <p>
              Ceipisicing elit sed do eiusmod tempor laboe dolore magna aliqa Ut
              enim ad minim veniam quis nostrud exercitation ullam co laboris
              nis aliquip comsecd.
            </p>
            <h2>Subscribe Newsletter</h2>
            <div className="subscripe-mail">
              <input
                type="email"
                name="mail"
                id="foot-mail"
                placeholder="Drop your mail"
              />
              <i className="fa-solid fa-envelope-open inside-input" />
            </div>
          </div>
          <div className="col">
            <h2>Boat Service</h2>
            <ul>
              <li>
                <a href="#"> Wedding Facility</a>
              </li>
              <li>
                <a href="#">Cruise and Marina</a>
              </li>
              <li>
                <a href="#">Yacht Party Event</a>
              </li>
              <li>
                <a href="#">Corporate Event</a>
              </li>
              <li>
                <a href="#">Fishing Cruiser</a>
              </li>
              <li>
                <a href="#">Overnight Stay</a>
              </li>
              <li>
                <a href="#">Birthday Party Yacht</a>
              </li>
              <li>
                <a href="#">Boar Rentals</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h2>About Nevica</h2>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Boat Fleet</a>
              </li>
              <li>
                <a href="#">Parts Shop</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Buy or Sell Boats</a>
              </li>
              <li>
                <a href="#">Featured Vehicles</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h2>Get In Touch</h2>
            <div className="location data">
              <i className="fa-solid fa-location-dot" />
              <span>Fairview Ave, El Monte, CA 91732</span>
            </div>
            <div className="mail data">
              <i className="fa-solid fa-envelope" />
              <a href="mailto:support@domain.com">support@domain.com</a>
            </div>
            <div className="call data">
              <i className="fa-solid fa-headset" />
              <span>Phone:</span> <a href="tel:+123-456 768"> +123-456-768</a>
            </div>
            <div className="social">
              <a href="#">
                {" "}
                <i className="fa-brands fa-facebook-f" />
              </a>
              <a href="#">
                {" "}
                <i className="fa-brands fa-twitter" />
              </a>
              <a href="#">
                {" "}
                <i className="fa-brands fa-linkedin-in" />
              </a>
              <a href="#">
                {" "}
                <i className="fa-brands fa-instagram" />
              </a>
            </div>
            <button className="confirm">CONFIRM BOOKING</button>
          </div>
        </div>
      </footer>

      <section className="by-me">
        2022
        <a
          href="https://portfolio-ahmedfahiim.vercel.app/"
          className="developer"
        >
          {" "}
          PooWeb
        </a>{" "}
        All rights reserved © .
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
