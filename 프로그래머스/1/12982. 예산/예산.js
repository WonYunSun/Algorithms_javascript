function solution(d, budget) {
  const sorted = d.sort((a, b) => a - b);
  let cnt = 0;
  for (let ele of sorted) {
    if (budget - ele >= 0) {
      budget -= ele;
      cnt++;
    } else {
      break;
    }
  }
  return cnt;
}