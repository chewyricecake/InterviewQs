//1486. XOR Operation in an Array

/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
 var xorOperation = function(n, start) {
    let res = start + 2*0;
    
    for(let i=1; i <n; i++){
        res ^= start + 2*i;
    }
    return res;

};

n = 5; start = 0;
n2 = 4; start2 = 3;

xorOperation(n,start);
xorOperation(n2,start2);