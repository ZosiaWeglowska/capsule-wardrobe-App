import React from "react";
import "./Figure_types.scss";
import { useState, useEffect } from "react";
import sprite from "./images/sprite.png";
import X from "./images/X.png"
//------????????????????????????????????????

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
      {FTdata.map((el) => (
        <article className="container_type" id={el.id} key={el.id}>
          <h2>Sylwetka {el.name}</h2>
          <div className="img"></div>

          {/* <img src={X} width="100px" alt={el.alt}></img> */}
          <p className="description">{el.description}</p>

          <ul className="tips">
            {el.tips_arr.map((el, index) => (
              <li className="tip" key={index}>
                {el}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
};

export default FTypes;
