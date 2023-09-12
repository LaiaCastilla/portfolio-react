import React, { useState } from "react";
import NavigationBarEng from "./NavigationBarEng";
import Home from "./Home";

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
      {page === "home" ? <Home page={page} setPage={setPage} /> : null}
    </div>
  );
}
