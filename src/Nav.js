import React, { useState, useEffect } from "react";
import "./App.scss";
import { Link } from "react-router-dom";
import logo from "./images/pink.svg";

function Nav() {
  const [introOn, setIntroOn] = useState(true);

  useEffect(() => {
    const startTimeOut = setTimeout(() => {
      setIntroOn(false);
    }, 5000);
    return () => {
      clearTimeout(startTimeOut);
    };
  }, []);

  if (introOn === true) {
    return (
      <div className="container">
        <div className="intro_wraper">
          <div className="logo">
            <img src={logo} alt="logo" width="50px" />
          </div>
          <h1 className="intro_header">Capsule wardrobe</h1>
          <h2 className="intro_header">shape</h2>
        </div>
      </div>
    );
  } else
    return (
      <div className="container">
        <div className="btn_wraper">
          <Link to={"/quiz"}>
            <button className="btn">Quiz</button>
          </Link>
          <Link to={"/figure_types"}>
            <button className="btn">Już znam swój typ</button>
          </Link>
        </div>
      </div>
    );
}

export default Nav;
