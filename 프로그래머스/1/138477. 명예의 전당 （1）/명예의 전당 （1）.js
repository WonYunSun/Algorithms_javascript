function solution(k, score) {
    const hallOfFame = []; // 명예의 전당을 저장할 배열
    const result = []; // 매일 발표되는 최하위 점수를 저장할 배열

    for (let i = 0; i < score.length; i++) {
        hallOfFame.push(score[i]); // 현재 점수를 명예의 전당에 추가
        hallOfFame.sort((a, b) => b - a); // 점수를 내림차순으로 정렬

        if (hallOfFame.length > k) {
            hallOfFame.pop(); // k를 초과하면 최하위 점수를 제거
        }

        result.push(hallOfFame[hallOfFame.length - 1]); // 명예의 전당의 최하위 점수를 기록
    }

    return result;
}