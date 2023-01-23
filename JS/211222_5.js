// 771. Jewels and Stones

var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    for(let i = 0; i<jewels.length; i++){
        for(let j = 0; j<stones.length; j++){
            if(jewels[i]==stones[j]){
                count++;
            }
        }
    }
    return(count);
};

jewels = "aA";
stones = "aAAbbbb";

console.log(numJewelsInStones(jewels,stones));