function solution(today, terms, privacies) {
  const expire = new Date(today);

  const termType = {};

  terms.forEach((item) => {
    const [type, term] = item.split(" ");
    termType[type] = Number(term);
  });

  const answer = [];
  privacies.forEach((item, index) => {
    const [date, type] = item.split(" ");
    const collectionDate = new Date(date);
    const isExpired = collectionDate.setMonth(collectionDate.getMonth() + termType[type]) <= expire;
    if (isExpired) answer.push(index + 1);
  });

  return answer;
}
