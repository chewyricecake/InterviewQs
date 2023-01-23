//1614. Maximum Nesting Depth of the Parentheses

/**
 * @param {string} s
 * @return {number}
 */
 var maxDepth = function(s) {
     let count = [];
     let ct=0;
     let max=0;
    for(i=0;i<s.length;i++){
        if(s[i]=="("){
            ct ++;
        }
        if(s[i]==")"){
            ct --;
        }
        if(ct>=max){
            max = ct;
        }
    }
    return max;     
};

s = "(1+(2*3)+((8)/4))+1"

console.log(maxDepth(s));