import React, { useState } from "react";
import GameBoard from "./components/GameBoard/GameBoard";
import GameControls from "./components/GameControls/GameControls";
import "./App.css";

export default function App() {
  const [images, setImages] = useState([]);
  const [hideImages, setHideImages] = useState(false);

  return (
    <>
      <GameBoard images={images} hideImages={hideImages} />
      <GameControls setImages={setImages} setHideImages={setHideImages} />
    </>
  );
}
