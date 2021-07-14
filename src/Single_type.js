import React, { useState } from "react";
import "./App.scss";
import Tips from "./Tips";

//---Pojedynczy opis typu sylwetki / pojedynczy wynik quizu

const SingleType = (props) => {
  const { el } = props;

  const [showTips, setShowTips] = useState(false);

  const handleClick = () => {
    setShowTips(showTips ? false : true);
  };

  if (showTips === false)
    return (
      <article className="container_type" id={el.id} key={el.id}>
        <div className="header_wraper">
          <h2>Sylwetka {el.name}</h2>
          <img src={el.src} width="100px" alt={el.alt}></img>
          <p className="description">{el.description}</p>
        </div>

        <button className="btn" onClick={handleClick} el={el}>
          Stylizacje
        </button>

        {/* <ul className="tips">
        <h3>Stylizacje:</h3>
        {el.tips_arr.map((el, index) => (
          <li className="tip" key={index}>
            {el}
          </li>
        ))}
      </ul> */}
      </article>
    );
  else
    return (
      <article className="container_type" id={el.id} key={el.id}>
        <div className="header_wraper">
          <h2>Sylwetka {el.name}</h2>
          <img src={el.src} width="100px" alt={el.alt}></img>
          <p className="description">{el.description}</p>
        </div>

        <Tips el={el} handleClick={handleClick}/>

        {/* <ul className="tips">
        <h3>Stylizacje:</h3>
        {el.tips_arr.map((el, index) => (
          <li className="tip" key={index}>
            {el}
          </li>
        ))}
      </ul> */}
      </article>
    );
};

export default SingleType;
