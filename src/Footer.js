import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div class="footer container">
        <h2 class="email">lcastillaiamoros@gmail.com</h2>
        <div class="social-media">
          <a
            href="https://github.com/LaiaCastilla"
            title="My GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-github icon"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/laia-castilla-i-amorós-phd/"
            title="My Linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-linkedin icon"></i>
          </a>
          <a href="mailto:lcastillaiamoros@gmail.com" title="Send me an email">
            <i class="fa-solid fa-envelope icon"></i>
          </a>
        </div>

        <div class="signature">
          Designed and{" "}
          <a
            href="https://github.com/LaiaCastilla/portfolio-react"
            title="Portfolio's repository"
            target="_blank"
            rel="noreferrer"
          >
            open-source{" "}
          </a>
          coded by Laia
        </div>
      </div>
    </div>
  );
}
