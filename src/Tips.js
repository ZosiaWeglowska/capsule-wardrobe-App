import React from "react";
import "./App.scss";

const Tips = (props) => {
  const { el, handleClick } = props;

  return (
    <ul className="tips">
      <h3 onClick={handleClick}>Stylizacje:</h3>
      {el.tips_arr.map((el, index) => (
        <li className="tip" key={index}>
          {el}
        </li>
      ))}
    </ul>
  );
};

export default Tips;
