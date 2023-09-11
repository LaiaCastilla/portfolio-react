import React from "react";
import NavigationBarFr from "./NavigationBarFr";

export default function FrenchPortfolio(props) {
  return (
    <div className="FrenchPortfolio">
      <NavigationBarFr
        language={props.language}
        setLanguage={props.setLanguage}
      />
      Bonjour
    </div>
  );
}
