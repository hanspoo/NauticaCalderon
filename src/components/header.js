export default function Header() {
  return (
    <header className="scroll-event">
      <div className="container flex-between">
        <article className="data flex-between">
          <div className="phone">
            <i className="fa-solid fa-phone" />
            <span>
              {" "}
              teléfono: <a href="tel:+56932082293">+56 9 3208 2293</a>
            </span>
          </div>
          <div className="Email">
            <i className="fa-solid fa-envelope" />
            <span>
              Email:
              <a href="mailto:support@example.com">poowebcorp@gmail.com</a>
            </span>
          </div>
        </article>
        {/* <article className="social">
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
        </article> */}
      </div>
    </header>
  );
}
