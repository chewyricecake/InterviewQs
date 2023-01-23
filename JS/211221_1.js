// 1920. Build Array From Permutation

var buildArray = function(nums) {
    let ans = []
    for (let i = 0; i<nums.length; i++){
        ans[i]=nums[nums[i]]
    }
    return ans;
};

nums = [0,2,1,5,3,4]
ans = buildArray(nums);
console.log(ans);