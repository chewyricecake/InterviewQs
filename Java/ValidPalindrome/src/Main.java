public class Main {
    public static void main(String[] args) {
        String s1 = "A man, a plan, a canal: Panama";
        String s2 = "race a car";
        String s3 = " ";

        boolean s1b = isPalinDrome(s1);
        boolean s2b = isPalinDrome(s2);
        boolean s3b = isPalinDrome(s3);

        System.out.println(s1b+", "+s2b+", "+s3b);
    }

    public static boolean isPalinDrome(String s){
        s = s.replaceAll("[^a-zA-Z0-9]","").toLowerCase();
        int j = s.length()-1;
        if(s.length()==0||s.length()==1){
            return true;
        }
        for (int i = 0; i<s.length()/2; i++){
            if(s.charAt(i)!=s.charAt(j)){
                return false;
            }
            j--;
        }
        return true;
    }
}