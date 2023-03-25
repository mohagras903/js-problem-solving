/*

Police Recruits
https://codeforces.com/contest/427/problem/A

*/

const nOfEvents = readline();
const events = readline()
  .split(" ")
  .map((e) => parseInt(e));

let untreatedCrimes = 0;
let availableOfficers = 0;

for (let i = 0; i < nOfEvents; ++i) {
  if (events[i] !== -1) {
    availableOfficers += events[i];
  } else {
    if (availableOfficers > 0) {
      availableOfficers--;
    } else {
      untreatedCrimes++;
    }
  }
}

console.log(untreatedCrimes);
