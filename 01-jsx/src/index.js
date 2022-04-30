// Import React and ReactDOM
import React from "react";
import ReactDOM from "react-dom";

function getButtonText() {
  return "Go Now!";
}

// Create a React component
const App = () => {
  const labelText = "Enter your name: ";

  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button
        style={{
          padding: ".5rem",
          border: "none",
          backgroundColor: "blue",
          color: "white",
          borderRadius: "8px",
        }}
      >
        {getButtonText()}
      </button>
    </div>
  );
};

// Notes:

// Cannot print a JavaScript object within JSX.  Cannot be a React child.
// Can print attribute in form object.attribute

// Can reference objects as long as you're not trying to print, e.g. inline style

// Last Step:
// Show React Component on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
