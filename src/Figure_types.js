import React from "react";
import "./App.scss";
import { useState, useEffect } from "react";

const FTypes = () => {
  return (
    <>
      <h1>Opis wszystkich typów sylwetek</h1>
      <div>
        <FTypeGenerator />
      </div>
    </>
  );
};

export default FTypes;

const FTypeGenerator = () => {

  const [FTArr, setFTArr] = useState([]);

  useEffect(() => {
    fetch(`./db.json`)
      .then((resp) => {
        if (resp.ok) return resp.json();
        else throw new Error("Błąd");
      })
      .then((data) => setFTArr(data.figure_types));
  }, []);

  console.log(FTArr)

  return FTArr.map(el => <article key={el.id}>
      <h2>Sylwetka {el.name}</h2>
      <p>{el.description}</p>
      <img src={el.img} alt={el.alt}></img>
      <ul>{el.tips_arr.map((el, index) => <li key={index}>{el}</li>)}</ul>
    </article>)
  
};
