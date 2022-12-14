import React from "react";

var isDone = false;

function strike() {
  //// Imperative
  document.getElementById("root").style.textDecoration = "line-through";
  //// Declarative (needs useState)
  // isDone = true;
}

function unStrike() {
  //// Imperative
  document.getElementById("root").style.textDecoration = null;
  //// Declarative (needs useState)
  // isDone = false;
}

function App() {
  return (
    <div>
      <p style={isDone ? { textDecoration: "line-through" } : null}>Buy milk</p>
      <button onClick={strike}>Change to strike through</button>
      <button onClick={unStrike}>Change back</button>
    </div>
  );
}

export default App;
