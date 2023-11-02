import React, { useState } from "react";
import "./Card.css";

export default function Card({ imageUrl, hideImages, onSelect }) {
  const [revealed, setRevealed] = useState(false);

  const revealImg = () => {
    setRevealed(true);
  };

  const getImgInfo = () => {
    // console.log(imageUrl);
  };

  return (
    <div
      className="card"
      onClick={() => {
        revealImg();
        getImgInfo();
        onSelect(imageUrl);
      }}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="random-img"
          style={{ visibility: hideImages && !revealed ? "hidden" : "visible" }}
        />
      ) : null}
    </div>
  );
}
