import EnglishPorfolio from "./EnglishPortfolio";
import FrenchPortfolio from "./FrenchPortfolio";
import { useState } from "react";

import logo from "./logo.svg";
import "./App.css";

function App() {
  let [language, setLanguage] = useState("English");
  return (
    <div className="App">
      {language === "English" ? (
        <EnglishPorfolio language={language} setLanguage={setLanguage} />
      ) : (
        <FrenchPortfolio language={language} setLanguage={setLanguage} />
      )}
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
