

// Skriv en funktion som tar bort räliga matvaror från
// en given array och returnerar en ny array med acceptabel mat.
// Använd dig av .filter()

const nastyFoods = ["Pannkakor", "Lingonsylt", "Fläsksvålar"];

function noNastyFood(array) {
  // Skriv din kod här
  return array.filter((arr) => arr !== nastyFoods);
  // jag fattar inte hur jag ska lösa denna uppgift, och tänker inte googla för då visar det inte vad jag kan
}

const result = noNastyFood(["Korv", "Sylta", "Pannkakor", "Chips", "Lingonsylt"]);
console.log(result); // ["Korv", "Sylta", "Chips"]

module.exports = noNastyFood;