//2181. Merge Nodes in Between Zeros
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function (head) {
  let currentNode = head;

  while (currentNode?.next) {
    let node = currentNode.next;
    let sum = 0;

    while (node && node.val !== 0) {
      sum += node.val;
      node = node.next;
    }

    if (node.next === null) {
      node = null;
    }

    currentNode.next = node;
    currentNode.val = sum;
    currentNode = currentNode.next;
  }

  return head;
};
