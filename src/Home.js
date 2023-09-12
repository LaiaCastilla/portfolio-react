import React from "react";
import "./Home.css";

export default function Home(props) {
  function toWork(event) {
    event.preventDefault();
    props.setPage("work");
  }
  function toAbout(event) {
    event.preventDefault();
    props.setPage("about");
  }
  return (
    <div className="Home container">
      <h1>Laia</h1>
      <h2>Front-end Developer based in Switzerland</h2>
      <div className="intro-links mt-4">
        <a
          href="/"
          title="Check out my portfolio"
          className="link me-3 work hover-underline-animation"
          onClick={toWork}
        >
          see my projects
        </a>
        <a
          href="/about.html"
          title="Learn more about me"
          className="link ms-3 about hover-underline-animation"
          onClick={toAbout}
        >
          more about me
        </a>
      </div>
    </div>
  );
}
