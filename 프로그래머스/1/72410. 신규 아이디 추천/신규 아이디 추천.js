function solution(new_id) {
  let changedId = new_id
    .toLowerCase() //소문자
    .replace(/[^a-z0-9-_.]/g, "") //특정문자제외제거
    .replace(/\.{2,}/g, ".") //.2번연속 시 .으로 치환
    .replace(/^\.|\.$/g, ""); //처음&끝.제거;

  if (!changedId) {
    changedId = "a";
  }

  changedId = changedId
    .slice(0, 15)
    .replace(/\.$/g, "")
    .padEnd(3, changedId[changedId.length - 1]);
  return changedId;
}
