function solution(friends, gifts) {
  let give = {};
  let take = {};
  let answer = {}; //선물 개수

  friends.forEach((member) => {
    give[member] = [];
    take[member] = [];
    answer[member] = 0;
  });

  gifts.forEach((history) => {
    const [from, to] = history.split(" ");
    give[from].push(to);
    take[to].push(from);
  });

  for (let i = 0; i < friends.length; i++) {
    for (let j = i + 1; j < friends.length; j++) {
      const giver = friends[i];
      const taker = friends[j];

      const givercnt = give[giver].filter((el) => el === taker).length;
      const takercnt = give[taker].filter((el) => el === giver).length;

      if (givercnt > takercnt) {
        answer[giver] += 1;
      } else if (givercnt < takercnt) {
        answer[taker] += 1;
      } else {
        // 선물 지수 비교
        const giverPresentIdx = give[giver].length - take[giver].length;
        const takerPresentIdx = give[taker].length - take[taker].length;

        if (giverPresentIdx > takerPresentIdx) {
          answer[giver] += 1;
        } else if (giverPresentIdx < takerPresentIdx) {
          answer[taker] += 1;
        }
        // 같을 경우 아무것도 하지 않음
      }
    }
  }

  return Math.max(...Object.values(answer));
}
