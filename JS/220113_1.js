// 1588. Sum of All Odd Length Subarrays

/**
 * @param {number[]} arr
 * @return {number}
 */
 var sumOddLengthSubarrays = function(arr) {
     let ans = 0;
     for(let i = 0; i<arr.length; i++){
         for(let j = i; j<arr.length; j++){
             if((j-i)%2==0){
                 for(let k = i; k<=j; k++){
                     ans += arr[k];
                 }
             }
         }
     }
     return ans;
};

arr = [1,4,2,5,3];

console.log(sumOddLengthSubarrays(arr));