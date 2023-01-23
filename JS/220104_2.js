//2089. Find Target Indices After Sorting Array

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var targetIndices = function(nums, target) {
    let temp = 0;
    let ans = [];
    for(let i = 0; i<nums.length; i++){
        for(let j = i+1; j<nums.length; j++){
            if(nums[j]<nums[i]){
                temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }
    }
    for(let i = 0; i<nums.length; i++){
        if(nums[i]==target){
            ans.push(i);
        }
    }
    return(ans);
};

var targetIndices2 = function(nums, target) {
    let temp = 0;
    let ans = [];
    nums.sort(function(a,b){return a-b});
    for(let i = 0; i<nums.length; i++){
        if(nums[i]==target){
            ans.push(i);
        }
    }
    return(ans);
};

nums = [1,2,5,2,3]
target = 2

console.log(targetIndices(nums,target));
console.log(targetIndices2(nums,target));