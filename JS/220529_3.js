// 1302. Deepest Leaves Sum
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function (root) {
  let dl = 0;
  let sum = 0;

  const traverse = (node, level) => {
    if (node === null) return;
    if (level === dl) {
      sum += node.val;
    }
    if (level > dl) {
      dl = level;
      sum = node.val;
    }
    traverse(node.left, level + 1);
    traverse(node.right, level + 1);
  };

  traverse(root, 0);

  return sum;
};
