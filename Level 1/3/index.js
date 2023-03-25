/*
Bear and Big Brother
https://codeforces.com/contest/791/problem/A
*/

const currentWeights = readline()
  .split(" ")
  .map((num) => parseInt(num));

let limak = currentWeights[0];
let bob = currentWeights[1];
let years = 0;

while (limak <= bob) {
  limak *= 3;
  bob *= 2;
  years++;
}

console.log(years);
