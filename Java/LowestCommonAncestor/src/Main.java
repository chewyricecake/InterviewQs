import com.sun.source.tree.Tree;

public class Main {
    public static void main(String[] args) {
    }


    public class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
        TreeNode(int x) { val = x; }}

    public static TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q){
        if(root.val<p.val && root.val<q.val)
            return lowestCommonAncestor(root.right,p,q);
        if(root.val>p.val && root.val>q.val)
            return lowestCommonAncestor(root.left,p,q);
        return root;
    }

}