import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState, useEffect } from "react";

function NavBarBootstrap() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);
  return (
    <Navbar
      fixed="top"
      expand="lg"
      className={scroll ? "claro p-4" : "blue p-4"}
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            className="logo"
            src={scroll ? "/Imgs/logo-dark.png" : "/Imgs/logo-light.png"}
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle className="border-0 ">
          <i className="fa-solid fa-bars bars-icon burger-icon text-white sizeBurguer"></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end" style={{ width: "100%" }}>
            <Nav.Link href="#link">
              {" "}
              <a
                className="list-item text-white aBootstrap"
                href="html/about-us.html"
              >
                HOME
              </a>
            </Nav.Link>
            <Nav.Link href="#link">
              {" "}
              <a className="list-item  aBootstrap" href="html/about-us.html">
                ABOUT US
              </a>
            </Nav.Link>
            <Nav.Link href="#link">
              {" "}
              <a className="list-item  aBootstrap" href="html/about-us.html">
                OUR FLEET
              </a>
            </Nav.Link>
            <Nav.Link href="#link">
              {" "}
              <a className="list-item  aBootstrap" href="html/about-us.html">
                OUR TOURS
              </a>
            </Nav.Link>
            <Nav.Link href="#link">
              {" "}
              <a className="list-item  aBootstrap" href="html/about-us.html">
                NEWS
              </a>
            </Nav.Link>
            <Nav.Link href="#link">
              {" "}
              <a className="list-item  aBootstrap" href="html/about-us.html">
                CONTACT
              </a>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarBootstrap;
