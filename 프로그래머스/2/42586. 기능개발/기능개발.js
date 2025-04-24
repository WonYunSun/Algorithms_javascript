function solution(progresses, speeds) {
  const answer = [];
  const days = progresses.map((p, i) => Math.ceil((100 - p) / speeds[i]));

  let prev = days[0];
  let count = 1;

  for (let i = 1; i < days.length; i++) {
    if (days[i] <= prev) {
      count++;
    } else {
      answer.push(count);
      prev = days[i];
      count = 1;
    }
  }
  answer.push(count);

  return answer;
}