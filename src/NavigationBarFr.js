import React from "react";

export default function NavigationBarFr(props) {
  function toEnglish(event) {
    event.preventDefault();
    props.setLanguage("English");
  }
  function toAccueil(event) {
    event.preventDefault();
    props.setSite("accueil");
  }
  function toApropos(event) {
    event.preventDefault();
    props.setSite("apropos");
  }
  function toProjets(event) {
    event.preventDefault();
    props.setSite("projets");
  }

  function toContact(event) {
    event.preventDefault();
    props.setSite("apropos");

    if (props.site === "apropos") {
      const contact = document.getElementById("contactme");
      contact.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <nav className="NavigationBarFr navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/" onClick={toAccueil}>
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
              title="Accueil"
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
              onClick={toAccueil}
              id="accueil_page"
            >
              Accueil
            </a>
            <a
              className="nav-link "
              href="/"
              title="À propos de Laia"
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
              onClick={toApropos}
              id="apropos_page"
            >
              À propos
            </a>
            <a
              className="nav-link"
              href="/work.html"
              title="Portfolio"
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
              onClick={toProjets}
              id="projets_page"
            >
              Projets
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
