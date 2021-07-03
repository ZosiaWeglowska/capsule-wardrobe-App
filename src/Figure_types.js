import React from "react";
import "./App.scss";

const FTypes = () => {
  return <>
  <h1>Opis wszystkich typów sylwetek</h1>
  <div>
    <ShapeDescription type={"X"}/>
    <ShapeDescription type={"O"}/>

  </div>
  </>
}

export default FTypes;

const ShapeDescription = (props) => {
  return <article>
    <h2>Sylwetka {props.type}</h2>
    <p>Opis sylwetki</p>
  </article>
}
