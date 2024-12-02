function solution(strings, n) {
  return strings.sort((a, b) => {
    // 인덱스 n번째 글자 비교
    if (a[n] === b[n]) {
      // n번째 문자가 같으면 사전순으로 정렬
      return a.localeCompare(b);
    }
    // n번째 문자가 다르면 해당 문자로 비교
    return a[n].localeCompare(b[n]);
  });
}