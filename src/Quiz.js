import React, { useState } from "react";
import "./App.scss";
import { Link } from "react-router-dom";

// zbudować obiekt z treściami do tworzenia pytań,
// sprawić, żeby działał
// w przyszłości przenieść go na json serwer
//co jeśli równa ilość odpowiedzi?
//generator inputa i labela

//\

//---Pytanie do quizu (z 5ma opcjami odpowiedzi)

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

//---funkcja do obsługi wyników quizu

const modeArray = (array) => {
  const array2 = array.filter((element) => element != null);
  if (array2.length < 5) return alert("Uzupełnij wszystkie odpowiedzi");

  let modeMap = {},
    maxCount = 1,
    modes = [];

  for (let i = 0; i < array.length; i++) {
    let el = array[i];

    if (modeMap[el] == null) modeMap[el] = 1;
    else modeMap[el]++;

    if (modeMap[el] > maxCount) {
      modes = [el];
      maxCount = modeMap[el];
    } else if (modeMap[el] === maxCount) {
      modes.push(el);
      maxCount = modeMap[el];
    }
  }
  return modes;
};

//---Quiz: 6 pytań

const Quiz = () => {
  const [state1, setState1] = useState(null);
  const [state2, setState2] = useState(null);
  const [state3, setState3] = useState(null);
  const [state4, setState4] = useState(null);
  const [state5, setState5] = useState(null);
  const [state6, setState6] = useState(null);

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

  const [stateFinal, setStateFinal] = useState([]);

  const handleClick = () => {
    const result = [state1, state2, state3, state4, state5, state6];
    console.log(result);
    let final = modeArray(result);
    setStateFinal(final);
    console.log(final);
  };

  if (stateFinal.length === 0) {
    return (
      <div>
        <Question num={1} handleChange={handleChange1} />
        <Question num={2} handleChange={handleChange2} />
        <Question num={3} handleChange={handleChange3} />
        <Question num={4} handleChange={handleChange4} />
        <Question num={5} handleChange={handleChange5} />
        <Question num={6} handleChange={handleChange6} />

        <button onClick={handleClick}>Sprawdź wynik</button>
      </div>
    );
  } else if (stateFinal.length === 1) {
    return (
      <>
        <h1>Masz sylwetkę typu: {stateFinal.map((el) => el)} </h1>
        <Link to={"/figure_types"}>
          <button>Opis typów sylwetek</button>
        </Link>
      </>
    );
  } else
    return (
      <>
        <h1>Masz cechy kilku typów sylwetek. Są to:</h1>
        <ul>
          {stateFinal.map((el) => (
            <li>{`sylwetka ${el}`}</li>
          ))}
        </ul>
        <Link to={"/figure_types"}>
          <button>Opis typów sylwetek</button>
        </Link>
      </>
    );
};

//Wyświetlanie opisu twoich sylwetek
//Wyświetlanie linku do wszystkich opisów

export default Quiz;
