function solution(survey, choices) {
  let result = new Map([
    ["R", 0],
    ["T", 0],
    ["C", 0],
    ["F", 0],
    ["J", 0],
    ["M", 0],
    ["A", 0],
    ["N", 0],
  ]);

  const groups = [
    ["R", "T"],
    ["C", "F"],
    ["J", "M"],
    ["A", "N"],
  ];

  for (let i = 0; i < survey.length; i++) {
    if (choices[i] < 4) {
      result.set(survey[i][0], result.get(survey[i][0]) + (4 - choices[i]));
    } else if (choices[i] > 4) {
      result.set(survey[i][1], result.get(survey[i][1]) + (choices[i] - 4));
    }
  }

  let answer = [];
  groups.map(([typeA, typeB]) => {
    if (result.get(typeA) > result.get(typeB)) {
      answer.push(typeA);
    } else if (result.get(typeA) < result.get(typeB)) {
      answer.push(typeB);
    } else {
      answer.push(typeA < typeB ? typeA : typeB);
    }
  });

  return answer.join("");
}