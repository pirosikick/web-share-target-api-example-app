import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import ShareTarget from "./ShareTarget";

const App: React.FC = () => {
  return (
    <Router>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/share-target/" component={ShareTarget}></Route>
    </Router>
  );
};

export default App;
