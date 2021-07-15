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

  let modeMap = {},
    maxCount = 1,
    modes = [];

  array.forEach((el) => {
    if (modeMap[el] == null) modeMap[el] = 1;
    else modeMap[el] = modeMap[el] + 1;

    if (modeMap[el] > maxCount) {
      modes = [el];
      maxCount = modeMap[el];
    } else if (modeMap[el] === maxCount) {
      modes.push(el);
    }
  });
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

  const [stateFinal, setStateFinal] = useState([]);

  const [FTdata, setFTdata] = useState([]);
  const [Qdata, setQdata] = useState([]);

  const handleChange = (handleState) => (e) => {
    handleState(e.target.value);
  };

  const handleClick = () => {
    const result = [state1, state2, state3, state4, state5, state6];
    let final = modeArray(result);
    if (final === null) alert("Odpowiedz na wszystkie pytania");
    else setStateFinal(final);
    window.scrollTo(0, 0);
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

  const renderQuestionsContent = () => (
    <>
      <Question data={Qdata[0]} handleChange={handleChange(setState1)} />
      <Question data={Qdata[1]} handleChange={handleChange(setState2)} />
      <Question data={Qdata[2]} handleChange={handleChange(setState3)} />
      <Question data={Qdata[3]} handleChange={handleChange(setState4)} />
      <Question data={Qdata[4]} handleChange={handleChange(setState5)} />
      <Question data={Qdata[5]} handleChange={handleChange(setState6)} />

      <button className="btn" onClick={handleClick}>
        Sprawdź wynik
      </button>
    </>
  );

  const renderSingleSilhouetteContent = () => (
    <>
      <h1>Masz sylwetkę typu: {stateFinal.map((el) => el)} </h1>

      {FTdata.map(function (el, index) {
        if (el.id === stateFinal[0]) return <SingleType key={index} el={el} />;
        else return null;
      })}

      <Link to={"/figure_types"}>
        <button className="btn">Zobacz wszystkie sylwetki</button>
      </Link>
    </>
  );

  const renderMultipleSilhouttesContent = () => (
    <>
      <h1 className="result_header">Masz cechy kilku typów sylwetek. Są to:</h1>

      {stateFinal.map(function (type) {
        return FTdata.map(function (el, index) {
          if (type === el.id) return <SingleType key={index} el={el} />;
          else {
            return null;
          }
        });
      })}

      <Link to={"/figure_types"}>
        <button className="btn">Zobacz wszystkie sylwetki</button>
      </Link>
    </>
  );

  return (
    <div className="container">
      {stateFinal.length === 0 &&
        Qdata.length === 6 &&
        renderQuestionsContent()}
      {stateFinal.length === 1 && renderSingleSilhouetteContent()}
      {stateFinal.length > 1 && renderMultipleSilhouttesContent()}
    </div>
  );

};

export default Quiz;
