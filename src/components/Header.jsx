import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

import defaultMessage from "./Quote/messages";
import Converter from "./Converter/Converter";

function Header({ changeLang }) {
  console.log(Converter("en", defaultMessage.quote.en));
  return (
    <div class="shadow-secondary">
      <header class="d-flex justify-content-between align-items-center pt-4 pb-4 container">
        <h5 className="text-secondary"> +998 99 001 14 96</h5>
      </header>
      <nav className=" border-top border-muted bg-white d-flex justify-content-center align-items-center m-0 p-0">
        <ul className="d-flex align-items-center m-1 m-0 p-0">
          <li className="nav-link">
            <Link to="/">{Converter("nav1", defaultMessage.quote.nav1)}</Link>
          </li>
          <li className="nav-link">
            <Link to="/">{Converter("nav2", defaultMessage.quote.nav2)}</Link>
          </li>
          <li className="nav-link">
            <Link to="/">{Converter("nav3", defaultMessage.quote.nav3)}</Link>
          </li>
          <li className="nav-link">
            <Link to="/">{Converter("nav4", defaultMessage.quote.nav4)}</Link>
          </li>
        </ul>
        <select name="select" id="exampleFormControlSelect1">
          <option onClick={() => changeLang("en")}>
            {Converter("en", defaultMessage.quote.en)}
            en
          </option>
          <option onClick={() => changeLang("ru")}>
            {Converter("ru", defaultMessage.quote.ru)}
            ru
          </option>
          <option onClick={() => changeLang("uz")}>
            {Converter("uz", defaultMessage.quote.uz)}
            uz
          </option>
        </select>
      </nav>
    </div>
  );
}

export default Header;

// <button
//             type="button"
//             class="btn btn-success"
//             onClick={() => changeLang("en")}
//           >
//             {Converter("en", defaultMessage.quote.en)}
//           </button>
//           <button
//             type="button"
//             class="btn btn-success"
//             onClick={() => changeLang("ru")}
//           >
//             {Converter("ru", defaultMessage.quote.ru)}
//           </button>
//           <button
//             type="button"
//             class="btn btn-success"
//             onClick={() => changeLang("uz")}
//           >
//             {Converter("uz", defaultMessage.quote.uz)}
//           </button>
