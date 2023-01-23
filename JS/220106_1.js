// 1832. Check if the Sentence Is Pangram

var checkIfPangram = function(sentence) {
    let set = new Set(sentence);
    if(set.size == 26){
        return true;
    }
    else
        return false;

};

sentence = "thequickbrownfoxjumpsoverthelazydog";

console.log(checkIfPangram(sentence));