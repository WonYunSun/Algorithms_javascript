function solution(cacheSize, cities) {
  let answer = 0;

  let cache = [];

  if (cacheSize === 0) return cities.length * 5;

  for (let i = 0; i < cities.length; i++) {
    let city = cities[i].toLowerCase();

    let index = cache.indexOf(city); //인덱스 확인

    if (index !== -1) {
      //캐시에 있음
      answer += 1;
      cache.splice(index, 1);
    } else {
      //없으면
      answer += 5;
      if (cache.length === cacheSize) {
        //사이즈 넘으면 pop
        cache.pop();
      }
    }

    cache.unshift(city); //0번째로 채운다.
  }

  return answer;
}