function solution(msg) {
  const dict = {};
  const answer = [];

  // A~Z 초기화
  for (let i = 1; i <= 26; i++) {
    dict[String.fromCharCode(i + 64)] = i;
  }

  let currentIndex = 27;
  let i = 0;

  while (i < msg.length) {
    let w = msg[i];
    let j = i + 1;

    // 사전에 있는 가장 긴 문자열 찾기
    while (j <= msg.length && dict[msg.slice(i, j)] !== undefined) {
      w = msg.slice(i, j);
      j++;
    }

    answer.push(dict[w]); // 찾은 문자열의 인덱스 추가

    // 새로운 문자열 사전에 등록 (끝에 도달한 경우는 제외)
    if (j <= msg.length) {
      const newEntry = msg.slice(i, j);
      dict[newEntry] = currentIndex++;
    }

    i += w.length; // 다음 탐색 시작 위치로 이동
  }

  return answer;
}
