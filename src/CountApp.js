import "./App.css";
import React, { useState } from "react";

const CountApp = () => {
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <h1>カウンターApp</h1>
      <p>{count}</p>
      <div>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
      </div>
    </div>
  );
};

export default CountApp;
