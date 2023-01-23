// 1732. Find the Highest Altitude
/**
 * @param {number[]} gain
 * @return {number}
 */
 var largestAltitude = function(gain) {
     let height = 0;
     let ans = [0];
     for(let i = 0; i<gain.length; i++){
         height += gain[i];
         ans.push(height);
     }
     return(Math.max(...ans));
};

gain = [-5,1,5,0,-7];
console.log(largestAltitude(gain));