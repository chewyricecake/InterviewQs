""" 
1. Two Sum
"""
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        res = {}
        for i in range(len(nums)):
            pair = target-nums[i]
            if pair in res:
                return [i,res[pair]]
            res[nums[i]] = i