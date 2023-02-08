import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
/*        String s = "anagram";
        String t = "nagaram";*/

        String s1 = "cat";
        String t1 = "car";

/*        System.out.println(isAnagram(s,t));*/
        System.out.println(isAnagram(s1,t1));

    }

    public static boolean isAnagram(String s, String t){
        if(s.length()!=t.length()){
            return false;
        }

        char sArray[] = s.toCharArray();
        char tArray[] = t.toCharArray();
        Arrays.sort(sArray);
        Arrays.sort(tArray);

        for(int i = 0; i<sArray.length; i++){

            if(sArray[i]!=tArray[i]){
                return false;
            }
        }
        return true;
    }
}