import React from "react";
import "./Question.scss";

//---Pytanie do quizu z 5 opcjami odpowiedzi

const Question = (props) => {
  const { num, handleChange } = props;

  return (
    <form className="container_question">
      <h2>Pytanie {num}</h2>
      <div className="container_answears">
        {["X", "O", "A", "T", "H"].map((el) => (
          <div key={el} className="container_answear">
            <label className="radio">
              <input
                type="radio"
                id={`question${num}_${el}`}
                name="quiz_figure"
                value={el}
                onChange={handleChange}
              />
              <span />
              {`Odp dla figury ${el}`}
            </label>
          </div>
        ))}
      </div>
    </form>
  );
};

export default Question;
