//2108. Find First Palindromic String in the Array


/**
 * @param {string[]} words
 * @return {string}
 */
 var firstPalindrome = function(words) {
     for(let i = 0; i<words.length; i++){
         let j = words[i].length; 
         let k = 0;
         while(k<j){
             if(words[i][k++] != words[i][j--]){
                 break;
             }
             return words[i];
         }     
    }     
    return '';
};

var firstPalindrome2 = function(words) {
    for(let i = 0; i<words.length; i++){
       if(words[i]==words[i].split('').reverse().join('')){
           console.log(words[i]);
           return words[i];
       }
    }
    return "";
};

words = ["abc","car","ada","racecar","cool"];

firstPalindrome2(words);