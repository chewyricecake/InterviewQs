// 2114. Maximum Number of Words Found in Sentences

/**
 * @param {string[]} sentences
 * @return {number}
 */
 var mostWordsFound = function(sentences) {
    max = 0;
    for(let i = 0; i<sentences.length; i++){
        let arr = sentences[i].split(" ");
        if(arr.length>max){
            max = arr.length;
        }
    }
    return max;
};

sentences = ["alice and bob love leetcode","i think so too","this is great thanks very much"];

console.log(mostWordsFound(sentences));