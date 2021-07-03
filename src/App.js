import React from "react";
import "./App.css";
import { TicTacToe } from "./TicTacToe";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

function App() {
  return (
    <div className="game">
      <div className="game-board">
        <TicTacToe/>
      </div>
    </div>
  );
}

export default App;
