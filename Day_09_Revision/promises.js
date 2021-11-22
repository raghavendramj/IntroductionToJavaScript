//This block will resolve a promise, beacuse the length of the string is > 5 
let nameLengthPromise = new Promise(
    (resolve, reject) => {
        let myName = 'raghav';
        if(myName.length > 5)
            resolve("The length is greater than 5");
        else 
            reject("The length is less than 5");    
        
    }
);
console.dir(nameLengthPromise);
nameLengthPromise.then(
    (result) => console.log(result),
    (error) => console.log(error)
);


//This block will reject a promise, beacuse the length of the string is < 5 
let nameLengthPromise2 = new Promise(
    (resolve, reject) => {
        let myName = 'rag';
        if(myName.length > 5)
            resolve("The length is greater than 5");
        else 
            reject("The length is less than 5");    
        
    }
);
console.dir(nameLengthPromise);
nameLengthPromise2.then(
    (result) => console.log(result),
    (error) => console.log(error)
);