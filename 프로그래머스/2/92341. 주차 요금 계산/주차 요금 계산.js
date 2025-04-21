function solution(fees, records) {
  const [defaultTime, defaultFee, unitTime, unitFee] = fees;
  const timeTable = {}; //차량번호와 시간을 담을 것
  const timeTable2 = []; //요금 결과
  const answer = [];
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

      timeTable2.push(total);
    });

  Object.values(timeTable2).forEach((val) => {
    if (val <= defaultTime) {
      answer.push(defaultFee);
    } else {
      const fee = defaultFee + Math.ceil((val - defaultTime) / unitTime) * unitFee;
      answer.push(fee);
    }
  });

  return Object.values(answer);
}

const timeDiff = (time1, time2) => {
  const [hour1, minute1] = time1.split(":").map(Number);
  const [hour2, minute2] = time2.split(":").map(Number);

  const time1InMinutes = hour1 * 60 + minute1;
  const time2InMinutes = hour2 * 60 + minute2;

  const diff = Math.abs(time2InMinutes - time1InMinutes);

  return diff;
};