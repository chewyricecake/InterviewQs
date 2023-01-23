// 804. Unique Morse Code Words

/**
 * @param {string[]} words
 * @return {number}
 */
 var uniqueMorseRepresentations = function(words) {
    var morse = [".-","-...","-.-.","-..",".","..-.",
                  "--.","....","..",".---",
                  "-.-",".-..","--","-.","---",".--.",
                  "--.-",".-.","...","-","..-","...-",
                  ".--","-..-","-.--","--.."];
    
    var transformations = new Set();
    
    for (let word of words) {        
        var trans = "";
        for (let letter of word) {
            var index = letter.charCodeAt(0) - 97;
            trans += morse[index];
        }
        
        transformations.add(trans);   
    }
    
    return transformations.size;
};

words = ["gin","zen","gig","msg"];

console.log(uniqueMorseRepresentations(words));