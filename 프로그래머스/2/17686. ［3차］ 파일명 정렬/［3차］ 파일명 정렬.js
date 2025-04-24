function solution(files) {
  const splited = {};

  //1. head, num, foot 로 나눔
  files.forEach((file) => {
    const number = file.match(/[0-9]+/)[0];
    const [head, foot] = file.split(number);
    splited[file] = [head.toLowerCase(), Number(number), foot.toLowerCase()];
  });

  console.table(splited);

  const sortedFiles = Object.entries(splited)
    .sort(([, a], [, b]) => {
      const headCompare = a[0].localeCompare(b[0]);
      if (headCompare === 0) return a[1] - b[1];
      return headCompare;
    })
    .map(([key]) => key);

  return sortedFiles;
}