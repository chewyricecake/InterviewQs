//1379. Find a Corresponding Node of a Binary Tree in a Clone of That Tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function (original, cloned, target) {
  dfs = function (node) {
    if (node === null) {
      return null;
    } else if (node.val == target.val) {
      return node;
    }
    return dfs(node.left) || dfs(node.right);
  };

  return dfs(cloned);
};
