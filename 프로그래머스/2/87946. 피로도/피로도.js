function solution(k, dungeons) {
    
    let ans = 0;

    const visited = Array(dungeons.length).fill(false);

    function dfs(tired, count){
        ans = Math.max(ans,count);

        for(let i =0; i<dungeons.length; i++){
            const [need, cost] = dungeons[i];

            if(!visited[i] && tired >= need){
                visited[i] = true;
                
                dfs(tired-cost, count+1);

                visited[i] = false;
            }
        }
    }
  dfs(k, 0);
    return ans;
}
