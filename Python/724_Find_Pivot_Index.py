# Time complexity: O(n)
# Space complexity: O(1)
class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        summ = sum(nums)
        left = 0
        for i, x in enumerate(nums):
            if left == summ-left-x:
                return i
            left += x
        return -1