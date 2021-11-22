//MAP
let numbers = [2, 4, 6, 8];
let squareArray = numbers.map(function(x) {
    return x * x;
});
console.log(squareArray);

let names = ['Virat', 'Rishabh', 'Rahul', 'Venkatesh'];
names.map(eachString => eachString.length);


//FILTER
let allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let even = allNumbers.filter(num => num%2 == 0);
console.log(even);    

let odd = allNumbers.filter(num => num%2 != 0);
console.log(odd); 


let sumOfNumbers = allNumbers.reduce(
    function(accumulator, element){
        console.log("accumulator: ", accumulator, " and element: ", element); 
        return accumulator + element;
    }
);

let sum = allNumbers.reduce((acc, element) => acc + element);