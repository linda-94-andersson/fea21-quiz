import React, { useState } from "react";

// Gör så att "times" börjar på 0 och ökar med 1 varje gång du trycker på den.

const One = () => {
  const [times, setTimes] = useState(0);

  const handleTimes = () => {
    setTimes(times + 1);
  };

  // Ta inte bort data-testid
  return (
    <div>
      <p data-testid="one-text">Has been clicked {times} times.</p>
      <button data-testid="one-button" onClick={handleTimes}>
        Click me
      </button>
    </div>
  );
};

export default One;
