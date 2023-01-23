"""1379. Find a Corresponding Node of a Binary Tree in a Clone of That Tree
"""
        
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def getTargetCopy(self, original: TreeNode, cloned: TreeNode, target: TreeNode) -> TreeNode:
        
        def dfs(node):
            if not node:
                return None
            elif node.val == target.val:
                return node
            return dfs(node.left) or dfs(node.right)
        
        return dfs(cloned)