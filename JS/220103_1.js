// 1389. Create Target Array in the Given Order

/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
 var createTargetArray = function(nums, index) {
    let ans = [];
    for(let i = 0; i<nums.length; i++){
        ans.splice(index[i],0,nums[i]);
    }
    return ans;
};

nums = [0,1,2,3,4]
index = [0,1,2,2,1]

console.log(createTargetArray(nums,index));