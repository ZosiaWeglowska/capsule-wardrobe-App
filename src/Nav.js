import React from "react";
import "./App.scss";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
        <h3>Logo</h3>
      <ul className="nav-links">
        <Link to={"/quiz"}>
          <li>Quiz</li>
        </Link>
        <Link to={"/figure_types"}>
          <li>Już znam swój typ</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
