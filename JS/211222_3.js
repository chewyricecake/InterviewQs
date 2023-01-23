// 1431. Kids With the Greatest Number of Candies

var kidsWithCandies = function(candies, extraCandies) {
    let ans = [];
    let greatest;
    let max;
    
    for(i = 0; i<candies.length; i++){
        max = candies[i]+extraCandies;
        greatest = true;
        for(j=0; j<candies.length; j++){
            if(max<candies[j]){
                greatest = false;
            }
        }
        ans[i]=greatest;
    }
    return(ans);    
};

var kidsWithCandies2 = function(candies, extraCandies){
    let max = Math.max(...candies);
    let ans = []

    for(i = 0; i<candies.length; i++){
        if(candies[i]+extraCandies>=max){
            ans.push(true);
        }
        else{
            ans.push(false);
        }

    }
    return(ans);
}

candies=[2,3,5,1,3];
extraCandies=3;

console.log(kidsWithCandies(candies,extraCandies));
console.log(kidsWithCandies2(candies,extraCandies));