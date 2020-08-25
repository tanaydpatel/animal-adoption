import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", { id: "myParentDiv" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Jimmy",
      animal: "Dog",
      breed: "Desi",
    }),
    React.createElement(Pet, {
      name: "Doink",
      animal: "Cat",
      breed: "Mixed",
    }),
    React.createElement(Pet, {
      name: "Peppet",
      animal: "Bird",
      breed: "Cockatiel",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
