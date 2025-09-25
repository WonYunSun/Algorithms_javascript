function solution(n)
{

    let p =0; //현재 위치
    let k =0; //점프 횟수

   
    while (n > 0) {
        if (n % 2 === 0) {
                n = n / 2;
            } else {
                n -= 1;
                k++;
            }
        

    }
return k;
    
}