import React, { useState } from "react";
import NavigationBarFr from "./NavigationBarFr";
import Accueil from "./Accueil";
import Projets from "./Projets";
import Apropos from "./Apropos";
import Footer from "./Footer";

export default function FrenchPortfolio(props) {
  let [site, setSite] = useState("accueil");
  return (
    <div className="FrenchPortfolio">
      <NavigationBarFr
        language={props.language}
        setLanguage={props.setLanguage}
        site={site}
        setSite={setSite}
      />
      {site === "accueil" ? (
        <Accueil site={site} setSite={setSite} />
      ) : site === "projets" ? (
        <div>
          {" "}
          <Projets site={site} setSite={setSite} />
          <Footer />
        </div>
      ) : site === "apropos" ? (
        <div>
          <Apropos site={site} setSite={setSite} />
          <Footer />
        </div>
      ) : null}
      Bonjour
    </div>
  );
}
