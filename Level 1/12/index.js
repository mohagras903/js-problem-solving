/*
Sereja and Dima
https://codeforces.com/contest/381/problem/A
*/
const noOfCards = parseInt(readline());
const cards = readline()
  .split(" ")
  .map((n) => parseInt(n));
const scores = {
  s: 0,
  d: 0,
};
let turn = "s";
for (let i = 0; i < noOfCards; ++i) {
  if (cards[0] > cards[noOfCards - 1 - i]) {
    scores[turn] += cards.shift();
  } else {
    scores[turn] += cards.pop();
  }
  turn = turn === "s" ? "d" : "s";
}

console.log(`${scores.s} ${scores.d}`);
