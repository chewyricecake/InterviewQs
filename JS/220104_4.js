// 2037. Minimum Number of Moves to Seat Everyone

/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
 var minMovesToSeat = function(seats, students) {
    let temp;
    let temp2;
    let res=0;
    for(let i = 0; i<seats.length; i ++){
        for(let j = i+1; j<seats.length; j++){
            if(seats[j]<seats[i]){
                temp = seats[j];
                seats[j] = seats[i];
                seats[i] = temp;

            }
            if(students[j]<students[i]){
                temp2 = students[j];
                students[j] = students[i];
                students[i] = temp2;                
            }
        }
    }

    
    for(let i = 0; i<seats.length; i++){
        res += Math.abs(seats[i]-students[i]);
    }
    console.log(res);
    return res;
};

var minMovesToSeat2 = function(seats, students) {
    
    let res=0;

    seats.sort(function(a,b){return a-b});
    students.sort(function(a,b){return a-b});
    
    for(let i = 0; i<seats.length; i++){
        res += Math.abs(seats[i]-students[i]);
    }
    console.log(res);
    return res;
};

seats = [3,1,5]
students = [2,7,4]

minMovesToSeat(seats,students);
minMovesToSeat2(seats,students);