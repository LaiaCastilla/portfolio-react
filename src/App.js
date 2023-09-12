import EnglishPorfolio from "./EnglishPortfolio";
import FrenchPortfolio from "./FrenchPortfolio";
import { useState } from "react";

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
    </div>
  );
}

export default App;
