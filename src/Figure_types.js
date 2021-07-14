import React from "react";
import "./App.scss";
import { useState, useEffect } from "react";
import SingleType from "./Single_type";
import all from "./images/all.png";


const FTypes = () => {
  const [FTdata, setFTdata] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3003/figure_types`)
      .then((resp) => {
        if (resp.ok) return resp.json();
        else throw new Error("Błąd");
      })
      .then((data) => setFTdata(data));
  }, []);

  return (
    <div className="container">
      <img src={all} alt="all_figure_types" width="60%"></img>
      <h1>Typy sylwetek</h1>
      {FTdata.map((el, index) => (<SingleType key={index} el={el}/>
      ))}
    </div>
  );
};

export default FTypes;
