import React, { useState, useEffect } from "react";
import { fetchRandomImages } from "../../api/unsplash";

export default function GameControls({ setImages, setHideImages }) {
  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
    if (countdown === 0) {
      setHideImages(true);
    } else if (countdown > 0) {
      const timerId = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timerId);
    }
  }, [countdown, setHideImages]);

  const handleStartGame = async () => {
    try {
      const fetchedImages = await fetchRandomImages();

      const doubledImages = [...fetchedImages, ...fetchedImages];
      setImages(doubledImages);
      setCountdown(5);
    } catch (error) {
      console.error(`Failed to fetch images: ${error.message}`);
    }
  };

  return (
    <>
      <button className="start-button" onClick={handleStartGame}>
        Start Game
      </button>
      <p className="timer">
        {countdown !== null ? `Timer: ${countdown}` : `Timer`}
      </p>
    </>
  );
}
