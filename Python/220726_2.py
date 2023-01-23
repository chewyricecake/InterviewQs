"""
3. Longest Substring Without Repeating Characters
"""

class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        seen = {}
        start = 0;
        maxLen = 0;
        
        for i in range(len(s)):
            if s[i] in seen:
                start = max(start, seen[s[i]]+1)
            seen[s[i]] = i
            maxLen = max(maxLen, i-start+1)
        
        return maxLen