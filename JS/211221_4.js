// 1480. Running Sum of 1d Array

var runningSum = function(nums) {
    let ans = [];
    let val = 0;
    for(let i=0; i<nums.length; i++){
        for(let j=0; j<=i; j++){
            val += nums[j];
        }
        ans[i]=val;
        val = 0;
    }
    console.log(ans);
    return ans;
};

var runningSum2 = function(nums) {
    let ans = [];
    for(let i = 0; i<nums.length; i++){
        if(i == 0){
            ans[i]=nums[i];
        }
        else{
            ans[i]=ans[i-1]+nums[i];
        }
    }
    console.log(ans);
    return ans;
}

nums=[1,2,3,4]

runningSum(nums);
runningSum2(nums);