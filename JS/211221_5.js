// 1108. Defanging an IP Address

var defangIPaddr = function(address) {
    let ans = ""
    for(let i of address){
        if(i=='.'){
            ans +='[.]';
        }
        else
            ans += i;
    }  
    return ans;
};

address = "1.1.1.1"
console.log(defangIPaddr(address));
