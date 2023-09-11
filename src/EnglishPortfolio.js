import React from "react";
import NavigationBarEng from "./NavigationBarEng";

export default function EnglishPorfolio(props) {
  return (
    <div className="EnglishPortfolio">
      <NavigationBarEng
        language={props.language}
        setLanguage={props.setLanguage}
      />
      Hello
    </div>
  );
}
