// 1603. Design Parking System

/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */

 var ParkingSystem = function(big, medium, small) {
    this.space = [big,medium,small];
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    this.space[carType-1]--;
    return this.space[carType-1]>=0;
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
