import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="scroll-top flex-center">
        <span>
          <i className="fa-solid fa-arrow-up" />
        </span>
      </div>
      {/* start header */}
      <header className="scroll-event">
        <div className="container flex-between">
          <article className="data flex-between">
            <div className="phone">
              <i className="fa-solid fa-phone" />
              <span>
                {" "}
                Phone: <a href="tel:755 302 8549">755 302 8549</a>
              </span>
            </div>
            <div className="Email">
              <i className="fa-solid fa-envelope" />
              <span>
                Email:
                <a href="mailto:support@example.com">support@example.com</a>
              </span>
            </div>
          </article>
          <article className="social">
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
          </article>
        </div>
      </header>
      {/* end header */}
      {/* start landing  */}
      <section className="landing">
        <div className="container">
          <nav className="flex-between scroll-event">
            <a href="./index.html">
              <img src="./Imgs/logo-light.png" alt="Logo" className="logo" />
            </a>
            <i className="fa-solid fa-bars bars-icon burger-icon" />
            <div className="links scroll-event">
              <ul className="main-list">
                <li>
                  <a className="list-item active" href="./index.html">
                    Home
                  </a>
                </li>
                <li>
                  <a className="list-item" href="html/about-us.html">
                    About Us
                  </a>
                </li>
                <li className="nested">
                  <a className="list-item" href="#fleet">
                    Our Fleet
                  </a>
                  <ul>
                    <li>
                      <a href="html/boat-list1.html">Boats Listing 1</a>
                    </li>
                    <li>
                      <a href="html/boat-list2.html">Boats Listing 2</a>
                    </li>
                    <li>
                      <a href="html/boat-details.html">Boats Details</a>
                    </li>
                  </ul>
                </li>
                <li className="nested">
                  <a className="list-item" href="#">
                    Our Tours
                  </a>
                  <ul>
                    <li>
                      <a href="html/Our-tours.html">Tours Listing</a>
                    </li>
                    <li>
                      <a href="html/tour-details.html">Tours Details</a>
                    </li>
                  </ul>
                </li>
                <li className="nested">
                  <a className="list-item" href="#news">
                    News
                  </a>
                  <ul>
                    <li>
                      <a href="html/main-blog.html">Blog Main</a>
                    </li>
                    <li>
                      <a href="html/grid-blog.html">Blog Grid</a>
                    </li>
                    <li>
                      <a href="html/post-details.html">Blog Post</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="list-item" href="html/contact-us.html">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="form">
              <i className="fa-solid fa-magnifying-glass search" id="search" />
              <a href="#book-now" className="book main">
                BOOK NOW
              </a>
            </div>
          </nav>
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
        <div className="styling bottom" />
      </section>
      {/* end landing  */}
      {/* start select box  */}
      <section className="select flex-between">
        <article className="box">
          <span>Select Boat Type</span>
          <button className="drop-down">
            <span className="selected" />
            <ul className="options-list" data-index={0}>
              <li selected="">Celebrations</li>
              <li>Journey</li>
              <li>Fishing</li>
            </ul>
          </button>
        </article>
        <article className="box">
          <span>Select a Model</span>
          <button className="drop-down">
            <span className="selected" />
            <ul className="options-list" data-index={1}>
              <li selected="">Model 1</li>
              <li>Model 2</li>
              <li>Model 3</li>
            </ul>
          </button>
        </article>
        <article className="box">
          <span>Price Range</span>
          <button className="drop-down">
            <span className="selected" />
            <ul className="options-list" data-index={2}>
              <li selected="">Max $50 Perday</li>
              <li>Max $100 Perday</li>
              <li>Max $150 Perday</li>
            </ul>
          </button>
        </article>
        <button className="main search">Search</button>
      </section>
      {/* end select box  */}
      {/* start Providing section */}
      <section className="providing">
        <div className="container">
          <article className="main-content flex-between">
            <article className="text col">
              <h2>
                Providing a large fleet of
                <br />
                Boats for a perfect and <br />
                dreamy experience
              </h2>
              <p>
                Eorem ipsum dolor sit amet, consectetur adipisicing elit sed
                eiusmod tempor et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation aliquip ex ea commodo consequat. Duis
                aute irure dolorin reprehenderits vol dolore fugiat nulla
                pariatur excepteur sint occaecat.
              </p>
              <ul>
                <li>Stunning Cruise Paths You Follow</li>
                <li>Premium Boats &amp; Yachts</li>
                <li>Our Professional Approach</li>
                <li>Quality Service Guaranteed</li>
              </ul>
              <article className="sign">
                <img src="./Imgs/sign.jpg" alt="Sign" />
                <p>CEO, Autlines Boat Rentals</p>
              </article>
            </article>
            <article className="img col">
              <img src="./Imgs/2356456.png" alt="Img" />
            </article>
          </article>
          <article className="features flex-between">
            <div className="col one">
              <img src="./Imgs/mask.png" alt="Mask" />
              <div className="text">
                <h3>Priceless Experience</h3>
                <img src="./Imgs/decore01.png" alt="decore" />
                <p>
                  Asmod tempor incididunt labore magna ust enim sed veniams quis
                  nostrud sed commodo ipsum duals.
                </p>
              </div>
            </div>
            <div className="col two">
              <img src="./Imgs/blue-mask.png" alt="Tara" />
              <div className="text">
                <h3>Custom Packages</h3>
                <img src="./Imgs/decore01.png" alt="decore" />
                <p>
                  Asmod tempor incididunt labore magna ust enim sed veniams quis
                  nostrud sed commodo ipsum duals.
                </p>
              </div>
            </div>
            <div className="col three">
              <img src="./Imgs/blue-man.png" alt="Man" />
              <div className="text">
                <h3>Peoples Oriented</h3>
                <img src="./Imgs/decore01.png" alt="decore" />
                <p>
                  Asmod tempor incididunt labore magna ust enim sed veniams quis
                  nostrud sed commodo ipsum duals.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
      {/* end Providing section */}
      {/* start Fleet section */}
      <section className="fleet" id="fleet">
        <article className="text">
          <h2>Fleet of Luxury Boats</h2>
          <p>
            Dolore magna aliqua enim ad minim veniam, quis nostrud exercitation
            aliquip duis aute irure dolorin reprehenderits vol dolore fugiat
            nulla pariatur excepteur sint occaecat cupidatat.
          </p>
          <img src="./Imgs/decoreGold.png" alt="decore" />
        </article>
        <div className="styling top" />
      </section>
      <section className="cards">
        <div className="container">
          <article className="cards-holder">
            <div className="card">
              <div className="img">
                <img src="./Imgs/b001.jpg" alt="Boat" />
              </div>
              <div className="info flex-between">
                <a href="#" className="name">
                  Golden Odyssey
                </a>
                <div className="price">
                  <span className="currency">$140</span>
                  <span className="duration">Per Day</span>
                </div>
              </div>
              <div className="data flex-between">
                <div className="guest inf">
                  <i className="fas fa-user" />
                  <span>12 Guests</span>
                </div>
                <div className="beds inf">
                  <i className="fas fa-bed" />
                  <span> 2 Master Bedroom </span>
                </div>
                <div className="feets inf">
                  <i className="fas fa-arrows-h" />
                  <span> 44 Feet</span>
                </div>
                <div className="entertain inf">
                  <i className="far fa-columns" />
                  <span>Sun Deck, Kitchen ...</span>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="img">
                <img src="./Imgs/b002.jpg" alt="Boat" />
              </div>
              <div className="info flex-between">
                <a href="#" className="name">
                  Black Pearl
                </a>
                <div className="price">
                  <span className="currency">$325</span>
                  <span className="duration">Per Day</span>
                </div>
              </div>
              <div className="data flex-between">
                <div className="guest inf">
                  <i className="fas fa-user" />
                  <span>12 Guests</span>
                </div>
                <div className="beds inf">
                  <i className="fas fa-bed" />
                  <span> 2 Master Bedroom </span>
                </div>
                <div className="feets inf">
                  <i className="fas fa-arrows-h" />
                  <span> 44 Feet</span>
                </div>
                <div className="entertain inf">
                  <i className="far fa-columns" />
                  <span>Sun Deck, Kitchen ...</span>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="img">
                <img src="./Imgs/b003.jpg" alt="Boat" />
              </div>
              <div className="info flex-between">
                <a href="#" className="name">
                  Sea Senora
                </a>
                <div className="price">
                  <span className="currency">$450</span>
                  <span className="duration">Per Day</span>
                </div>
              </div>
              <div className="data flex-between">
                <div className="guest inf">
                  <i className="fas fa-user" />
                  <span>12 Guests</span>
                </div>
                <div className="beds inf">
                  <i className="fas fa-bed" />
                  <span> 2 Master Bedroom </span>
                </div>
                <div className="feets inf">
                  <i className="fas fa-arrows-h" />
                  <span> 44 Feet</span>
                </div>
                <div className="entertain inf">
                  <i className="far fa-columns" />
                  <span>Sun Deck, Kitchen ...</span>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="img">
                <img src="./Imgs/b004.jpg" alt="Boat" />
              </div>
              <div className="info flex-between">
                <a href="#" className="name">
                  Fish Tales
                </a>
                <div className="price">
                  <span className="currency">$160</span>
                  <span className="duration">Per Day</span>
                </div>
              </div>
              <div className="data flex-between">
                <div className="guest inf">
                  <i className="fas fa-user" />
                  <span>12 Guests</span>
                </div>
                <div className="beds inf">
                  <i className="fas fa-bed" />
                  <span> 2 Master Bedroom </span>
                </div>
                <div className="feets inf">
                  <i className="fas fa-arrows-h" />
                  <span> 44 Feet</span>
                </div>
                <div className="entertain inf">
                  <i className="far fa-columns" />
                  <span>Sun Deck, Kitchen ...</span>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="img">
                <img src="./Imgs/b005.jpg" alt="Boat" />
              </div>
              <div className="info flex-between">
                <a href="#" className="name">
                  Island Time
                </a>
                <div className="price">
                  <span className="currency">$150</span>
                  <span className="duration">Per Day</span>
                </div>
              </div>
              <div className="data flex-between">
                <div className="guest inf">
                  <i className="fas fa-user" />
                  <span>12 Guests</span>
                </div>
                <div className="beds inf">
                  <i className="fas fa-bed" />
                  <span> 2 Master Bedroom </span>
                </div>
                <div className="feets inf">
                  <i className="fas fa-arrows-h" />
                  <span> 44 Feet</span>
                </div>
                <div className="entertain inf">
                  <i className="far fa-columns" />
                  <span>Sun Deck, Kitchen ...</span>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="img">
                <img src="./Imgs/b006.jpg" alt="Boat" />
              </div>
              <div className="info flex-between">
                <a href="#" className="name">
                  Cozmic Sunny
                </a>
                <div className="price">
                  <span className="currency">$470</span>
                  <span className="duration">Per Day</span>
                </div>
              </div>
              <div className="data flex-between">
                <div className="guest inf">
                  <i className="fas fa-user" />
                  <span>12 Guests</span>
                </div>
                <div className="beds inf">
                  <i className="fas fa-bed" />
                  <span> 2 Master Bedroom </span>
                </div>
                <div className="feets inf">
                  <i className="fas fa-arrows-h" />
                  <span> 44 Feet</span>
                </div>
                <div className="entertain inf">
                  <i className="far fa-columns" />
                  <span>Sun Deck, Kitchen ...</span>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="img">
                <img src="./Imgs/y007.jpg" alt="Boat" />
              </div>
              <div className="info flex-between">
                <a href="#" className="name">
                  Fast Serenity
                </a>
                <div className="price">
                  <span className="currency">$155</span>
                  <span className="duration">Per Day</span>
                </div>
              </div>
              <div className="data flex-between">
                <div className="guest inf">
                  <i className="fas fa-user" />
                  <span>12 Guests</span>
                </div>
                <div className="beds inf">
                  <i className="fas fa-bed" />
                  <span> 2 Master Bedroom </span>
                </div>
                <div className="feets inf">
                  <i className="fas fa-arrows-h" />
                  <span> 44 Feet</span>
                </div>
                <div className="entertain inf">
                  <i className="far fa-columns" />
                  <span>Sun Deck, Kitchen ...</span>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="img">
                <img src="./Imgs/y008.jpg" alt="Boat" />
              </div>
              <div className="info flex-between">
                <a href="#" className="name">
                  Cozmic Sunny
                </a>
                <div className="price">
                  <span className="currency">$230</span>
                  <span className="duration">Per Day</span>
                </div>
              </div>
              <div className="data flex-between">
                <div className="guest inf">
                  <i className="fas fa-user" />
                  <span>12 Guests</span>
                </div>
                <div className="beds inf">
                  <i className="fas fa-bed" />
                  <span> 2 Master Bedroom </span>
                </div>
                <div className="feets inf">
                  <i className="fas fa-arrows-h" />
                  <span> 44 Feet</span>
                </div>
                <div className="entertain inf">
                  <i className="far fa-columns" />
                  <span>Sun Deck, Kitchen ...</span>
                </div>
              </div>
            </div>
          </article>
          <button>
            <a href="html/boat-list2.html">VIEW ALL BOATS</a>
          </button>
        </div>
      </section>
      {/* end Fleet section */}
      {/* start deal of the week */}
      <section className="deal">
        <div className="container">
          <article className="day-deal flex-between">
            <img src="./Imgs/deal-weak.jpg" alt="Deal" />
            <article className="deal-content">
              <span className="head">Deal Of The Week</span>
              <p className="boat-name">
                DayDream Boat <span>Rent For $800 / HRS</span>
              </p>
              <p className="boat-data">
                Builder /Model: French Waves | Type/Year: House Boat 2019 |
                Length: 105 FT 32 M Charter Guests: 200 | Crew Members: 6
              </p>
              <i className="fas fa-phone-alt" />
              <span>
                Booking a Charter Boat
                <span className="number">+1 755 302 8549</span>
              </span>
            </article>
          </article>
          <section className="services-done">
            <div className="box-holder">
              <div className="box">
                <img src="./Imgs/man.png" alt="img" />
                <span className="counter" data-target={220}>
                  {" "}
                  0{" "}
                </span>
                <p>Travel Destinations Offered</p>
              </div>
              <div className="box">
                <img src="./Imgs/tara.png" alt="img" />
                <span className="counter" data-target={315}>
                  {" "}
                  0
                </span>
                <p>Travel Destinations Offered</p>
              </div>
              <div className="box">
                <img src="./Imgs/Umbrella.png" alt="img" />
                <span className="counter" data-target={500}>
                  {" "}
                  0
                </span>
                <p>Travel Destinations Offered</p>
              </div>
              <div className="box">
                <img src="./Imgs/new.png" alt="img" />
                <span className="counter" data-target={640}>
                  0
                </span>
                <p>Travel Destinations Offered</p>
              </div>
            </div>
          </section>
        </div>
      </section>
      {/* end deal of the week */}
      {/* start premium boats */}
      <section className="premium">
        <article className="holder flex-between">
          <div className="rental-text">
            <h2>
              Premium Boat
              <br />
              Rental Services
            </h2>
            <img src="./Imgs/decore01.png" alt="img" />
            <p>
              Eorem ipsum dolor amet consectetur sed adipisicing elit sed
              eiusmod tempor et dolore magna aliqua minim veniam, quis nostrud
              exercitation aliquip ex ea consequat duis aute irure dolorin.
            </p>
            <a href="#">VIEW MORE</a>
          </div>
          <div className="rental-options">
            <div className="main-holder">
              <div className="options-holder">
                <div className="opt">
                  <div className="option-img">
                    <img src="./Imgs/offers2.jpg" alt="Option" />
                  </div>
                  <h3>Water Sports Boat</h3>
                  <img src="./Imgs/decore01.png" alt="img" />
                  <p>
                    Adipisicing eiusmod tempor incidids labore dolore magna
                    aliqa ust enim ad minim veniams quis nostrs sed citation
                    ullam coy laboris nisit.
                  </p>
                </div>
                <div className="opt">
                  <div className="option-img">
                    <img src="./Imgs/offers3.jpg" alt="Option" />
                  </div>
                  <h3>Corporate Events</h3>
                  <img src="./Imgs/decore01.png" alt="img" />
                  <p>
                    Adipisicing eiusmod tempor incidids labore dolore magna
                    aliqa ust enim ad minim veniams quis nostrs sed citation
                    ullam coy laboris nisit.
                  </p>
                </div>
                <div className="opt">
                  <div className="option-img">
                    <img src="./Imgs/offers4.jpg" alt="Option" />
                  </div>
                  <h3>Family Gathering</h3>
                  <img src="./Imgs/decore01.png" alt="img" />
                  <p>
                    Adipisicing eiusmod tempor incidids labore dolore magna
                    aliqa ust enim ad minim veniams quis nostrs sed citation
                    ullam coy laboris nisit.
                  </p>
                </div>
                <div className="opt">
                  <div className="option-img">
                    <img src="./Imgs/offers2.jpg" alt="Option" />
                  </div>
                  <h3>Family Gathering</h3>
                  <img src="./Imgs/decore01.png" alt="img" />
                  <p>
                    Adipisicing eiusmod tempor incidids labore dolore magna
                    aliqa ust enim ad minim veniams quis nostrs sed citation
                    ullam coy laboris nisit.
                  </p>
                </div>
              </div>
            </div>
            <button className="arrow right">
              <i className="fa-solid fa-chevron-right" />
            </button>
            <button className="arrow left">
              <i className="fa-solid fa-chevron-left" />
            </button>
          </div>
        </article>
      </section>
      {/* start plan your next tour */}
      <section className="plan-tour">
        <div className="container flex-between">
          <article className="text-us">
            <img src="./Imgs/decore01.png" alt="Img" />
            <span>
              Give us a call or drop an email, We endeavor to answer within 24
              hours
            </span>
            <h3>
              We’ve Exclusive Boats With Charter Offers
              <br />
              <span className="bold-head">
                LET’S PLAN YOUR NEXT <span className="lux">Luxury</span> TOUR!
              </span>
            </h3>
            <div className="phone">
              <i className="fa-solid fa-phone" />
              <span>
                Call Us Today: <a href="tel:+1 755 302 8549">1 755 302 8549</a>
              </span>
            </div>
            <div className="e-mail">
              <i className="fa-solid fa-envelope" />
              <span>
                E-mail:
                <a href="mailto:support@my-domain.com">support@my-domain.com</a>
              </span>
            </div>
          </article>
          <div className="play">
            <button className="play-video flex-center" id="play-video">
              <i className="fa-solid fa-play" />
            </button>
          </div>
        </div>
        <div className="popup" id="popup">
          <div className="main-holder">
            <p className="close" id="closePop">
              X
            </p>
            <div className="video-holder">
              <iframe
                src="https://www.youtube.com/embed/FZaoZEUVRFI"
                title="TOUR INSANE 350ft Luxury YACHT designed by 1.61 London - A mansion on the water"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen=""
              />
            </div>
          </div>
        </div>
        <div className="styling top" />
      </section>
      {/* end plan your next tour */}
      {/* start picture gallery */}
      <section className="gallery">
        <article className="special-head">
          <h1>Picture Gallery</h1>
          <p>
            Dolore magna aliqua enim ad minim veniam, quis nostrud exercitation
            aliquip duis aute irure dolorin reprehenderits vol dolore fugiat
            nulla pariatur excepteur sint occaecat cupidatat.
          </p>
          <img src="./Imgs/decoreGold.png" alt="Img" />
        </article>
        <article className="imgs-holder">
          <div className="img small left-corner">
            <img src="./Imgs/gal001.jpg" alt="img" />
            <i className="fa-solid fa-magnifying-glass zoom" />
          </div>
          <div className="img small">
            <img src="./Imgs/gal003.jpg" alt="img" />
            <i className="fa-solid fa-magnifying-glass zoom" />
          </div>
          <div className="img xsmall">
            <img src="./Imgs/gal009.jpg" alt="img" />
            <i className="fa-solid fa-magnifying-glass zoom" />
          </div>
          <div className="img Med right-corner">
            <img src="./Imgs/gal005.jpg" alt="img" />
            <i className="fa-solid fa-magnifying-glass zoom" />
          </div>
          <div className="img Large left-corner">
            <img src="./Imgs/gal006.jpg" alt="img" />
            <i className="fa-solid fa-magnifying-glass zoom" />
          </div>
          <div className="img xsmall">
            <img src="./Imgs/gal008.jpg" alt="img" />
            <i className="fa-solid fa-magnifying-glass zoom" />
          </div>
          <div className="img small">
            <img src="./Imgs/gal007.jpg" alt="img" />
            <i className="fa-solid fa-magnifying-glass zoom" />
          </div>
          <div className="img xsmall right-corner">
            <img src="./Imgs/offers4.jpg" alt="img" />
            <i className="fa-solid fa-magnifying-glass zoom" />
          </div>
        </article>
      </section>
      {/* end picture gallery */}
      {/* start booking form */}
      <section className="booking" id="book-now">
        <div className="container flex-start">
          <article className="book-form">
            <div className="book-head">
              <h1>Booking Form</h1>
              <p>
                Dolore magna aliqua enim ad minim veniam, quis
                nostrudreprehenderits dolore fugiat nulla pariatur lorem ipsum
                dolor sit amet.
              </p>
              <img src="./Imgs/decoreGold.png" alt="Img" />
            </div>
            <form action="" method="" className="flex-between">
              <input
                type="text"
                placeholder="First Name"
                className="half name"
                required=""
              />
              <input
                type="text"
                placeholder="Last Name"
                className="half name"
                required=""
              />
              <input
                type="email"
                placeholder="Email"
                className="half"
                required=""
              />
              <input
                type="text"
                placeholder="Phone"
                className="half phone"
                required=""
              />
              <input
                type="text"
                placeholder="Subject"
                className="subject full"
                required=""
              />
              <textarea
                name="Message"
                id="Message"
                placeholder="Message"
                rows={6}
                className="full"
                required=""
                defaultValue={""}
              />
              <input
                type="submit"
                name="submit"
                id="submit"
                defaultValue="SUBMIT"
                className="main full"
              />
            </form>
          </article>
          <article className="FAQ">
            <div className="book-head">
              <h1>Boat Rental FAQ’s</h1>
              <p>
                Dolore magna aliqua enim ad minim veniam, quis
                nostrudreprehenderits dolore fugiat nulla pariatur lorem ipsum
                dolor sit amet.
              </p>
              <img src="./Imgs/decoreGold.png" alt="Img" />
            </div>
            <article className="FAQ-holder">
              <div className="question-holder">
                <span className="question">
                  <span>How to book a yacht/boat from Nevica?</span>
                </span>
                <div className="answer">
                  <p>
                    Quis nostrud exercitate laboridy aliquip duis irure sed
                    dolor ipsum excpture fugiat estan veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex velit esse
                    cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
              </div>
              <div className="question-holder">
                <span className="question">
                  <span>
                    {" "}
                    What are the safety precautions mentioned by you?
                  </span>
                </span>
                <div className="answer">
                  <p>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson
                  </p>
                </div>
              </div>
              <div className="question-holder">
                <span className="question">
                  <span>
                    {" "}
                    What if the weather gets unfavourable for boating?
                  </span>
                </span>
                <div className="answer">
                  <p>
                    truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                    tempor, sunt aliqua put a bird on it squid single-origin
                    coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson Anim pariatur
                    cliche reprehenderit, enim eiusmod high life accusamus terry
                    richardson ad squid. 3 wolf moon officia aute, non cupidatat
                    skateboard dolor brunch.
                  </p>
                </div>
              </div>
              <div className="question-holder">
                <span className="question">
                  <span>Can i bring my own food or drinking water?</span>
                </span>
                <div className="answer">
                  <p>
                    Nliche reprehenderit, enim eiusmod high life accusamus terry
                    richardson ad squid. 3 wolf moon officia aute, non cupidatat
                    skateboard dolor brunch. Food truck quinoa nesciunt laborum
                    eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                    on it squid single-origin coffee nulla assumenda shoreditch
                    et. Nihil anim keffiyeh helvetica, craft beer labore wes
                    anderson
                  </p>
                </div>
              </div>
            </article>
          </article>
        </div>
      </section>
      {/* end booking form */}
      {/* start what people says */}
      <section className="people-says">
        <div className="head">
          <h2>What People Says..</h2>
          <img src="./Imgs/decoreGold.png" alt="img" />
        </div>
        <article className="reviews-container">
          <div className="slider">
            <div className="review">
              <img src="./Imgs/avatar.jpg" alt="Client" />
              <blockquote>
                Exercit ullamco laboris nisiut aliquip ex ea com irure dolor
                reprehs tempor incididunt ut labore dolore magna aliqua quis
                nostrud sed exercitation ullamco laboris nisiut duis aute irure
                sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </blockquote>
              <div className="client-name">
                <p>John Doe</p>
                <span>Client</span>
              </div>
            </div>
            <div className="review">
              <img src="./Imgs/avatar.jpg" alt="Client" />
              <blockquote>
                Exercit ullamco laboris nisiut aliquip ex ea com irure dolor
                reprehs tempor incididunt ut labore dolore magna aliqua quis
                nostrud sed exercitation ullamco laboris nisiut duis aute irure
                sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </blockquote>
              <div className="client-name">
                <p>John Doe</p>
                <span>Client</span>
              </div>
            </div>
          </div>
        </article>
      </section>
      {/* end what people says */}
      {/* start industry news */}
      <section className="news" id="news">
        <article className="special-head">
          <h1>Industry News</h1>
          <p>
            Dolore magna aliqua enim ad minim veniam, quis nostrud exercitation
            aliquip duis aute irure dolorin reprehenderits vol dolore fugiat
            nulla pariatur excepteur sint occaecat cupidatat.
          </p>
          <img src="./Imgs/decore-blue.png" alt="Img" />
        </article>
        <div className="container">
          <div className="col">
            <div className="pic">
              <img src="./Imgs/sailing-on-vacation-EUT5FWG.jpg" alt="img" />
            </div>
            <span className="date">
              June 15, 2020 by <span> Nevica </span>
            </span>
            <div className="data">
              <h2>
                <a href="#">
                  Corporate yacht for smooth running of main events
                </a>
              </h2>
              <p>
                Aiusmod tempor incididunt labore dolore magna ust enim sed
                veniams quis nostrud.
              </p>
            </div>
            <a href="#" className="more">
              Read More
            </a>
          </div>
          <div className="col">
            <div className="pic">
              <img src="./Imgs/326576456534.jpg" alt="img" />
            </div>
            <span className="date">
              June 12, 2020 by <span> Nevica </span>
            </span>
            <div className="data">
              <h2>
                <a href="#">
                  The Best staff members for your service available
                </a>
              </h2>
              <p>
                Aiusmod tempor incididunt labore dolore magna ust enim sed
                veniams quis nostrud.
              </p>
            </div>
            <a href="#" className="more">
              Read More
            </a>
          </div>
          <div className="col">
            <div className="pic">
              <img src="./Imgs/sailing-on-vacation-EUT5FWG34.jpg" alt="img" />
            </div>
            <span className="date">
              June 3, 2020 by <span> Nevica </span>
            </span>
            <div className="data">
              <h2>
                <a href="#">Don’t worry about comfort and company facilities</a>
              </h2>
              <p>
                Aiusmod tempor incididunt labore dolore magna ust enim sed
                veniams quis nostrud.
              </p>
            </div>
            <a href="#" className="more">
              Read More
            </a>
          </div>
        </div>
      </section>
      <div className="winners">
        <img src="./Imgs/Awards.jpg" alt="img" />
      </div>
      {/* end industry news */}
      {/* start footer */}
      <footer>
        <div className="container">
          <div className="col">
            <a href="#">
              {" "}
              <img src="./Imgs/logo-light.png" alt="Logo" />
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
      {/* end footer */}
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
