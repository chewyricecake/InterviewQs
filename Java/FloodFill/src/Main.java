import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[][] image = {{1,1,1},{1,1,0},{1,0,1}};

        int sr = 1;
        int sc = 1;
        int color = 2;

        int[][] ans = floodFill(image,sr,sc,color);

        for (int[] arr: ans){
            System.out.println(Arrays.toString(arr));
        }
    }

    public static int[][] floodFill(int[][] image, int sr, int sc, int newColor){
        if(image[sr][sc]==newColor) return image;
        fill(image,sr,sc,image[sr][sc],newColor);
        return image;
    }

    public static void fill(int[][] image, int sr, int sc, int oldColor, int newColor){
        if(sr<0 || sc<0 || sr>= image.length || sc>= image[0].length || image[sr][sc]!=oldColor)
            return;
        image[sr][sc] = newColor;

        fill(image, sr+1, sc, oldColor, newColor);
        fill(image, sr-1, sc, oldColor, newColor);
        fill(image, sr, sc+1, oldColor, newColor);
        fill(image, sr, sc-1, oldColor, newColor);
    }
}