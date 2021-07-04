import React from "react";
import "./App.scss";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <h3>Logo</h3>

      <Link to={"/quiz"}>
        <button>Quiz</button>
      </Link>
      <Link to={"/figure_types"}>
        <button>Już znam swój typ</button>
      </Link>
    </nav>
  );
}

export default Nav;
