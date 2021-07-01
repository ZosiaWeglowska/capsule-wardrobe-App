import React from "react";
import "./App.scss";
import Nav from "./Nav";
import FTypes from "./Figure_types";
import Quiz from "./Quiz";
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {


  return (
    <Router>
    <div>
      <Route path="/nav" component={Nav}/>
      <Route path="/figure_types" component={FTypes}/>
      <Route path="/quiz" component={Quiz}/>
    </div>
    </Router>
  );
}

export default App;


