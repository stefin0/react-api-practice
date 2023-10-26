import React from "react";
import Card from "../Card/Card";
import "./GameBoard.css";

export default function GameBoard() {
  return (
    <div className="game-board">
      {Array(6)
        .fill(null)
        .map((_, index) => (
          <Card key={index} />
        ))}
    </div>
  );
}
