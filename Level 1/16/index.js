/*

Night at the Museum
https://codeforces.com/contest/731/problem/A

*/

const word = readline()
  .split("")
  .map((char) => char.charCodeAt(0));

let totalRotations = 0;
let lastPosition = 97;

for (let charCode of word) {
  const move1 = Math.abs(charCode - lastPosition);
  const move2 = Math.abs(Math.abs(lastPosition - charCode) - 26);
  totalRotations += Math.min(move1, move2);
  lastPosition = charCode;
}

console.log(totalRotations);
