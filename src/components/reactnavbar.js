import { useState } from "react";

export default function ReactNavBar() {
  const [expandedActivo, setExpandedActivo] = useState("");
  const [mostrar, setMostrar] = useState(true);

  const mostrarAnimado = () => {
    mostrar
      ? setExpandedActivo(
          (expandedActivo = "expandedactivo"),
          setMostrar((mostrar) => !mostrar)
        )
      : "";
  };

  return (
    <nav className="navbar navbar-expand-lg flex-between reactnav centernav w-100">
      <a href="/index.html">
        <img src="/Imgs/logo-light.png" alt="Logo" className="logo" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => {
          mostrarAnimado();
        }}
      >
        {expandedActivo != null && (
          <div className={`${expandedActivo} expanded`}></div>
        )}

        <span className="fa-solid fa-bars bars-icon burguer burger-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link reactnavlinks" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link reactnavlinks" href="#">
              Link
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0"></form>
      </div>
    </nav>
  );
}
