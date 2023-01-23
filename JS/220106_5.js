// 1816. Truncate Sentence

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var truncateSentence = function(s, k) {
    s = s.split(" ");
    res = ""
    for (i = 0; i<k; i++){
        res = res + s[i] + " ";
    }
    res= res.substring(0,res.length-1);
    return res;
};

var truncateSentence2 = function(s, k){
    arr = s.split(" ").slice(0,k).join(" ");
    return arr;
}

s = "Hello how are you Contestant";
k = 4;

console.log(truncateSentence(s,k));
console.log(truncateSentence2(s,k));