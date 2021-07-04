import React from "react";
import "./App.scss";

//---Pytanie do quizu z 5 opcjami odpowiedzi

const Question = (props) => {
    const { num, handleChange } = props;
  
    return (
      <div>
        <h2>Pytanie {num}</h2>
        <form>
          <input
            type="radio"
            id={`question${num}_X`}
            name="quiz_figure"
            value="X"
            onChange={handleChange}
          />
          <label htmlFor={`question${num}_X`}>Odp dla figury X</label>
  
          <input
            type="radio"
            id={`question${num}_O`}
            name="quiz_figure"
            value="O"
            onChange={handleChange}
          />
          <label htmlFor={`question${num}_O`}>Odp dla figury O</label>
  
          <input
            type="radio"
            id={`question${num}_A`}
            name="quiz_figure"
            value="A"
            onChange={handleChange}
          />
          <label htmlFor={`question${num}_A`}>Odp dla figury A</label>
  
          <input
            type="radio"
            id={`question${num}_T`}
            name="quiz_figure"
            value="T"
            onChange={handleChange}
          />
          <label htmlFor={`question${num}_T`}>Odp dla figury T</label>
  
          <input
            type="radio"
            id={`question${num}_H`}
            name="quiz_figure"
            value="H"
            onChange={handleChange}
          />
          <label htmlFor={`question${num}_H`}>Odp figury H</label>
        </form>
      </div>
    );
  };

  export default Question;