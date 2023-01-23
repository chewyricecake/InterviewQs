// 1662. Check If Two String Arrays are Equivalent

/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
 var arrayStringsAreEqual = function(word1, word2) {
    let str1="";
    let str2="";
    for(let i = 0; i<word1.length; i++){
        str1 += word1[i];
    }
    for(let i = 0; i<word2.length; i++){
        str2 += word2[i];
    }
    if(str1 === str2){
        return true;
    }
    else
        return false; 

    
};

var arrayStringsAreEqual2 = function(word1, word2) {
    let str1 = word1.join('');
    let str2 = word2.join('');
    return str1 == str2;
};

word1 = ["ab", "c"];
word2 = ["a", "bc"];

console.log(arrayStringsAreEqual(word1,word2));
console.log(arrayStringsAreEqual2(word1,word2));