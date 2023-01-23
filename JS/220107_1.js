// 1534. Count Good Triplets
/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
 var countGoodTriplets = function(arr, a, b, c) {
    let count = 0;
    for(let i = 0; i<arr.length; i++){
        for(let j = i+1; j<arr.length; j++){
            for(let k = j+1; k<arr.length; k++){
                let l = Math.abs(arr[i]-arr[j]);
                let m = Math.abs(arr[j]-arr[k]);
                let n = Math.abs(arr[i]-arr[k]);
                if(l<=a && m<=b && n<=c){
                    count ++;
                }
            }
        }
    }
    return count;
};

arr = [3,0,1,1,9,7];
a = 7;
b = 2;
c = 3;

console.log(countGoodTriplets(arr,a,b,c));

