// 1672. Richest Customer Wealth

var maximumWealth = function(accounts) {
    let findmax = [];
    let max = 0;
    for (let i = 0; i<accounts.length; i++){
        let val = 0;
        for (let j=0; j<accounts[i].length; j++){
            val += accounts[i][j];
            findmax[i] = val;
        }
    }


    for (let i = 0; i<=findmax.length; i++){
        if(max<=findmax[i]){
            max = findmax[i];
        }
    }

    return max;
    
};


var maximumWealth2 = function(accounts) {
    let max = 0;
    for (let i = 0; i<accounts.length; i++){
        let val = 0;
        for (let j=0; j<accounts[i].length; j++){
            val += accounts[i][j];
        }
        if(max<val){
            max = val;
        }
    }


    return max;
    
};

accounts = [[76,6,55,11,30,65,33,74,14,16,57,79,17,87,36,61,6],[10,18,5,55,94,28,8,36,73,62,23,62,20,70,91,7,10],[73,52,73,50,5,13,45,52,46,66,68,31,89,38,23,70,90],[53,46,30,37,72,8,71,51,40,29,73,96,63,87,63,73,61],[19,42,55,82,58,24,9,39,49,4,78,87,76,22,14,5,90],[94,61,54,11,53,13,62,36,87,51,59,71,14,42,10,36,75],[96,96,16,75,27,16,56,48,90,38,40,7,65,20,98,54,84],[13,2,3,62,89,28,68,3,36,85,59,71,61,32,44,65,33],[43,29,78,49,59,18,30,39,43,43,36,33,20,20,2,23,39],[72,52,52,7,89,78,18,1,7,20,24,88,15,36,34,25,32],[78,91,59,10,97,39,93,76,11,22,81,59,50,100,77,61,6],[67,24,53,76,81,45,38,90,52,5,91,63,66,37,59,100,20],[39,56,10,80,100,89,49,75,49,4,17,7,69,48,25,53,18],[91,78,84,98,31,47,97,79,1,33,68,52,30,1,2,95,47],[95,62,46,59,11,57,26,2,64,27,25,45,97,43,31,40,89],[59,35,65,46,50,44,60,23,99,80,47,57,44,89,69,99,48],[60,72,57,2,66,25,64,37,31,78,23,75,18,19,92,91,86],[58,42,94,94,24,17,17,34,97,90,25,100,46,44,74,29,77],[49,62,43,14,96,38,27,93,52,92,81,62,38,89,71,30,77],[1,97,54,83,95,63,22,37,36,96,4,95,12,70,93,84,40],[75,32,21,19,5,51,70,69,10,34,29,23,53,85,96,71,30],[88,79,42,51,40,24,7,38,56,26,82,100,19,16,92,75,100],[56,14,70,31,60,45,29,71,43,8,14,1,51,63,28,99,11],[56,63,54,56,50,34,99,99,11,97,15,20,62,76,45,98,60],[45,37,22,71,57,40,95,52,91,78,57,99,79,45,100,79,10],[74,96,40,94,75,12,74,73,18,51,73,62,69,50,63,47,91],[38,60,1,74,95,28,93,100,57,66,47,55,2,89,90,80,88],[9,13,73,47,78,79,46,82,7,16,36,15,87,66,3,59,55],[20,66,23,18,41,13,75,70,7,3,97,74,52,60,79,79,94],[50,4,65,88,30,92,72,39,22,34,7,61,45,58,32,14,73],[48,61,29,70,67,21,19,72,41,14,73,26,63,73,72,13,16],[79,14,31,84,20,67,41,74,87,53,52,6,14,77,33,39,18],[50,70,48,65,63,20,76,80,49,76,43,41,51,33,68,78,61],[97,62,37,13,31,84,89,92,33,35,95,9,77,22,29,57,71],[89,16,24,84,36,59,33,100,55,48,47,45,59,11,20,67,69],[65,58,96,19,9,84,92,55,69,61,80,59,78,76,19,29,61],[84,66,72,59,55,71,77,23,55,63,87,57,36,72,12,58,91]];
console.log(maximumWealth(accounts));
console.log(maximumWealth2(accounts));