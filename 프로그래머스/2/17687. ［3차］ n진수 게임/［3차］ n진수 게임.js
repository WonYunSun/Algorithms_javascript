function solution(n, t, m, p) {
  const answer = [];
  let count = 0;
  for (let i = 0; i <= m * t; i++) {
    let converted = i.toString(n).toUpperCase().split("");

    for (let char of converted) {
      if (count % m === p - 1) answer.push(char);
      if (answer.length === t) return answer.join("");
      count++;
    }
  }
}