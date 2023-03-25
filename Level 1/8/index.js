/*
Boy or Girl
https://codeforces.com/contest/236/problem/A
*/

const username = readline();

const set = new Set(username);

console.log(set.size % 2 ? "IGNORE HIM" : "CHAT WITH HER!");
