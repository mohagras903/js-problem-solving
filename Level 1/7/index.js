/*
Petya And Strings
https://codeforces.com/contest/112/problem/A
*/

const firstString = readline().toLowerCase();
const secondString = readline().toLowerCase();
let result = 0;
for (let i = 0; i < firstString.length; i++) {
  if (firstString[i] > secondString[i]) {
    result = 1;
    break;
  } else if (firstString[i] < secondString[i]) {
    result = -1;
    break;
  }
}

console.log(result);
