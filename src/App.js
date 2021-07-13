// npm start
// json-server --watch db.json
// json-server -p 3003 db.json


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
      <Route path="/" exact component={Nav}/>
      <Route path="/figure_types" component={FTypes}/>
      <Route path="/quiz" component={Quiz}/>
    </div>
    </Router>
  );
}

export default App;


