import React, { useState } from "react";

// Slutför följande komponent.
// Tanken är att den ska skriva ut för och efternamn som t.ex.
// "Hi, my name is: Oscar Nilsson" i p-taggen.
//
// Det saknas några delar för att den ska göra det.
// Identifiera de sakerna som saknas och fixa komponenten!

function Six() {
  // Ändra inte statet nedan
  const [input, setInput] = useState({});

  //Fattar inte varför den tar emot "e" men gör inget med det? Hur ska den då veta value? Och jag får inte ändra något? 
  function handleInput(e) {
    // Rör inte funktionen nedan
    setInput((input) => ({ ...input, [inputName]: value }));
  }
  // Vad är inputName för något? Hur ska det användas? Fattar inte. Får : "inputName is not defined". 

  return (
    <div>
      <p data-testid="six-text">
        Hi, my name is: {input.firstName} {input.lastName}
      </p>
      <input
        type="text"
        name="firstName"
        value={input.firstName}
        data-testid="six-firstName"
        onChange={handleInput}
      />
      <input
        type="text"
        name="lastName"
        value={input.lastName}
        data-testid="six-lastName"
        onChange={handleInput}
      />
    </div>
  );
}

export default Six;
