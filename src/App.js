/* eslint-disable default-case */
import LanguageProvider from "./components/LanguageProvider/LanguageProvider";
import Header from "./components/Header";
import Home from "./components/Home";
import { useState } from "react";

import English from "./translations/en.json";
import Russian from "./translations/ru.json";
import Uzbek from "./translations/uz.json";

function App(props) {
  const [locale, setLocale] = useState("en");
  const [lang, setLang] = useState(English);

  const changeLang = (getLang) => {
    setLocale(getLang);
    switch (getLang) {
      case "en":
        setLang(English);
        break;
      case "ru":
        setLang(Russian);
        break;
      case "uz":
        setLang(Uzbek);
        break;
    }
  };

  return (
    <LanguageProvider local={locale} lang={lang}>
      <div className="App">
        <Header changeLang={changeLang} />
        <Home />
      </div>
    </LanguageProvider>
  );
}

export default App;
