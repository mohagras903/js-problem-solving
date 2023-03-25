/*
Word Capitalization
https://codeforces.com/contest/281/problem/A
*/
const word = readline();

const firstLetterASCII = word.charCodeAt(0);

if (firstLetterASCII >= 97) {
  word[0] = String.fromCharCode(firstLetterASCII + 32);
}
console.log(word);
