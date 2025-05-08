function solution(m, n, board) {
  board = board.map((row) => row.split(""));

  while (true) {
    const toRemove = new Set();
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        const current = board[i][j];
        if (current && current === board[i][j + 1] && current === board[i + 1][j] && current === board[i + 1][j + 1]) {
          toRemove.add(`${i}/${j}`);
          toRemove.add(`${i}/${j + 1}`);
          toRemove.add(`${i + 1}/${j}`);
          toRemove.add(`${i + 1}/${j + 1}`);
        }
      }
    }

    for (const pos of toRemove) {
      const [x, y] = pos.split("/").map(Number);
      board[x][y] = "";
    }

    for (let j = 0; j < n; j++) {
      const temp = [];

      // 위에서 아래로 탐색해서 지워지지 않은 블록만 저장
      for (let i = m - 1; i >= 0; i--) {
        if (board[i][j] !== "") temp.push(board[i][j]);
      }

      // 다시 아래에서부터 채우기
      for (let i = m - 1; i >= 0; i--) {
        board[i][j] = temp[m - 1 - i] || "";
      }
    }
    if (toRemove.size === 0) break;
  }

  return board.flat().filter((cell) => cell === "").length;
}