/*
Antoin And Danik
https://codeforces.com/contest/734/problem/A
*/
const noOfGames = parseInt(readline());
const results = readline();
let a = 0,
  d = 0;
for (let i = 0; i < noOfGames; i++) {
  if (a > 0.5 * noOfGames || d > 0.5 * noOfGames) break;
  if (results[i] === "A") a++;
  else d++;
}

if (a > d) console.log("Anton");
else if (d > a) console.log("Danik");
else console.log("Friendship");
