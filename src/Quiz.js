import React, { useState, useEffect } from "react";
import "./App.scss";
import { Link } from "react-router-dom";
import Question from "./Question";
import SingleType from "./Single_type";

//---funkcja do obsługi wyników quizu.
// Zwraca tablicę najczęstszych wartości lub null (kiedy tablica wszystkich wartości jest niepełna).

const modeArray = (array) => {
  const array2 = array.filter((element) => element != null);
  if (array2.length < 6) return null;
  else {
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
  }
};

//---Quiz: 6 pytań i obsługa wyświetlania wyników

const Quiz = () => {
  const [state1, setState1] = useState(null);
  const [state2, setState2] = useState(null);
  const [state3, setState3] = useState(null);
  const [state4, setState4] = useState(null);
  const [state5, setState5] = useState(null);
  const [state6, setState6] = useState(null);

  const [stateFinal, setStateFinal] = useState([]);

  const [FTdata, setFTdata] = useState([]);
  const [Qdata, setQdata] = useState([]);

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
    let final = modeArray(result);
    if (final === null) alert("Odpowiedz na wszystkie pytania");
    else setStateFinal(final);
  };

  useEffect(() => {
    fetch(`http://localhost:3003/figure_types`)
      .then((resp) => {
        if (resp.ok) return resp.json();
        else throw new Error("Error in data");
      })
      .then((data) => setFTdata(data));

    fetch(`http://localhost:3003/questions`)
      .then((resp) => {
        if (resp.ok) return resp.json();
        else throw new Error("Error in data");
      })
      .then((data) => setQdata(data));
  }, []);

  if (stateFinal.length === 0) {
    if (Qdata.length === 6) {
      return (
        <div className="container">
          <Question data={Qdata[0]} handleChange={handleChange1} />
          <Question data={Qdata[1]} handleChange={handleChange2} />
          <Question data={Qdata[2]} handleChange={handleChange3} />
          <Question data={Qdata[3]} handleChange={handleChange4} />
          <Question data={Qdata[4]} handleChange={handleChange5} />
          <Question data={Qdata[5]} handleChange={handleChange6} />

          <button className="btn" onClick={handleClick}>
            Sprawdź wynik
          </button>
        </div>
      );
    } else return null;
  } else if (stateFinal.length === 1) {
    return (
      <div className="container">
        <h1>Masz sylwetkę typu: {stateFinal.map((el) => el)} </h1>

        {FTdata.map(function (el, index) {
          if (el.id === stateFinal[0]) return <SingleType key={index} el={el} />
          else return null;
        })}

        <Link to={"/figure_types"}>
          <button className="btn">Zobacz wszystkie sylwetki</button>
        </Link>
      </div>
    );
  } else
    return (
      <div className="container">
        
        <h1 className="result_header">Masz cechy kilku typów sylwetek. Są to:</h1>
        {/* <ul>
          {stateFinal.map((el) => (
            <li className="result_type">{`sylwetka ${el}`}</li>
          ))}
        </ul> */}

        {stateFinal.map(function (type) {
          return FTdata.map(function (el, index) {
            if (type === el.id) return <SingleType key={index} el={el} />
            else {
              return null;
            }
          });
        })}

        <Link to={"/figure_types"}>
          <button className="btn">Zobacz wszystkie sylwetki</button>
        </Link>
      </div>
    );
};

export default Quiz;
