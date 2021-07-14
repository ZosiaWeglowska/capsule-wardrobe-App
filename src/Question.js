import React from "react";
import "./App.scss";

//---Pytanie do quizu z 5 opcjami odpowiedzi

const Question = (props) => {
  const { data, handleChange } = props;

  return (
    <form className="container_question">
      <h2>
        {data.nr}. {data.question}
      </h2>
      <div className="container_answears">
        {data.options.map((el, index) => (

          <div key={index} className="container_answear">
            <label className="radio">
              <input
                type="radio"
                name="quiz_figure"
                value={el.value}
                onChange={handleChange}
              />
              <span />
              {el.answear}
            </label>
          </div>
          
        ))}
      </div>
    </form>
  );
};

export default Question;
