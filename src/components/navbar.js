export default function NavBar() {
  return (
    <nav className="flex-between scroll-event">
      <a href="./index.html">
        <img src="./Imgs/logo-light.png" alt="Logo" className="logo" />
      </a>
      <i className="fa-solid fa-bars bars-icon burger-icon" />
      <div className="links scroll-event">
        <ul className="main-list">
          <li>
            <a className="list-item active" href="./index.html">
              Inicio
            </a>
          </li>
          <li>
            <a className="list-item" href="html/about-us.html">
              Sobre Nosotros
            </a>
          </li>
          <li>
            <a className="list-item" href="#fleet">
              Nuestras Lanchas
            </a>
          </li>

          <li>
            <a className="list-item" href="html/contact-us.html">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
