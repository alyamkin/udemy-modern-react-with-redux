import React, { useState } from "react";
import Field from "./components/Field";
import Language from "./components/Language";
import Translate from "./components/Translate";

import "./App.css";

function App() {
  const [language, setLanguage] = useState("es");
  const [text, setText] = useState("");
  return (
    <div>
      <Field onChange={setText} />
      <Language language={language} onLanguageChange={setLanguage} />
      <hr />
      <Translate text={text} language={language} />
    </div>
  );
}

export default App;
