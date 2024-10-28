function solution(q, r, code) {
  let slicedCode = [];
  for (let i = 0; i < code.length; i++) {
    if (i % q === r) {
      slicedCode.push(code[i]);
    }
  }
  return slicedCode.join("");
}
