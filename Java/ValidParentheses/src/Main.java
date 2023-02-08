import java.util.Stack;

public class Main {
    public static void main(String[] args) {
        String s = "()";
        String s1 = "()[]{}";
        String s2 = "(]";
        String s3 = "([)]";

        System.out.println("0");
        boolean bs = solution(s);
        System.out.println(s+": "+bs);
        System.out.println("1");
        boolean bs1 = solution(s1);
        System.out.println(s1+": "+bs1);
        System.out.println("2");
        boolean bs2 = solution(s2+": "+s2);
        System.out.println(bs2);
        System.out.println("3");
        boolean bs3 = solution(s3);
        System.out.println(s3+": "+bs3);



    }

    public static boolean solution(String s) {
        Stack<Character> stack = new Stack<Character>();
        for (char c : s.toCharArray()) {
            if (c == '(')
                stack.push(')');
            else if (c == '{')
                stack.push('}');
            else if (c == '[')
                stack.push(']');
            else if (stack.isEmpty()||stack.pop() != c){
                return false;
            }
        }
        return stack.isEmpty();
    }
}