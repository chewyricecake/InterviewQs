// 1281. Subtract the Product and Sum of Digits of an Integer

/**
 * @param {number} n
 * @return {number}
 */

 var digits = function(n){
    let f = 0;
    while(n>0){
        n = Math.floor(n/10);
        f ++;
    }
    return f;
 }

 var subtractProductAndSum = function(n) {
     
    let f = digits(n)-1;
    let p = 1;
    let s = 0;

     for(let i = f; i >= 0 ; i--){
         dg = Math.floor(n/Math.pow(10,i))
         n = n-dg*Math.pow(10,i);
         p *= dg;
         s += dg;
        }
    return p-s;
};


let sample = 234;

console.log(subtractProductAndSum(sample));
