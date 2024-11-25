function solution(n) {
    // 1. n을 3진법으로 변환
    const ternary = n.toString(3);

    // 2. 3진법 문자열을 뒤집기
    const reversedTernary = ternary.split('').reverse().join('');

    // 3. 뒤집힌 3진법을 다시 10진법으로 변환
    return parseInt(reversedTernary, 3);
}
