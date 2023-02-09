public class Main {
    public static void main(String[] args) {
        int[] nums = {-1,0,3,5,9,12};
        int target = 9;
        System.out.println(search(nums,target));
    }

    public static int search(int[] nums, int target){
        if(nums==null||nums.length==0){
            return -1;
        }
        int left = 0;
        int right = nums.length-1;
        while(left<=right){
            int mid = left+(right-left)/2;
            if(target<nums[mid])
                right = mid-1;
            else if(target == nums[mid])
                return mid;
            else
                left = mid+1;
        }

        return -1;
    }
}