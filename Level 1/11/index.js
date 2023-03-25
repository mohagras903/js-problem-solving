/*
Magnets
https://codeforces.com/contest/344/problem/A
*/
const noOfCases = parseInt(readline());
const magnets = [];
let groupsCounter = 1;
for (let i = 0; i < noOfCases; i++) {
  magnets.push(readline());
}

for (let i = 0; i < noOfCases - 1; i++) {
  if (magnets[i][1] === magnets[i + 1][0]) groupsCounter++;
}

console.log(groupsCounter);
