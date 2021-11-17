var person = { 
    firstName: "John", 
    lastName: "Doe",
    getFullName: function() {
       console.log(this.firstName + " " + this.lastName);
    } 
};
setTimeout(person.getFullName, 1000); 
setTimeout(person.getFullName.bind(person), 1000);

function display(){
    return "Hey i'm display -> ", this;
}
var oLEDdisplay = display.bind({displayType: 'OLED'});
oLEDdisplay();

var uHDdisplay = display.bind({displayType: 'UHD'});
uHDdisplay();

var nanCelldisplay = display.bind({displayType: 'Nano Cell', company:'LG'});
nanCelldisplay();



function addNumbers(){
    return this.a + this.b;
}

var numbers = {a: 10, b: 20};
var add10And20 = addNumbers.bind(numbers);
console.log("using bind", add10And20());


console.log("using call", addNumbers.call(numbers));


function addNumbers(c, d, e){
    return this.a + this.b + c + d +e + this.f;
}
var numbers = {a: 10, b: 20, f: 30};
var add10And20 = addNumbers.bind(numbers);
console.log("using bind", add10And20(23, 24, 25));
console.log("using call", addNumbers.call(numbers, 12, 13, 14));


var car = {
    name: 'Car',
    start: function() {
        console.log('Start the ', this.name);
    }    
}

var airCraft = {
    name: 'airCraft',
    fly: function() {
        console.log('Fly the ', this.name);
    }     
}


var person = { 
    getFullName: function() {
       console.log(this.firstName + " " + this.lastName);
    } 
};
var sachinTendulkar = {
   firstName: "Sachin", 
    lastName: "Tendulkar"
};
var viratKohli = {
   firstName: "Virat", 
    lastName: "Kohli"
};

person.getFullName.call(sachinTendulkar);
person.getFullName.call(viratKohli);