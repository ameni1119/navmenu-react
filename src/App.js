import React from "react";
import "./App.css";
import Nav from "./components/Nav";

const tab = [
  { item: "Home" },
  {
    item: "Services",
    subitem: ["For enterpreneurs", " For students", "For hobbyists"]
  },
  { item: "Contact" }
];

function App() {
  return (
    <div className="App">
      <Nav tab={tab} />
    </div>
  );
}

export default App;
