function solution(phone_book) {
  const set = new Set(phone_book);
  
  for (const num of phone_book) {
    for (let i = 1; i < num.length; i++) {
      if (set.has(num.slice(0, i))) {
        return false;
      }
    }
  }
  
  return true;
}