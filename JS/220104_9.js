// 1859. Sorting the Sentence

/**
 * @param {string} s
 * @return {string}
 */
 var sortSentence = function(s) {
    let split = s.split(" ")
    let ftoken;
    let stoken;
    let token;
    let temp;
    let res="";
    for (let i = 0; i<split.length; i++){
        for (let j = i+1; j<split.length; j++){
            ftoken = split[i].match(/\d/g)
            stoken = split[j].match(/\d/g)
            if(ftoken>stoken){
                temp = split[i];
                split[i] = split[j];
                split[j] = temp;
            }
        }
    }
    
    for (let i = 0; i<split.length; i++){
        
        token = split[i].substring(0,split[i].length-1)+" ";
        res += token;
    }
    res = res.substring(0,res.length-1);
    return res;
};

s = "is2 sentence4 This1 a3";

console.log(sortSentence(s));