function solution(numbers) {
    const oneToNine = 45;
    const numbersSum = numbers.reduce((acc, num) => acc + num, 0);
    return oneToNine - numbersSum;
}
