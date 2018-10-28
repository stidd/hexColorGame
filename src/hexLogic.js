const colorValues = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F"
];

function createRandomHex() {
  const hex = "#" + chooseRandomColor();
  return hex;
}

//choose random color function
function chooseRandomColor() {
  let hexValues = [];
  for (let i = 0; i < 3; i++) {
    const index = Math.floor(Math.random() * colorValues.length);
    hexValues.push(colorValues[index]);
  }
  return hexValues.join("");
}

export default createRandomHex;
