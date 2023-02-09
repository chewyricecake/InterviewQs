import java.util.HashSet;
import java.util.Set;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello world!");
    }



      class ListNode {
          int val;
          ListNode next;
          ListNode(int x) {
              val = x;
              next = null;
          }
      }

    public class Solution {
        public boolean hasCycle(ListNode head) {

            Set<ListNode> nodeSet = new HashSet<ListNode>();

            if(head==null || head.next==null){
                return false;
            }
            while(head.next!=null){
                if(nodeSet.contains(head)){
                    return true;
                }
                nodeSet.add(head);
                head = head.next;
            }
            return false;
        }

        public boolean hasCycle2(ListNode head){
            ListNode fast = head;
            ListNode slow = head;

            while(fast!=null && fast.next!=null){
                slow = slow.next;
                fast = fast.next.next;
                if(slow == fast){
                    return true;
                }
            }
            return false;
        }
    }
}