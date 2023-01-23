//1221. Split a String in Balanced Strings

/**
 * @param {string} s
 * @return {number}
 */
 var balancedStringSplit = function(s) {
    let L = 0;
    let count = 0;
    for (let i = 0; i<s.length; i++){
        if(s[i]=="L"){
            L ++;
        }
        else
            L --;
        if(L == 0){
            count++;
        }
    }
    console.log(count);
    return(count);
};

s = "RLRRLLRLRL";
s2 = "RLLLLRRRLR";
s3 = "LLLLRRRR";

balancedStringSplit(s);
balancedStringSplit(s2);
balancedStringSplit(s3);
