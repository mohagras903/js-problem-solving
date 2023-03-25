/*
Stones on the Table
https://codeforces.com/contest/266/problem/A
*/
const n = parseInt(readline());
const stones = readline();
let removedStonesCounter = 0;
for (let i = 0; i < stones.length - 1; i++) {
  if (stones[i] === stones[i + 1]) {
    removedStonesCounter++;
  }
}

console.log(removedStonesCounter);
