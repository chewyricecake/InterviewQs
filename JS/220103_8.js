//1720. Decode XORed Array

/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
 var decode = function(encoded, first) {
     encoded.unshift(first);
     for(let i = 1; i<encoded.length; i++){
         encoded[i]=encoded[i] ^ encoded [i-1];
     }
     console.log(encoded);
};

encoded = [1,2,3];
first = 1;

decode(encoded, first);