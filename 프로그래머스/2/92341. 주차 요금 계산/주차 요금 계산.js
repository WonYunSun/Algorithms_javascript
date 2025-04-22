function solution(fees, records) {
  const [defaultTime, defaultFee, unitTime, unitFee] = fees;
  const timeTable = {}; //차량 별 누적 시간 중간 계산
  const totalParkingTime = []; //최종 누적 시간
  records.forEach((record) => {
    const [time, number, type] = record.split(" ");

    if (!timeTable[number]) timeTable[number] = [];

    if (type === "OUT") {
      const diff = timeDiff(timeTable[number].pop(), time);
      timeTable[number].push(diff);
    } else {
      timeTable[number].push(time);
    }
  });

  Object.keys(timeTable)
    .sort()
    .forEach((car) => {
      if (typeof timeTable[car][timeTable[car].length - 1] === "string") {
        timeTable[car][timeTable[car].length - 1] = timeDiff(timeTable[car].pop(), "23:59");
      }
      const total = timeTable[car].reduce((acc, cur) => {
        return acc + cur;
      }, 0);

      totalParkingTime.push(total);
    });

  return totalParkingTime.map((acc) => {
    if (acc <= defaultTime) return defaultFee;
    return defaultFee + Math.ceil((acc - defaultTime) / unitTime) * unitFee;
  });
}

function timeDiff(start, end) {
  const [h1, m1] = start.split(":").map(Number);
  const [h2, m2] = end.split(":").map(Number);
  return h2 * 60 + m2 - (h1 * 60 + m1);
}
