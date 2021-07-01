import React, { useState } from "react";
import "./App.scss";

// zbudować obiekt z treściami do tworzenia pytań,
// sprawić, żeby działał
// w przyszłości przenieść go na json serwer

//warning dla niewypełnionego
//co jeśli równa ilość odpowiedzi?

//generator inputa i labela

//\

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
        <label htmlFor={`question${num}_H`}>Opis figury H</label>

        
      </form>
    </div>
  );
};

const Quiz = () => {

  const [state1, setState1] = useState("");
  const [state2, setState2] = useState("");
  const [state3, setState3] = useState("");
  const [state4, setState4] = useState("");
  const [state5, setState5] = useState("");
  const [state6, setState6] = useState("");

  const handleChange1 = (e) => {
    setState1(e.target.value);
  };
  const handleChange2 = (e) => {
    setState2(e.target.value);
  };
  const handleChange3 = (e) => {
    setState3(e.target.value);
  };
  const handleChange4 = (e) => {
    setState4(e.target.value);
  };
  const handleChange5 = (e) => {
    setState5(e.target.value);
  };
  const handleChange6 = (e) => {
    setState6(e.target.value);
  };

  const handleClick = () => {
    const result = [state1, state2, state3, state4, state5, state6];
    console.log(result)
  }

  return <div>
    <Question num={1} handleChange={handleChange1}/>
    <Question num={2} handleChange={handleChange2}/>
    <Question num={3} handleChange={handleChange3}/>
    <Question num={4} handleChange={handleChange4}/>
    <Question num={5} handleChange={handleChange5}/>
    <Question num={6} handleChange={handleChange6}/>
    
    <button onClick={handleClick}>Sprawdź wynik</button>

    </div>
};

export default Quiz;

// Jak dostać najczęstszy wynik z arraya result?
//skopiować []...result]
//mode(result)
//jeszcze raz mode(result) dla tego co pozostało
//porównać długości czy nie ta sama i pop wynik z dłuższej albo z obu
//dalej renderować komponent lub komunikat i dwa komponenty

//---------------TEST KODU:

// function mode(arr){
//   return arr.sort((a,b) =>
//         arr.filter(v => v===a).length
//       - arr.filter(v => v===b).length
//   ).pop();
// };

function mode(arr){
  return arr.sort((a,b) =>
        arr.filter(v => v===a).length
      - arr.filter(v => v===b).length
  )
};

const testArr = ["X", "X", "O", "O", "Y"];

console.log(mode(testArr))
console.log(mode(testArr))