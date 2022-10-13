function letterMiddleValue(a, b) {
  let alpha1 = Alphabet.indexOf(a);
  let alpha2 = Alphabet.indexOf(b);
  let center = (alpha1 + alpha2) / 2;
  let letterLength;

  if (center % 2 == 0) {
      letterLength = 1;
  } else {
      letterLength = 2;
  }
  return Alphabet.substring(center, center + letterLength);
}

var Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

console.log(letterMiddleValue("Q", "U"));
console.log(letterMiddleValue("R", "U"));
console.log(letterMiddleValue("T", "Z"));
console.log(letterMiddleValue("Q", "Z"));
/*
Given variable string contains of all alphabet from A to Z
”ABCDEFGHIJKLMNOPQRSTUVWXYZ”

Build a function that receive two paramters: first letter and last letter.
That will do to find middle letter between of the specified letter.
Example: 

- The middle between Q and U is **S**
- The middle between R and U is **ST**
- The middle between T and Z is **W**
- The middle between Q and Z is **UV**
*/