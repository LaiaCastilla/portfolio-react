import React from "react";

import responsive from "./images/responsive.png";
import illustrator from "./images/illustrator.png";
import designer from "./images/designer.svg";
import procreate from "./images/procreate.png";
import cvfr from "./images/CVfr-LaiaCastilla.pdf";
import laia from "./images/laia.jpeg";

import "./About.css";

export default function Apropos(props) {
  function toProjets(event) {
    event.preventDefault();
    props.setSite("projets");
  }
  return (
    <div className="About container">
      <div className="about-me">
        <div className="row mb-5">
          <div className="col-lg">
            <h1 className="mb-4">
              ¡Hola!
              <div className="d-lg-none"></div> C'est Laia
            </h1>
            <h2 className="mb-4">
              <strong>
                Une développeuse front-end junior installée en Suisse
              </strong>
            </h2>
            <p className="about-me-text">
              Je suis actuellement à la recherche de nouvelles opportunités dans
              le domaine du développement front-end. Je suis disponible pour
              travailler sur place et/ou à distance. Formée à React, je cherche
              toujours à approfondir mes connaissances et à élargir mes
              compétences en programmation. <br />
              Originaire de Barcelone, après avoir étudié en Suisse, je me suis
              établie à Genève.
            </p>
            <div className="about-me-links">
              <span className="intro-links mt-4">
                <a
                  href="/"
                  onClick={toProjets}
                  className="link me-3 work hover-underline-animation"
                >
                  mes projets
                </a>
              </span>
              <span className="intro-links mt-4">
                <a
                  href={cvfr}
                  className="link me-3 work hover-underline-animation"
                  target="_blank"
                  rel="noreferrer"
                >
                  mon CV
                </a>
              </span>
            </div>
          </div>
          <div className="col d-none d-lg-block">
            <img
              src={laia}
              alt="Moi sur l'île Miyashima, au Japon"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <div id="contact">
        <h2 className="secondary-title">Mes compétences</h2>
        <p className="about-me-text mt-4 text-center">
          <span className="skill-title">Développement front-end</span>
          <div className="skills  text-center mb-5 mt-2">
            {" "}
            <div class="row row-cols-5">
              <div class="col">
                <i class="fa-brands fa-react react icn"></i>
              </div>
              <div class="col">
                <i class="fa-brands fa-js js icn"></i>{" "}
              </div>
              <div class="col">
                <i class="fa-brands fa-bootstrap bootstrap icn"></i>{" "}
              </div>
              <div class="col">
                {" "}
                <img
                  alt="Responsive"
                  class="false responsive icn"
                  src={responsive}
                ></img>
              </div>
              <div class="col">
                <i class="fa-brands fa-git-alt git icn"></i>{" "}
              </div>
              <div class="col">React.js</div>
              <div class="col">JavaScript</div>
              <div class="col">Bootstrap</div>
              <div class="col">Responsive development</div>
              <div class="col">Git</div>
            </div>{" "}
          </div>
          <span className="skill-title">Web design</span>
          <div className="skills text-center mt-2">
            {" "}
            <div class="row row-cols-4">
              <div class="col">
                <i class="fa-brands fa-figma icn"></i>
              </div>
              <div class="col">
                {" "}
                <img
                  alt="illustrator"
                  class="false responsive icn"
                  src={illustrator}
                ></img>
              </div>
              <div class="col">
                {" "}
                <img
                  alt="Affinity Designer 2"
                  class="false responsive icn"
                  src={designer}
                ></img>
              </div>
              <div class="col">
                {" "}
                <img
                  alt="Procreate"
                  class="false responsive icn"
                  src={procreate}
                ></img>
              </div>
              <div class="col">Figma</div>
              <div class="col">Adobe Illustrator</div>
              <div class="col">Affinity Designer 2</div>
              <div class="col">Procreate</div>
            </div>{" "}
          </div>
          <div className="mt-5">
            {" "}
            On peut discuter en français, anglais, espagnol et catalan. Je suis
            aussi en train d'apprendre le japonais (A2.1)
          </div>
        </p>

        <h2 className="secondary-title mt-5" id="contactme">
          Contactez-moi !
        </h2>
        <p className="about-me-text">
          Je suis actuellement à la recherche d'un premier emploi en tant que
          développeuse front-end. Je suis donc très enthousiaste à l'idée de
          participer à de nouveaux projets.
          <br />
          <strong>
            Envoyez-moi un courriel ou contactez-moi via l'un de mes réseaux
            sociaux
          </strong>{" "}
          si vous souhaitez travailler ensemble, ou simplement me dire bonjour !
        </p>
      </div>
    </div>
  );
}