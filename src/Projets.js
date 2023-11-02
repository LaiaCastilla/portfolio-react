import React from "react";

import weatherapp from "./images/weatherapp.png";
import worldclock from "./images/worldclock.png";
import yakushima from "./images/YakushimaTravel.png";
import reactweather from "./images/reactweather.png";
import dictionary from "./images/dictionary.png";
import "./Work.css";

export default function Projets(props) {
  function toApropos(event) {
    event.preventDefault();
    props.setSite("apropos");
  }
  return (
    <div className="Work container">
      <h1 className="secondary-title mt-5 mb-5">Mon portfolio</h1>
      <div className="work-portfolio">
        <div className="row mb-5">
          <div className="col-md-6">
            <img
              src={weatherapp}
              alt="weather application"
              className="img-fluid rounded"
            />
          </div>

          <div className="col-md-6">
            <div className="project-description weather">
              <h2 className="mb-3">Application météo</h2>
              <p>
                J'ai créé cette application météo en Vanilla JavaScript dans le
                cadre de SheCodes Plus, un atelier de codage JavaScript avancé
                de 8 semaines. Ceci m'a permis de renforcer mes compétences en
                Bootstrap, API, hébergement de sites web et JavaScript avancé. À
                l'aide de Procreate, j'ai créé les icônes météo ainsi que
                l'arrière-plan, qui s’adaptent en fonction de l’heure locale de
                la ville consultée.
              </p>
              <div className="btn">
                <a
                  href="https://weatherapplca.netlify.app"
                  className="launch-link"
                  target="_blank"
                  rel="noreferrer"
                  title="Check out the weather in your city!"
                >
                  <i className="fa-regular fa-window-restore"></i> Lancer
                </a>
              </div>
              <div className="btn">
                <a
                  href="https://github.com/Aylhenia/Vanilla-Weather-App"
                  className="launch-link"
                  target="_blank"
                  rel="noreferrer"
                  title="Check out the code"
                >
                  <i className="fa-solid fa-code code-icon"></i> Code
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-6 order-md-2">
            <img
              src={worldclock}
              alt="World clock application"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6 order-md-1">
            <div className="project-description">
              <h2 className="mb-3">Horloge mondiale</h2>
              <p>
                Suite au projet ci-dessus, j'ai construit une application
                d'horloge mondiale en Vanilla JavaScript. Ce projet fait
                également usage de Bootstrap, Javascript et de requêtes API.
                Salvador Dalí et le concept impalpable du temps m'ont inspiré
                pour l'arrière-plan de l'application, que j'ai dessiné avec
                Procreate.
              </p>
              <div className="btn">
                <a
                  href="https://worldclocklca.netlify.app"
                  className="launch-link"
                  target="_blank"
                  rel="noreferrer"
                  title="Check out this world clock application"
                >
                  <i clasName="fa-regular fa-window-restore"></i> Lancer
                </a>
              </div>
              <div className="btn">
                <a
                  href="https://github.com/Aylhenia/World-Clock-Project"
                  className="launch-link"
                  target="_blank"
                  rel="noreferrer"
                  title="Check out the code"
                >
                  <i className="fa-solid fa-code code-icon"></i> Code
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-md-6">
            <img
              src={yakushima}
              alt="Drawing app"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6">
            <div className="project-description">
              <h2 className="mb-3">Projet de voyage</h2>
              <p>
                Un page d'atterrissage présentant une belle destination de
                voyage. Complètement responsive, il a été réalisé avec du HTML
                et du CSS plus avancés que les deux précédents, et utilise des
                technique SEO pour améliorer le référencement.
              </p>
              <div className="btn">
                <a
                  href="https://yakushima-travel.netlify.app/"
                  className="launch-link"
                  target="_blank"
                  rel="noreferrer"
                  title="Visit this drawing application"
                >
                  <i className="fa-regular fa-window-restore"></i> Lancer
                </a>
              </div>
              <div className="btn">
                <a
                  href="https://github.com/Aylhenia/Yakushima-project"
                  className="launch-link"
                  target="_blank"
                  rel="noreferrer"
                  title="Check out the code"
                >
                  <i className="fa-solid fa-code code-icon"></i> Code
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-6 order-md-2">
            <img
              src={reactweather}
              alt="World clock application"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6 order-md-1">
            <div className="project-description">
              <h2 className="mb-3">Application météo React</h2>
              <p>
                Cette application est similaire à mon premier projet, mais je me
                suis cette fois-ci plongé dans le développement React. J'ai
                combiné toutes les connaissances acquises précédemment pour
                construire une application météo intégrant les meilleures
                pratiques de codage.
              </p>
              <div className="btn">
                <a
                  href="https://reactweatherapplicationlaia.netlify.app/"
                  className="launch-link"
                  target="_blank"
                  rel="noreferrer"
                  title="Check out this world clock application"
                >
                  <i className="fa-regular fa-window-restore"></i> Lancer
                </a>
              </div>
              <div className="btn">
                <a
                  href="https://github.com/Aylhenia/react-weather-app"
                  className="launch-link"
                  target="_blank"
                  rel="noreferrer"
                  title="Check out the code"
                >
                  <i className="fa-solid fa-code code-icon"></i> Code
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-6">
            <img
              src={dictionary}
              alt="Drawing app"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6">
            <div className="project-description">
              <h2 className="mb-3">Application dictionnaire</h2>
              <p>
                En consolidant mes compétences en React, j'ai créé cette
                application dictionnaire minimaliste et élégante, que j’espère
                aussi être visuellement agréable.
              </p>
              <div className="btn">
                <a
                  href="https://reactdictionarylaia.netlify.app/"
                  className="launch-link"
                  target="_blank"
                  rel="noreferrer"
                  title="Visit this dictionary application"
                >
                  <i className="fa-regular fa-window-restore"></i> Lancer
                </a>
              </div>
              <div className="btn">
                <a
                  href="https://github.com/Aylhenia/dictionary-project"
                  className="launch-link"
                  target="_blank"
                  rel="noreferrer"
                  title="Check out the code"
                >
                  <i className="fa-solid fa-code code-icon"></i> Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        className="work-inquiry hover-underline-animation"
        href="./About#contactme"
        title="Check out how to contact me"
        onClick={toApropos}
      >
        Travaillons ensemble !
      </a>
    </div>
  );
}
