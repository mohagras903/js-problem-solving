/*
Gravity Flip
https://codeforces.com/contest/405/problem/A
*/
const noOfColumns = parseInt(readline());
const columns = readline()
  .split(" ")
  .map((n) => parseInt(n));
let result = "";

columns.sort((a, b) => a - b);

result = result.concat(columns[0]);

for (let i = 1; i < columns.length; i++) {
  result = result.concat(` ${columns[i]}`);
}

console.log(result);
