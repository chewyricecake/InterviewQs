// 2103. Rings and Rods
var countPoints = function(rings) {
    let map = new Map();
    let n = rings.length;
    let count = 0;

    for(let i = 0; i<n; i+=2){
        color = rings[i];
        rod = rings[i+1];

        if(!map.has(rod)) map.set(rod,new Set());
        map.get(rod).add(color);
    }

    for(let [rod,color] of map){
        if(color.size ===3) count++;
    }

    return count;
};

rings = "B0B6G0R6R0R6G9"

console.log(countPoints(rings));