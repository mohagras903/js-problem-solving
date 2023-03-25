/*
Black Square
https://codeforces.com/contest/431/problem/A
*/

const costInCalories = readline()
  .split(" ")
  .map((n) => parseInt(n));
const gameProcess = readline();

let totalCost = 0;

for (let i = 0; i < gameProcess.length; i++) {
  switch (gameProcess[i]) {
    case "1": {
      totalCost += costInCalories[0];
      break;
    }
    case "2": {
      totalCost += costInCalories[1];
      break;
    }
    case "3": {
      totalCost += costInCalories[2];
      break;
    }
    case "4": {
      totalCost += costInCalories[3];
      break;
    }
  }
}

console.log(totalCost);
