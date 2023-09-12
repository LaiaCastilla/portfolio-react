import React, { useState } from "react";
import NavigationBarEng from "./NavigationBarEng";
import Home from "./Home";
import Work from "./Work";
import About from "./About";
import Footer from "./Footer";

export default function EnglishPorfolio(props) {
  let [page, setPage] = useState("home");
  return (
    <div className="EnglishPortfolio">
      <NavigationBarEng
        language={props.language}
        setLanguage={props.setLanguage}
        page={page}
        setPage={setPage}
      />

      {page === "home" ? (
        <Home page={page} setPage={setPage} />
      ) : page === "work" ? (
        <div>
          {" "}
          <Work page={page} setPage={setPage} />
          <Footer />
        </div>
      ) : page === "about" ? (
        <div>
          <About page={page} setPage={setPage} />
          <Footer />
        </div>
      ) : null}
    </div>
  );
}
