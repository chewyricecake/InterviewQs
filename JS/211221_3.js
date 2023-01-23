// 2011. Final Value of Variable After Performing Operations

var finalValueAfterOperations = function(operations) {
    let x = 0;
    for(let i = 0; i<operations.length; i++){
        let op = operations[i].replace('X','')
        if(op =='--'){
            x -= 1;
        }
        else
            x += 1;
    }
    console.log(x);
    return x; 
};

var finalValueAfterOperations2 = function(operations){
    let x = 0;
    operations.forEach(op => {
        if( op === '++X' || op === 'X++'){
            x++;
        }
        else{
            x--;
        }
    })
    console.log(x);
    return x;

}
operations = ['++X','--X','X++']
operations2 = ['++X','--X','X++','X++']

finalValueAfterOperations(operations)
finalValueAfterOperations2(operations2)
