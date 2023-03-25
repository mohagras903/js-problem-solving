/*
Beautiful Matrix
https://codeforces.com/contest/263/problem/A
*/

function findCurrentPosition() {
  for (let i = 0; i < 5; ++i) {
    switch ("1") {
      case matrix[i][0]: {
        return { x: 0, y: i };
      }
      case matrix[i][1]: {
        return { x: 1, y: i };
      }
      case matrix[i][2]: {
        return { x: 2, y: i };
      }
      case matrix[i][3]: {
        return { x: 3, y: i };
      }
      case matrix[i][4]: {
        return { x: 4, y: i };
      }
      default: {
        break;
      }
    }
  }
}

const matrix = [];
for (let i = 0; i < 5; ++i) {
  const newArr = readline().split(" ");
  matrix.push(newArr);
}

const targetPosition = { x: 2, y: 2 };
const currentPosition = findCurrentPosition();

console.log(
  Math.abs(targetPosition.x - currentPosition.x) +
    Math.abs(targetPosition.y - currentPosition.y)
);
