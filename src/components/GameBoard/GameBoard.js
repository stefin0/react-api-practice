import React from "react";
import Card from "../Card/Card";
import "./GameBoard.css";

export default function GameBoard({ images, hideImages }) {
  // Shuffle the images
  const shuffledImages = images.sort(() => Math.random() - 0.5);

  return (
    <div className="game-board">
      {[0, 1, 2, 3, 4, 5].map((index) => (
        <Card
          key={index}
          imageUrl={
            shuffledImages[index] ? shuffledImages[index].urls.regular : null
          }
          hideImages={hideImages}
        />
      ))}
    </div>
  );
}
