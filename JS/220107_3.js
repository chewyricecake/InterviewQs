// 832. Flipping an Image

/**
 * @param {number[][]} image
 * @return {number[][]}
 */
 var flipAndInvertImage = function(image) {
    let rev = [];
    let inv = [];
    for(let i = 0; i<image.length; i++){
        rev[i] = image[i].reverse();
    }
    for(let i = 0; i<rev.length; i++){
        let s = [];
        for(let j = 0; j<rev[i].length; j++){
            if(rev[i][j] === 0){
                s.push(1);
            }
            else{
                s.push(0);
            }
        }
        inv[i] = s;
    }
    return inv;
};

var flipAndInvertImage2 = function(image) {
    for(let i = 0; i<image.length; i++){
        image[i].reverse;
    }

    for(let i = 0; i<image.length; i++){
        for(let j = 0; j<image[i].length; j++){
            image[i][j] = image[i][j] == 0? 1:0;
        }
    }
    return image;
}

image = [[1,1,0],[1,0,1],[0,0,0]];

console.log(flipAndInvertImage(image));
console.log(flipAndInvertImage2(image));