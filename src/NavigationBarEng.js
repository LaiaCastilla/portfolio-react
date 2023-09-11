import React from "react";
import "./NavigationBar.css";

export default function NavigationBar(props) {
  function toFrench(event) {
    event.preventDefault();
    props.setLanguage("French");
  }
  return (
    <nav className="NavigationBar navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
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
            <a className="nav-link" aria-current="page" href="/">
              Home
            </a>
            <a className="nav-link " href="/about.html" title="About Laia">
              About
            </a>
            <a className="nav-link" href="/work.html" title="Portfolio">
              Work
            </a>
            <a
              className="nav-link"
              href="/about.html#contact-me"
              title="Contact Laia"
            >
              Contact
            </a>
            <a
              className="nav-link"
              href="/"
              onClick={toFrench}
              title="Change to French"
            >
              Français
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
