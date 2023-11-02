import React from "react";

import "./Home.css";

export default function Accueil(props) {
  function toProjets(event) {
    event.preventDefault();
    props.setSite("projets");
  }
  function toApropos(event) {
    event.preventDefault();
    props.setSite("apropos");
  }
  return (
    <div className="Home container">
      <h1>Laia</h1>
      <h2>Développeuse Front-end en Suisse</h2>
      <div className="intro-links mt-4">
        <a
          href="/"
          title="Check out my portfolio"
          className="link me-3 work hover-underline-animation"
          onClick={toProjets}
        >
          mes projets
        </a>
        <a
          href="/about.html"
          title="Learn more about me"
          className="link ms-3 about hover-underline-animation"
          onClick={toApropos}
        >
          à propos de moi
        </a>
      </div>
    </div>
  );
}
