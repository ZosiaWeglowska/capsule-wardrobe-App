import React, { useState, useEffect } from "react";
import "./App.scss";
import { Link } from "react-router-dom";
import Question from "./Question";

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

//---Quiz: 6 pytań i obsługa wyświetlania wyników

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

  const [FTdata, setFTdata] = useState([]);

  const handleClick = () => {
    const result = [state1, state2, state3, state4, state5, state6];
    // usunąć
    console.log(result);
    let final = modeArray(result);
    setStateFinal(final);
    //usunąć
    console.log(final);
  };

  useEffect(() => {
    fetch(`./db.json`)
      .then((resp) => {
        if (resp.ok) return resp.json();
        else throw new Error("Error in data");
      })
      .then((data) => setFTdata(data.figure_types));
  }, []);

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

        {FTdata.map(function(el) {
          if (el.id === stateFinal[0])
          return <article id={el.id} key={el.id}>
            <h2>Sylwetka {el.name}</h2>
            <p>{el.description}</p>
            <img src={el.img} alt={el.alt}></img>
            <ul>
              {el.tips_arr.map((el, index) => (
                <li key={index}>{el}</li>
              ))}
            </ul>
          </article>
        })}

        <Link to={"/figure_types"}>
          <button>Opis wszystkich sylwetek</button>
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
        {/* Opis tych sylwetek */}
        <Link to={"/figure_types"}>
          <button>Opis wszystkich sylwetek</button>
        </Link>
      </>
    );
};

//Wyświetlanie opisu twoich sylwetek
//Wyświetlanie linku do wszystkich opisów

export default Quiz;
