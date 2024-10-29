function solution(n) {
  const sum = n
    .toString()
    .split("")
    .reduce((acc, num) => acc + parseInt(num), 0);
  return sum;
}