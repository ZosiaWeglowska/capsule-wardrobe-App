import React from "react";
import "./App.scss";
import { useState, useEffect } from "react";


const FTypes = () => {

  const [FTdata, setFTdata] = useState([]);

  useEffect(() => {
    fetch(`./db.json`)
      .then((resp) => {
        if (resp.ok) return resp.json();
        else throw new Error("Błąd");
      })
      .then((data) => setFTdata(data.figure_types));
  }, []);

  console.log(FTdata)

  return FTdata.map(el => <article id={el.id} key={el.id}>
      <h2>Sylwetka {el.name}</h2>
      <p>{el.description}</p>
      <img src={el.img} alt={el.alt}></img>
      <ul>{el.tips_arr.map((el, index) => <li key={index}>{el}</li>)}</ul>
    </article>)
  
};

export default FTypes;
