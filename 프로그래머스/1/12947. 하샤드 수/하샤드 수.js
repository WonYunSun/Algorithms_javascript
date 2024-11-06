function solution(x) {
  const sumX = String(x).split('').reduce((acc, curr) => acc + Number(curr), 0);
  return x % sumX === 0;
}
