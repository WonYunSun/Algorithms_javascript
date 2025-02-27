function solution(N, stages) {
  const answer = [];

  let player = stages.length;

  for (let i = 1; i <= N; i++) {
    const failCnt = stages.filter((val) => val === i).length;
    const failRate = failCnt / player;

    answer.push({ stage: i, rate: failRate });
    player -= failCnt;
  }

  answer.sort((a, b) => b.rate - a.rate || a.stage - b.stage);

  return answer.map((item) => item.stage);
}
