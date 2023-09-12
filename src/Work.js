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
                My first "real" project... I built a Vanilla JavaScript weather
                app in SheCodes Plus, an advanced 8-week JavaScript coding
                workshop. Building upon my previously-gained knowledge, I also
                became skilled in Bootstrap, API’s, real-life development
                workflow, hosting, and advanced JavaScript. Using Procreate, I
                created the weather icons as well as the background. I combined
                all of these skills to create a fully-functioning weather app.
                Both the icons and the background change during the night-time.
                Check it out!
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
              <h2 className="mb-3">World Clock</h2>
              <p>
                Following the above project, I built a Vanilla JavaScript world
                clock app. This project was also built with Bootstrap, API’s,
                real-life development workflow, hosting, and advanced
                JavaScript. Salvador Dalí and the wild concept of time inspired
                me for the app's background, which I draw using Procreate. Check
                out the local time of your next destination!
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
              <h2 className="mb-3">Travel Project</h2>
              <p>
                A less complex website showcasing a beautiful travel
                destination. Completely responsive, it was made with more
                advanced HTML and CSS than the previous two. SEO friendly, it
                includes multiple HTML embeds. It is a beautifully designed and
                well-executed landing page with useful information and
                functional links. Check it out if you are planning on visiting
                Japan!
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
              <h2 className="mb-3">React Weather App</h2>
              <p>
                Similar to my first project, this time I immersed myself in
                React development. I combined all my previously acquired
                knowledge and this highly-demanded framework to build a working
                weather app incorporating coding best practices, along with the
                most popular tools and technologies. What weather app design do
                you prefer?
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
              <h2 className="mb-3">Dictionary App</h2>
              <p>
                Consolidating my React framework skills, I created this
                minimalistic and stylish dictionary application. Completely
                functional and visually pleasing, making it was a great learning
                experience. Don't be shy and look for your word of the day!
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
        onClick={toAbout}
      >
        Let's work together!
      </a>
    </div>
  );
}
