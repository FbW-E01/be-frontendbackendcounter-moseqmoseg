import "./App.css";
import { useState, useEffect } from "react";

function increase() {
  const url = "http://localhost:3000/counter";
  const init = {
    method: "POST",
  };

  fetch(url, init)
    
};

function App() {
  const [counter, setCounter] = useState(0);

  function show() {
    const url = "http://localhost:3000";
    const init = {
      method: "GET",
    };

    fetch(url, init)
      .then((response) => response.json())
      .then((data) => setCounter(data));
  }

  useEffect(() => {
    show();
  },[] );

  return (
    <div className="App">
      <button onClick={show}> Get the number</button>
      <br />
      <button onClick={increase}>Increase the number </button>
      <br />
      <div>{counter}</div>
    </div>
  );
}
export default App;
