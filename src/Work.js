import React from "react";

import weatherapp from "./images/weatherapp.png";
import worldclock from "./images/worldclock.png";
import yakushima from "./images/YakushimaTravel.png";
import reactweather from "./images/reactweather.png";
import dictionary from "./images/dictionary.png";
import "./Work.css";

export default function Work(props) {
  function toAbout(event) {
    event.preventDefault();
    props.setPage("about");
  }
  return (
    <div className="Work container">
      <h1 className="secondary-title mt-5 mb-5">Take a look at my portfolio</h1>
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
              <h2 className="mb-3">Weather App</h2>
              <p>
                I built a Vanilla JavaScript weather app in SheCodes Plus, an
                advanced 8-week JavaScript coding workshop. Building upon my
                previously-gained knowledge, I also became skilled in Bootstrap,
                API’s, real-life development workflow, hosting, and advanced
                JavaScript. Using Procreate, I created the weather icons as well
                as the background. Both the icons and the background change
                during the night-time.
              </p>
              <div className="btn">
                <a
                  href="https://weatherapplca.netlify.app"
                  className="launch-link"
                  target="_blank"
                  rel="noreferrer"
                  title="Check out the weather in your city!"
                >
                  <i className="fa-regular fa-window-restore"></i> Launch
                </a>
              </div>
              <div className="btn">
                <a
                  href="https://github.com/LaiaCastilla/Vanilla-Weather-App"
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
              <h2 className="mb-3">World Clock</h2>
              <p>
                Following the above project, I built a Vanilla JavaScript world
                clock app. This project was also built with Bootstrap, API’s,
                real-life development workflow, hosting, and advanced
                JavaScript. Salvador Dalí and the wild concept of time inspired
                me for the app's background, which I draw using Procreate.
              </p>
              <div className="btn">
                <a
                  href="https://worldclocklca.netlify.app"
                  className="launch-link"
                  target="_blank"
                  rel="noreferrer"
                  title="Check out this world clock application"
                >
                  <i clasName="fa-regular fa-window-restore"></i> Launch
                </a>
              </div>
              <div className="btn">
                <a
                  href="https://github.com/LaiaCastilla/World-Clock-Project"
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
              <h2 className="mb-3">Travel Project</h2>
              <p>
                A landing page showcasing a beautiful travel destination.
                Completely responsive, it was made with more advanced HTML and
                CSS than the previous two. SEO friendly, it includes multiple
                HTML embeds.
              </p>
              <div className="btn">
                <a
                  href="https://yakushima-travel.netlify.app/"
                  className="launch-link"
                  target="_blank"
                  rel="noreferrer"
                  title="Visit this drawing application"
                >
                  <i className="fa-regular fa-window-restore"></i> Launch
                </a>
              </div>
              <div className="btn">
                <a
                  href="https://github.com/LaiaCastilla/Yakushima-project"
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
              <h2 className="mb-3">React Weather App</h2>
              <p>
                This app is similar to my first project, but this time I
                immersed myself in React development. I combined all my
                previously acquired knowledge and this highly-demanded framework
                to build a working weather app incorporating coding best
                practices.
              </p>
              <div className="btn">
                <a
                  href="https://reactweatherapplicationlaia.netlify.app/"
                  className="launch-link"
                  target="_blank"
                  rel="noreferrer"
                  title="Check out this world clock application"
                >
                  <i className="fa-regular fa-window-restore"></i> Launch
                </a>
              </div>
              <div className="btn">
                <a
                  href="https://github.com/LaiaCastilla/react-weather-app"
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
              <h2 className="mb-3">Dictionary App</h2>
              <p>
                Consolidating my React framework skills, I created this
                minimalistic and elegant dictionary application, hopefully it
                will also be visually pleasing!
              </p>
              <div className="btn">
                <a
                  href="https://reactdictionarylaia.netlify.app/"
                  className="launch-link"
                  target="_blank"
                  rel="noreferrer"
                  title="Visit this dictionary application"
                >
                  <i className="fa-regular fa-window-restore"></i> Launch
                </a>
              </div>
              <div className="btn">
                <a
                  href="https://github.com/LaiaCastilla/dictionary-project"
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
        onClick={toAbout}
      >
        Let's work together!
      </a>
    </div>
  );
}
