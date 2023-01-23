// 1913. Maximum Product Difference Between Two Pairs

var maxProductDifference = function(nums) {
    let temp;
    for(let i = 0; i<nums.length; i++){
        for(let j = i+1; j<nums.length; j++){
            if(nums[i]>nums[j]){
                temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }
    }
    return (nums[nums.length-1]*nums[nums.length-2])-nums[0]*nums[1];
    
};

var maxProductDifference2 = function(nums){
    let h1 = Math.max(...nums);
    nums.splice(nums.indexOf(h1),1);
    let h2 = Math.max(...nums);
    nums.splice(nums.indexOf(h2),1);
    let m1 = Math.min(...nums);
    nums.splice(nums.indexOf(m1),1);
    let m2 = Math.min(...nums);
    
    return h1*h2 - m1*m2;
}

nums = [5,6,2,7,4];

console.log(maxProductDifference2(nums));
