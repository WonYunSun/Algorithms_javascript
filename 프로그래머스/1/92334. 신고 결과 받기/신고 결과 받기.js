function solution(id_list, report, k) {
  let reportObj = {};
  let userReports = {};

  //Set으로 중복값제외
  let reportSet = new Set(report);

  //신고횟수, 누가 누구를 신고했는지
  id_list.forEach((id) => {
    reportObj[id] = 0;
    userReports[id] = new Set();
  });

  reportSet.forEach((item) => {
    const [reporter, reported] = item.split(" ");
    reportObj[reported] += 1;
    userReports[reporter].add(reported);
  });

  //정지유저
  let bannedUsers = new Set();

  for (let user in reportObj) {
    if (reportObj[user] >= k) {
      bannedUsers.add(user);
    }
  }

  let mailCounts = id_list.map((id) => {
    let count = 0;
    userReports[id].forEach((reportedUser) => {
      if (bannedUsers.has(reportedUser)) {
        count++;
      }
    });
    return count;
  });

  return mailCounts;
}