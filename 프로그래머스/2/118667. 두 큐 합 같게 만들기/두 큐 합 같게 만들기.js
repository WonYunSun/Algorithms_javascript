function solution(queue1, queue2) {
  //최소 횟수로 두 큐 합 같게 만들기
  const totalQueue = [...queue1, ...queue2];

  const total = [...queue1, ...queue2].reduce((acc, cur) => acc + cur, 0);
  if (total % 2 === 1) return -1;
  const target = total / 2;

  let left = 0;
  let right = queue1.length;

  let sum = queue1.reduce((acc, cur) => acc + cur, 0);

  const maxLen = totalQueue.length * 2;
  let count = 0;

  while (count <= maxLen) {
    if (sum === target) return count;
    if (sum > target) {
      sum -= totalQueue[left++];
    } else {
      sum += totalQueue[right++];
    }
    count++;
  }

  return -1;
}