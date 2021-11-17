var counter = {
    count: 0,
    next : function() {
        return ++(this.count);
    }
};


function func() {
    'use strict';
    return this;
}
console.log(func());


var car = {
    carName: "i20",
    carCompany : "Hyundai",
    carDetails : function() {
        return this.carName + " " + this.carCompany;
    }
};