import React from "react";
import "./NavigationBar.css";

export default function NavigationBar(props) {
  function toFrench(event) {
    event.preventDefault();
    props.setLanguage("French");
  }
  function toHome(event) {
    event.preventDefault();
    props.setPage("home");
  }
  function toAbout(event) {
    event.preventDefault();
    props.setPage("about");
  }
  function toWork(event) {
    event.preventDefault();
    props.setPage("work");
  }

  function toContact(event) {
    event.preventDefault();
    props.setPage("about");

    if (props.page === "about") {
      const contact = document.getElementById("contactme");
      contact.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <nav className="NavigationBar navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/" onClick={toHome}>
          Laia Castilla i Amorós
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a
              className="nav-link"
              aria-current="page"
              href="/"
              title="Homepage"
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
              onClick={toHome}
              id="home_page"
            >
              Home
            </a>
            <a
              className="nav-link "
              href="/"
              title="About Laia"
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
              onClick={toAbout}
              id="about_page"
            >
              About
            </a>
            <a
              className="nav-link"
              href="/work.html"
              title="Portfolio"
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
              onClick={toWork}
              id="work_page"
            >
              Work
            </a>
            <a
              className="nav-link"
              href="./About#contactme"
              title="Contact Laia"
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
              onClick={toContact}
            >
              Contact
            </a>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                English
              </a>
              <ul className="dropdown-menu  dropdown-menu-dark">
                <li>
                  <a
                    className="dropdown-item nav-link"
                    href="/"
                    onClick={toFrench}
                    title="Change to French"
                  >
                    Français
                  </a>
                </li>
              </ul>
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
}
