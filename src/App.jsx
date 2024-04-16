import React from "react";
import { useMemo } from "react";
import { useState } from "react";

const App = () => {
  const [weight, setWeight] = useState(40);
  const [height, setHeight] = useState(140);

  const weightSlider=(event)=>{
      setWeight(event.target.value)
  }
  const heightChange=(Event)=>{
      setHeight(Event.target.value)
  }

  const output= useMemo(()=>{
    const meterHeight =height/100
    return (
      weight/(meterHeight *meterHeight)
    ).toFixed(1)
  },[weight,height])

  return (
    <main>
      <h1>BMI CALCULATOR</h1>
      <div className="input-section">
        <p className="slider-output">Weight : {weight} kg</p>
        <input
          type="range"
          className="input-slider"
          step="1"
          min="40"
          max="200"
          onChange={weightSlider}
        />
        <p className="slider-output">Height : {height} cm</p>
        <input
          type="range"
          className="input-slider"
          step="1"
          min="140"
          max="220"
          onChange={heightChange}
        />
      </div>
      <div className="output-section">
        <p>Your BMI is </p>
        <p className="output">{output}</p>
      </div>
    </main>
  );
};

export default App;
