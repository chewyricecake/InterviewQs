// 1512. Number of Good Pairs

var numIdenticalPairs = function(nums) {
    let count = 0;
    for(i = 0; i<nums.length-1; i++){
        for(j = i+1; j<nums.length; j++){
            if(nums[i]==nums[j]){
                count++;
            }
        }
    }
    return(count);
};

nums = [1,2,3,1,1,3]

console.log(numIdenticalPairs(nums));