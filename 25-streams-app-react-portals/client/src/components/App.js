import React from "react";
import { Router, Route } from "react-router-dom";

import history from "../history";

import StreamList from "./streams/StreamList";
import StreamEdit from "./streams/StreamEdit";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <Header />
        <Route path="/" component={StreamList} exact />
        <Route path="/streams/new" component={StreamCreate} />
        <Route path="/streams/edit/:id" component={StreamEdit} />
        <Route path="/streams/delete/:id" component={StreamDelete} />
        <Route path="/streams/show/:id" component={StreamShow} />
      </Router>
    </div>
  );
};

export default App;
