//1725. Number Of Rectangles That Can Form The Largest Square


/**
 * @param {number[][]} rectangles
 * @return {number}
 */
 var countGoodRectangles = function(rectangles) {
    let max = 0;
    let count = 0;
    for(let i = 0; i<rectangles.length; i++){
        let rec = Math.min(...rectangles[i]);
        if (rec>max){
            max = rec;
            count = 1;
        }
        else if(rec===max){
            count++;
        }
    }
    return count;
};

rectangles =  [[5,8],[3,9],[5,12],[16,5]];

console.log(countGoodRectangles(rectangles));