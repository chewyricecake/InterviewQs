import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        int[] nums = new int [] {2,7,11,15};
        int target = 9;
        int[] ans = new int [] {0,1};
        int[] sol = solution(nums,target);
        boolean right = Arrays.equals(ans,sol);
        System.out.println(right);

    }
    public static int[] solution(int[] nums, int target) {
        int[] res = new int[2];
        Map<Integer, Integer> numbers = new HashMap<Integer, Integer>();

        for (int i = 0; i < nums.length; i++) {
            if (numbers.containsKey(target - nums[i])) {
                res[0] = i;
                res[1] = numbers.get(target - nums[i]);
                Arrays.sort(res);
                return res;
            }
            numbers.put(nums[i], i);
        }
        return res;
    }
}