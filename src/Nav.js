import React, { useState, useEffect } from "react";
import "./App.scss";
import { Link } from "react-router-dom";
import logo from "./images/logo.svg";

function Nav() {

  const [introOn, setIntroOn] = useState(true);
  

  useEffect(() => {
    const startTimeOut = setTimeout(() => {setIntroOn(false)}, 4000);
    return () => {
      clearTimeout(startTimeOut);
    };
  }, []);

  if (introOn === true) {
    
    return <div className="container">
    <div className="logo"><img src={logo} width="60px"/></div>
    <h1 className="intro_header">Capsule wardrobe</h1>
    <h2 className="intro_header">shape</h2>
    </div>
  }

  else return (
    <div className="container">
      <Link to={"/quiz"}>
        <button className="btn">Quiz</button>
      </Link>
      <Link to={"/figure_types"}>
        <button className="btn">Już znam swój typ</button>
      </Link>
    </div>
  );
}

export default Nav;
