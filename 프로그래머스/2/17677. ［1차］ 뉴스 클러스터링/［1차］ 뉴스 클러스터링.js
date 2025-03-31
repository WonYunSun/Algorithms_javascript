function getMultiset(str) {
  const set = [];
  for (let i = 0; i < str.length - 1; i++) {
    const pair = str[i] + str[i + 1];
    if (/^[a-z]+$/.test(pair)) {
      set.push(pair);
    }
  }
  return set;
}

function solution(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  const setStr1 = getMultiset(str1);
  const setStr2 = getMultiset(str2);

  return Math.trunc(Jaccard(setStr1, setStr2) * 65536);
}

function Jaccard(set1, set2) {
  //공집합 처리
  if (set1.length === 0 && set2.length === 0) return 1;

  const freq = {};

  set1.forEach((element) => {
    if (!freq[element]) freq[element] = [0, 0]; // 초기화
    freq[element][0] += 1;
  });

  set2.forEach((element) => {
    if (!freq[element]) freq[element] = [0, 0];
    freq[element][1] += 1;
  });

  const union = [];
  const intersection = [];

  Object.entries(freq).forEach(([key, val]) => {
    const cnt = Math.max(val[0], val[1]);
    for (let i = 0; i < cnt; i++) {
      union.push(key);
    }
  });

  Object.entries(freq).forEach(([key, val]) => {
    const cnt = Math.min(val[0], val[1]);
    for (let i = 0; i < cnt; i++) {
      intersection.push(key);
    }
  });

  return intersection.length / union.length;
}