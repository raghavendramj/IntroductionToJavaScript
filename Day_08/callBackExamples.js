let add = (num1, num2, printEvenNumbers, printOddNumbers) => {
    let result = num1 + num2;
    if(result%2 == 0) {
        printEvenNumbers(result);
    } else {
        printOddNumbers(result);
    }
};

//CallBack Function -> Even
let displayEvenNumbers = (result) => {
    console.log("EvenNumbers Callback function :", result);
}

//CallBack Function -> Odd
let displayOddNumbers = (result) => {
    console.log("OddNumbers Callback function :", result);
}

add(10, 21, displayEvenNumbers, displayOddNumbers);