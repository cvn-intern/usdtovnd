import React from "react";
import { useState } from "react";
import "./App.css";
import arrow from "./imgs/arrow.jpg";
import arrow1 from "./imgs/arrow1.png";

function App() {
  const [usd, setUsd] = useState();
  const [vnd, setVnd] = useState();

  function handleSubmitusd(num) {
    setUsd(num);
  }

  function handleSubmitvnd(num) {
    setVnd(num);
  }

  function handleSubmit1() {
    setVnd(usd * 23227);
  }

  function handleSubmit2() {
    setUsd(vnd / 23227);
  }

  return (
    <div className="container">
      <h1 className="titleApp">Convert USD to</h1>

      <div className="convert">
        <div className="convert__box">
          <h3 className="currency">USD</h3>
          <input
            className="convert-input"
            type="text"
            value={usd}
            onChange={(e) => handleSubmitusd(e.target.value)}
            placeholder="Number you want to convert"
          />
        </div>

        <div className="convert__switch">
          <img
            className="convert__submit"
            src={arrow}
            alt="conver from usd to vnd"
            onClick={handleSubmit1}
          />
          <img
            className="convert__submit"
            src={arrow1}
            alt="conver from usd to vnd"
            onClick={handleSubmit2}
          />
        </div>

        <div className="convert__box">
          <h3 className="currency">VND</h3>
          <input
            className="convert-input"
            type="text"
            value={vnd}
            onChange={(e) => handleSubmitvnd(e.target.value)}
            placeholder="Number you want to convert"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
