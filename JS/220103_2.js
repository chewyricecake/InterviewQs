// 1342. Number of Steps to Reduce a Number to Zero

/**
 * @param {number} num
 * @return {number}
 */
 var numberOfSteps = function(num) {
    let count = 0;
    while(num !=0){
        if(num%2==0){
            num /=2;
        }
        else{
            num -=1;
        }
        count ++;
    }
    return count;
};

num = 14

console.log(numberOfSteps(num));