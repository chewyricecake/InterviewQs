// 1684. Count the Number of Consistent Strings
/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
 var countConsistentStrings = function(allowed, words) {
     let include = true;
     let output = 0;
     for(let i = 0; i<allowed.length; i++){
         for(let j = 0; j<allowed[i].length; j++){
             if(!allowed.includes(allowed[i].slice(j,j+1))){
                 include = false;
             }
         }
         if(include){
             output++;
         }
         else{
             include = true;
         }
     }
     return output;
};


var countConsistentStrings2 = function(allowed, words) {
    let set = new Set(allowed);
    return words.reduce((a,w)=>{
        return w.split('').every(l=>set.has(l))? ++a : a
    },0)
};

let allowed = "ab"
let words = ["ad","bd","aaab","baa","badab"]

console.log(countConsistentStrings2(allowed,words));