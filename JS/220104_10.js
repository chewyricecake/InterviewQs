// 1656. Design an Ordered Stream
/**
 * @param {number} n
 */
 var OrderedStream = function(n) {
     this.pointer = 0;
     this.list = [];
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    let chunk = [];
    this.list[idKey-1]=value;
    while(this.list[this.pointer]){
        chunk.push(this.list[this.pointer]);
        this.pointer++;
    }
    return chunk;
    console.log(chunk);
};

["OrderedStream", "insert", "insert", "insert", "insert", "insert"]
[[5], [3, "ccccc"], [1, "aaaaa"], [2, "bbbbb"], [5, "eeeee"], [4, "ddddd"]]


/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */