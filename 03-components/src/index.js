// Import React and ReactDOM
import React from "react";
import ReactDOM from "react-dom";
import faker from "@faker-js/faker";

import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

// Create a React component
const App = () => {
  let appArray = [];

  const makeAppArray = () => {
    let obj = {};
    for (let i = 0; i < 10; i++) {
      obj.avatar = faker.image.avatar();
      obj.author = faker.name.lastName();
      obj.date = faker.date.past().toISOString().substring(0, 10);
      obj.comment = faker.lorem.words(20);
      obj.key = i;

      appArray.push(obj);
      obj = {};
    }
  };

  makeAppArray();

  return (
    <div
      className="ui container comments"
      style={{ width: "300px", marginBottom: "2rem" }}
    >
      {appArray.map((obj) => (
        <div style={{ margin: "2rem auto" }} key={obj.key}>
          <h4>Comment:</h4>

          <CommentDetail
            avatar={obj.avatar}
            author={obj.author}
            date={obj.date}
            comment={obj.comment}
          />
          <ApprovalCard id={obj.key} />
        </div>
      ))}
    </div>
  );
};

// Show React Component on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
