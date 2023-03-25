/*
Vanya And Fence
https://codeforces.com/contest/677/problem/A
*/
const arrOne = readline()
  .split(" ")
  .map((num) => parseInt(num));

const fenceHeight = arrOne[1];
let peopleHeights = readline()
  .split(" ")
  .map((num) => parseInt(num));
let widthCounter = 0;

for (let i = 0; i < peopleHeights.length; i++) {
  if (peopleHeights[i] > fenceHeight) {
    widthCounter += 2;
  } else {
    widthCounter++;
  }
}

console.log(widthCounter);
