// 1365. How Many Numbers Are Smaller Than the Current Number

var smallerNumbersThanCurrent = function(nums) {
    let ans = [];
    for(let i = 0; i<nums.length; i++){
        let count = 0;
        for(let j = 0; j<nums.length; j++){
            if(nums[i]>nums[j]){
                count++;
            }
        }
        ans.push(count);
    }
    return(ans);
};

nums = [8,1,2,2,3];
console.log(smallerNumbersThanCurrent(nums));