function solution(phone_book) {
    //한 번호가 다른 번호의 접두어면 false
    //전부탐색해야 하는 줄 알았는데, 이렇게 비슷한 단어를 찾는다? => 사전처럼 정렬
    //some : 배열에서 하나만 true면 true반환
    return !phone_book.sort().some((num, i)=>{//some을 역이용(?)
        if(i === phone_book.length -1) return false;  //마지막까지 검사한거면 접두어 없음
        return phone_book[i+1].startsWith(phone_book[i]);
    })
}