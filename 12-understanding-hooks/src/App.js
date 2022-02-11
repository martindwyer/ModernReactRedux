import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
  {
    title: "What is react?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use react?",
    content: "React is a front end javascript framework",
  },
  {
    title: "How do you  use react?",
    content: "React is a front end javascript framework",
  },
];

const App = () => {
  return (
    <div>
      <h1>Widgets</h1>
      <Search />
      {/* <Accordion items={items} /> */}
    </div>
  );
};

export default App;
