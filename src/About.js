import React from "react";

import responsive from "./images/responsive.png";
import illustrator from "./images/illustrator.png";
import designer from "./images/designer.svg";
import procreate from "./images/procreate.png";
import cven from "./images/CVen-LaiaCastilla.pdf";
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
              I’m open to work onsite and/or remotely. Trained in React, I am
              always trying to deepen my knowledge and expand my programming
              skills.
              <br />
              Originally from Barcelona, after having studied in Switzerland, I
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
                  href={cven}
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
        <h2 className="secondary-title text-center">My skillset</h2>
        <p className="about-me-text mt-4 text-center">
          <span className="skill-title">Front-end development</span>
          <div className="skills text-center mb-5 mt-2">
            {" "}
            <div className="row justify-content-center">
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
                <div className="row">Responsive</div>
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
            <div className="row justify-content-center">
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
                <div className="row">Affinity Designer</div>
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
          <strong>
            {" "}
            Send me an email or contact me via any of my social media
          </strong>{" "}
          if you'd like to work together or just want to say hi!
        </p>
      </div>
    </div>
  );
}
