//Normal Function
function add (a, b){
    return a + b;
}

//Function Expression
let funcExpression = function(a, b){
    return a + b;
} 

//Arrow Function
let arrowFunc = (a, b) => {
    return a + b;
}

//Simplified Arrow Function
let arrowFunc2 = (a, b) =>  a + b;

console.log(add(10, 20));
console.log(funcExpression(10, 20));
console.log(arrowFunc(10, 20));
console.log(arrowFunc2(10, 20));