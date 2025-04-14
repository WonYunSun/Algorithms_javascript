function solution(n, k) {
  const converted = n.toString(k);

  const splited = converted.split("0");
  const answer = [];
  splited.forEach((ele) => {
    if (isPrime(Number(ele))) answer.push(ele);
  });

  return answer.length;
}

const isPrime = (num) => {
  if (!num || num === 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
};