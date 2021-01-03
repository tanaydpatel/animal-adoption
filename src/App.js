import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { Link, Router } from "@reach/router";
import Details from "./Details";

const App = () => {
  return (
    <div id="myParentDiv">
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:number" />
      </Router>
    </div>
  );
};

render(<App />, document.getElementById("root"));
