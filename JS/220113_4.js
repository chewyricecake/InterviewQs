// 1967. Number of Strings That Appear as Substrings in Word
/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
 var numOfStrings = function(patterns, word) {
    let count = 0; 
    for(let i = 0; i<patterns.length; i++){
         if(word.includes(patterns[i])){
             count ++;
         }
     }
     return count;
};

patterns = ["a","abc","bc","d"];
word = "abc";

console.log(numOfStrings(patterns,word));