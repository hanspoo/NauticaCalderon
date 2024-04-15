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
    </nav>
  );
}
