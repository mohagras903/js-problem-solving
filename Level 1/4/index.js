/*
Team
https://codeforces.com/contest/231/problem/A
*/

const noOfProblems = parseInt(readline());
const problemsArr = [];
let problemsTobeSolved = 0;
for (let i = 0; i < noOfProblems; ++i) {
  const newArr = readline()
    .split(" ")
    .map((num) => parseInt(num));
  problemsArr[i] = newArr;
}

problemsArr.forEach((problem) => {
  if (problem[0] + problem[1] + problem[2] >= 2) {
    problemsTobeSolved++;
  }
});

print(problemsTobeSolved);
