public class Main {
    public static void main(String[] args) {
     int[] prices = {7,1,5,3,6,4};
     int answer = maxProfit(prices);
     System.out.println(answer);
    }


    public static int maxProfit(int prices[]){
        int buy = Integer.MAX_VALUE;
        int profit = 0;

        for (int price : prices){
            if(price<buy){
                buy = price;
            }
            else if(price-buy>profit){
                profit = price-buy;
            }
        }
        return profit;
    }

}