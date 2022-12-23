import React from "react";

const Item = (props) => {
  //Denna syns inte ens för mig, oklart hur jag en ska få fel
  // Don't touch this
  if (typeof text === "string") {
    return <p data-testid="three-faulty-item">Inte ett nummer</p>;
  }

  // Men detta går bra
  if(typeof props.number === Number){
  }
  //Får det inte att fungera, oklart hur jag ska få fram bara numbers 
  return <p data-testid="three-item">{props.number}</p>;
};

// Slutför Three så att den skriver ut
// de items den får genom props i en lista av Items.
// Men se till att den filtrerar ut de som inte är nummer.
// Item ska alltså inte skriva ut "Inte ett nummer"

const Three = (props) => {
  const numericItems = [props.items];

  return (
    <div>
      {numericItems.map((item) => (
        <Item number={item} />
      ))}
    </div>
  );
};

export default Three;
