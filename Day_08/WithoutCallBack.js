let concept;
const getConcept = () => {    
    setTimeout(
        () => {
            console.log("Setting concept variable"); //Line- 01
            concept = "JavaScript Callbacks";
    }, 
    3000);
}
const print = () => {
    console.log(`Today's concept is : ${concept}`); //Line- 02
}
getConcept();
print();
