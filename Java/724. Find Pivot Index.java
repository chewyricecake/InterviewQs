class Solution {
    public int pivotIndex(int[] nums) { 
        int sum = 0;
        int left = 0;
        for (int i : nums)
        sum+=i;
        for (int i = 0; i<nums.length; i++){
            sum -= nums[i];
//            System.out.printf("%d,%d,%d\n",i,sum,left);
            if(sum == left)
            return i;
            left += nums[i];
        }
        return -1;
    }
}