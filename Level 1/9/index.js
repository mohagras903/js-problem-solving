/*
Word
https://codeforces.com/contest/59/problem/A
*/
const word = readline();

let lowercaseCounter = 0;
let uppercaseCounter = 0;

for (let i = 0; i < word.length; i++) {
  if (word[i] >= "A" && word[i] <= "Z") uppercaseCounter++;
  else if (word[i] >= "a" && word[i] <= "z") lowercaseCounter++;
}

if (uppercaseCounter > lowercaseCounter) {
  console.log(word.toUpperCase());
} else {
  console.log(word.toLowerCase());
}
