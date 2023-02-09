import java.util.HashSet;
import java.util.Set;

public class Main {
    public static void main(String[] args) {
        String s = "abccccdd";
        int ans = 7;

        System.out.println(ans == longestPalindrome(s));

    }

    public static int longestPalindrome(String s){
        if(s==null || s.length()==0)
            return 0;

        int count = 0;
        Set<Character> dup = new HashSet<Character>();

        for (Character c: s.toCharArray()){
            if(dup.contains(c)){
                dup.remove(c);
                count ++;
            }
            else{
                dup.add(c);
            }
        }
        if(dup.isEmpty()){
            return 2*count;
        }
        return 2*count+1;
    }
}