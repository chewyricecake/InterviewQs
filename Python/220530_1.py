"""2160. Minimum Sum of Four Digit Number After Splitting Digits
"""

class Solution:
    def minimumSum(self, num: int) -> int:
        a,b,c,d = sorted(str(num))
        print (int(a+c)+int(b+d))