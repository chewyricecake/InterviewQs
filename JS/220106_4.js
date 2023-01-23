// 709. To Lower Case

/**
 * @param {string} s
 * @return {string}
 */
 var toLowerCase = function(s) {
     let diff = 'a'.charCodeAt(0)-'A'.charCodeAt(0);
     let res = "";
     for(let i = 0; i<s.length; i++){
        charCode = s[i].charCodeAt(0);
        if(charCode >= 65 && charCode <=90){
            lower = String.fromCharCode(charCode+diff);
            res += lower;
        }
        else{
            res += s[i];
        } 
     }
     return res;
};

s = "Hello";
console.log(toLowerCase(s));