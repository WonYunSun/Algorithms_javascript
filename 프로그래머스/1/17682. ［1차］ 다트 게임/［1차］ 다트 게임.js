function solution(dartResult) {
  let score = 0, arr = [];
  
  for (let i = 0; i < dartResult.length; i++) {
    if (!isNaN(dartResult[i])) {
      score = Number(dartResult[i - 1]) === 1 ? 10 : Number(dartResult[i]);
    } else {
      switch (dartResult[i]) {
        case 'S':
          arr.push(score);
          break;
        case 'D':
          arr.push(score ** 2);
          break;
        case 'T':
          arr.push(score ** 3);
          break;
        case '*':
          if (arr.length > 1) arr[arr.length - 2] *= 2;
          arr[arr.length - 1] *= 2;
          break;
        case '#':
          arr[arr.length - 1] *= -1;
          break;
      }
    }
  }
  
  return arr.reduce((a, b) => a + b, 0);
}
