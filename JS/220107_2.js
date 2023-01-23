// 1844. Replace All Digits with Characters

/**
 * @param {string} s
 * @return {string}
 */
 var replaceDigits = function(s) {
    let res = ""
    for(let i = 0; i<s.length; i+=2){
        res += s[i];
        if(s[i+1]){
            res += shift(s[i],s[i+1]);
        }
    }
    return res;
};

var shift = function(c,x){
    let ascii = c.charCodeAt();
    let numb = parseInt(x);
    let letter = String.fromCharCode(ascii+numb);
    return letter;
}

s = "a1c1e1";

console.log(replaceDigits(s));