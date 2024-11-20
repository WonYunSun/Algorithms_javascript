function solution(price, money, count) {
    // 총 필요한 금액 계산
    let totalCost = 0;
    for (let i = 1; i <= count; i++) {
        totalCost += price * i;
    }
    
    // 부족한 금액 계산
    const difference = totalCost - money;

    // 부족하지 않으면 0 반환
    return difference > 0 ? difference : 0;
}

