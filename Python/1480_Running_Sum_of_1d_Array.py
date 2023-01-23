# Time complexity: O(n)
# Space complexity: O(n)
class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        add = 0
        for i in range(len(nums)):
            add += nums[i]
            nums[i] = add
        return nums