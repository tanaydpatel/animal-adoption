import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  //   return React.createElement("div", { id: "myParentDiv" }, [
  //     React.createElement("h1", {}, "Adopt Me!"),
  //     React.createElement(Pet, {
  //       name: "Simba",
  //       animal: "Dog",
  //       breed: "Labrador",
  //     }),
  //     React.createElement(Pet, {
  //       name: "Doink",
  //       animal: "Cat",
  //       breed: "Mixed",
  //     }),
  //     React.createElement(Pet, {
  //       name: "Peppet",
  //       animal: "Bird",
  //       breed: "Cockatiel",
  //     }),
  //   ]);

  return (
    <div id="myParentDiv">
      <h1></h1>
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
