import React from "react";
import "./App.scss";

//---Pytanie do quizu z 5 opcjami odpowiedzi

const Question = (props) => {
  const { num, data, handleChange } = props;

  return (
    <form className="container_question">
      <h2>{num}. {data.question}</h2>
      <div className="container_answears">

        {data.options.map((el, index) => (
          <div key={index} className="container_answear">
          <label className="radio">
            <input type="radio" name="quiz_figure" value={el.value} onChange={handleChange}/>
            <span />
            {el.answear}
          </label>
          </div>
        ))}

      </div>
    </form>


    // <form className="container_question">
    //   <h2>Pytanie {num}</h2>
    //   <div className="container_answears">
    //     {["X", "O", "A", "T", "H"].map((el) => (
    //       <div key={el} className="container_answear">
    //         <label className="radio">
    //           <input
    //             type="radio"
    //             id={`question${num}_${el}`}
    //             name="quiz_figure"
    //             value={el}
    //             onChange={handleChange}
    //           />
    //           <span />
    //           {`Odp dla figury ${el}`}
    //         </label>
    //       </div>
    //     ))}
    //   </div>
    // </form>
  );
};

export default Question;
