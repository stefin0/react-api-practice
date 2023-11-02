import React, { useState } from "react";
import Card from "../Card/Card";
import "./GameBoard.css";

export default function GameBoard({ images, hideImages }) {
  const [card1, setCard1] = useState(null);
  const [card2, setCard2] = useState(null);

  const handleCardSelection = (imageUrl) => {
    if (!card1) {
      setCard1(imageUrl);
      console.log("Card1:", imageUrl);
    } else if (!card2) {
      setCard2(imageUrl);
      console.log("Card2:", imageUrl);
    }
  };

  return (
    <div className="game-board">
      {[0, 1, 2, 3, 4, 5].map((index) => (
        <Card
          key={index}
          imageUrl={images[index] ? images[index].urls.regular : null}
          hideImages={hideImages}
          onSelect={(imageUrl) => handleCardSelection(imageUrl)}
        />
      ))}
    </div>
  );
}
