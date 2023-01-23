// 1929. Concatenation of Array

var getConcatenation = function(nums) {
    let ans =[]
    for(let i = 0; i<nums.length*2; i++){
        ans[i] = nums[i%nums.length];
    }
    return ans;
};

var getConcatenation2 = function(nums){
    let ans2 =[]
    for(let i = 0; i<2; i++){
        for(let j = 0; j<nums.length; j++){
            ans2.push(nums[j])
        }
    }
    return ans2
};

nums = [1,2,1]
numsTwo = [1,3,2,1]

one = getConcatenation(nums);
two = getConcatenation(numsTwo);

three = getConcatenation2(nums);

console.log(one);
console.log(two);
console.log(three);