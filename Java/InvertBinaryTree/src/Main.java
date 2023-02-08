public class Main {
    public static void main(String[] args) {


    }

    public class TreeNode {
          int val;
          TreeNode left;
          TreeNode right;
          TreeNode() {}
          TreeNode(int val) { this.val = val; }
          TreeNode(int val, TreeNode left, TreeNode right) {
              this.val = val;
              this.left = left;
              this.right = right;
          }
      }

    class Solution {
        public TreeNode invertTree(TreeNode root) {
            if(root == null)
                return null;
            TreeNode tempTree = root.right;
            root.right = invertTree(root.left);
            root.left = invertTree(tempTree);

            return root;
        }
    }
}