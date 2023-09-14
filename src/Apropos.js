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
          <div className="skills text-center mb-5 mt-2">
            {" "}
            <div className="row">
              <div className="col">
                <div className="row">
                  <i className="fa-brands fa-react react icn"></i>
                </div>
                <div className="row text-center">React.js</div>
              </div>
              <div className="col">
                <div className="row">
                  <i className="fa-brands fa-js js"></i>{" "}
                </div>
                <div className="row">JavaScript</div>
              </div>
              <div className="col">
                <div className="row">
                  <i className="fa-brands fa-bootstrap bootstrap icn"></i>
                </div>
                <div className="row">Bootstrap</div>
              </div>
              <div className="col">
                <div className="row">
                  <div className="col">
                    <img
                      alt="Responsive"
                      className="false responsive icn"
                      src={responsive}
                    ></img>
                  </div>
                </div>
                <div className="row">Responsive development</div>
              </div>
              <div className="col">
                <div className="row">
                  <i className="fa-brands fa-git-alt git icn"></i>
                </div>

                <div className="row">Git</div>
              </div>
            </div>{" "}
          </div>
          <span className="skill-title">Web design</span>
          <div className="skills text-center mt-2">
            {" "}
            <div className="row">
              <div className="col">
                <div className="row">
                  <i className="fa-brands fa-figma icn"></i>
                </div>
                <div className="row text-center">Figma</div>
              </div>
              <div className="col">
                <div className="row">
                  <div className="col">
                    <img
                      alt="illustrator"
                      className="false responsive icn"
                      src={illustrator}
                    ></img>
                  </div>
                </div>
                <div className="row">Adobe Illustrator</div>
              </div>
              <div className="col">
                <div className="row">
                  <div className="col">
                    <img
                      alt="Affinity Designer 2"
                      className="false responsive icn"
                      src={designer}
                    ></img>
                  </div>
                </div>
                <div className="row">Affinity Designer 2</div>
              </div>
              <div className="col">
                <div className="row">
                  <div className="col">
                    <img
                      alt="Procreate"
                      className="false responsive icn"
                      src={procreate}
                    ></img>
                  </div>
                </div>
                <div className="row">Procreate</div>
              </div>
            </div>
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
