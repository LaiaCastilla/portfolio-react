import React from "react";

import responsive from "./images/responsive.png";
import cv from "./images/CV-LaiaCastilla.pdf";
import laia from "./images/laia.jpeg";

import "./About.css";

export default function About(props) {
  function toWork(event) {
    event.preventDefault();
    props.setPage("work");
  }
  return (
    <div className="About container">
      <div className="about-me">
        <div className="row mb-5">
          <div className="col-lg">
            <h1 className="mb-4">
              ¡Hola!
              <div className="d-lg-none"></div> I'm Laia
            </h1>
            <h2 className="mb-4">
              <strong>A junior front-end developer based in Swizerland</strong>
            </h2>
            <p className="about-me-text">
              I’m currently seeking new opportunities in front-end development.
              I’m open to work onsite and remotely. Trained in React, I am
              always trying to deepen my knowledge and expand my programming.
              <br />
              Originally from Barcelona, after having studied in Switzerland I
              am now established in Geneva.
            </p>
            <div className="about-me-links">
              <span className="intro-links mt-4">
                <a
                  href="/"
                  onClick={toWork}
                  className="link me-3 work hover-underline-animation"
                >
                  see my projects
                </a>
              </span>
              <span className="intro-links mt-4">
                <a
                  href={cv}
                  className="link me-3 work hover-underline-animation"
                  target="_blank"
                  rel="noreferrer"
                >
                  see my CV
                </a>
              </span>
            </div>
          </div>
          <div className="col d-none d-lg-block">
            <img
              src={laia}
              alt="It's a me in Miyashima island, Japan"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <div id="contact">
        <h2 className="secondary-title">My skillset</h2>
        <p className="about-me-text">
          VsCode, MacOS, GitHub <br />
          Front-end dev:
          <div className="skills d-flex ">
            {" "}
            <i class="fa-brands fa-react react"></i>{" "}
            <i class="fa-brands fa-js js"></i>{" "}
            <i class="fa-brands fa-bootstrap bootstrap"></i>{" "}
            <img
              alt="Responsive"
              class="false responsive"
              src={responsive}
            ></img>
          </div>
          Web design:
          <div className="skills d-block d-md-flex">
            <span>Figma</span> <span>Adobe Illustrator</span>{" "}
            <span>Affinity Designer 2</span> <span>Procreate</span>
          </div>
          <div>
            {" "}
            You can talk to me in: English, French, Spanish & Catalan. I am
            currently learning Japanese(A2.1)
          </div>
        </p>

        <h2 className="secondary-title mt-5" id="contactme">
          Let's get in touch!
        </h2>
        <p className="about-me-text">
          I'm currently looking for my first job opportunity as a front-end
          developer so I'm very excited about getting involved in new projects.
          <br />
          <strong>
            Send me an email or contact me via any of my social media
          </strong>{" "}
          if you'd like to work together or just want to say hi!
        </p>
      </div>
    </div>
  );
}
