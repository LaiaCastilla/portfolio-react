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
                Mon premier "vrai" projet... J'ai créé une application météo en
                Vanilla JavaScript dans le cadre de SheCodes Plus, un atelier de
                codage JavaScript avancé de 8 semaines. En m'appuyant sur les
                connaissances que j'avais déjà acquises, j'ai également acquis
                des compétences en Bootstrap, API, hébergement de sites web et
                JavaScript avancé. À l'aide de Procreate, j'ai créé les icônes
                météo ainsi que l'arrière-plan. J'ai combiné toutes ces
                compétences pour créer une application météo entièrement
                fonctionnelle. Les icônes et l'arrière-plan changent pendant la
                nuit. Essayez-le !
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
                d'horloge mondiale en Vanilla JavaScript. Ce projet a également
                été construit avec Bootstrap, intégration d'API, hébergement des
                sites web et JavaScript avancé. Salvador Dalí et le concept
                impalpable du temps m'ont inspiré pour l'arrière-plan de
                l'application, que j'ai dessiné avec Procreate. 
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
                Un site web moins complexe présentant une belle destination de
                voyage. Complètement réactif, il a été réalisé avec du HTML et
                du CSS plus avancés que les deux précédents. Il comprend de
                nombreux liens HTML et est compatible avec SEO. Il s'agit d'une
                page d'atterrissage joliment conçue et bien exécutée, avec des
                informations utiles et des liens fonctionnels. Jetez-y un coup
                d'œil si vous envisagez de visiter le Japon !
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
                Un peu comme pour mon premier projet, cette fois-ci je me suis
                plongé dans le développement React. J'ai combiné toutes mes
                connaissances acquises précédemment et ce framework très demandé
                pour construire une application météo fonctionnelle intégrant
                les meilleures pratiques de codage, ainsi que les outils et
                technologies les plus populaires.
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
                En consolidant mes compétences en matière du framework React,
                j'ai créé cette application dictionnaire minimaliste et
                élégante. Complètement fonctionnelle et visuellement agréable,
                sa réalisation a été une grande expérience d'apprentissage.
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
