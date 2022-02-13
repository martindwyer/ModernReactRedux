import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

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

const options = [
  {
    label: "the color red",
    value: "red",
  },
  {
    label: "the color green",
    value: "green",
  },
  {
    label: "the color blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <h1>Widgets</h1>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          options={options}
          label="Select a color"
          selected={selected}
          onSelectedChage={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
