// 1773. Count Items Matching a Rule

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
 var countMatches = function(items, ruleKey, ruleValue) {
    let i = 0;
    let count = 0;
    if(ruleKey === "type"){
        i = 0;
    }    
    if(ruleKey === "color"){
        i = 1;
    }
    if(ruleKey === "name"){
        i = 2;
    }
    
    for(let j = 0; j<items.length; j++){
        if(items[j][i] == ruleValue){
            count ++;
        }
    }
    return count;
};

items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]]
ruleKey = "color";
ruleValue = "silver";

console.log(countMatches(items, ruleKey, ruleValue));