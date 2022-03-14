import React from "react";
import defaultMessage from "./Quote/messages";
import Converter from "./Converter/Converter";

function Home(props) {
  return (
    <>
      <br />
      <p>{Converter("nav1", defaultMessage.quote.nav1)}</p>
    </>
  );
}

export default Home;
