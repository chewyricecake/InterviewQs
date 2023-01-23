// 1528. Shuffle String

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
 var restoreString = function(s, indices) {
    let ans=[];
    for(let i = 0; i<indices.length; i++){
        ans[indices[i]] = s[i];
    }
    anss = ans.toString();
    return anss.replace(/[^a-zA-Z]/g,"");    
};

s = "codeleet"
indices = [4,5,6,7,0,2,1,3]

console.log(restoreString(s,indices));