// 1470. Shuffle the Array

var shuffle = function(nums, n) {
    ans = []
    for(i = 0; i<n; i++){
        ans.push(nums[i]);
        ans.push(nums[i+n]);
    }
    return ans;
    
};

nums=[1,2,3,4,5,6,7,8]
n=nums.length/2

console.log(shuffle(nums,n))
