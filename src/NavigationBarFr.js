import React from "react";

export default function NavigationBarFr(props) {
  function toEnglish(event) {
    event.preventDefault();
    props.setLanguage("English");
  }
  return (
    <nav className="NavigationBarFr navbar navbar-expand-lg navbar-dark">
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
            <a className="nav-link active" aria-current="page" href="/">
              Accueil
            </a>
            <a className="nav-link" href="/about.html" title="About Laia">
              À propos
            </a>
            <a className="nav-link" href="/work.html" title="Portfolio">
              Projets
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
              onClick={toEnglish}
              title="Montrer en Anglais"
            >
              English
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
