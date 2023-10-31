import React from "react";
import "./Card.css";

export default function Card({ imageUrl, hideImages }) {
  return (
    <div className="card">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="random-img"
          style={{ visibility: hideImages ? "hidden" : "visible" }}
        />
      ) : null}
    </div>
  );
}
