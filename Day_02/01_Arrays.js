function arraysExample(){

    var students = ["Ajith", "Amit", "Anish", "Uthra", "Sagar"]; //creation
    
    console.log(students[0]); //Accessing -> index always starts from 0
    console.log(students[4]);
    
    console.log(students);
    
    students[0] = "Soham"; //Modification
    console.log(students);
    
    console.log("typeof students -> ", typeof students);

}

function arrayMethods(){
    var students = ["Ajith", "Amit", "Anish", "Uthra", "Sagar"];
    printArrayContents(students);
    console.log("************** After addition *********************");
    students.push("Vikas");
    students.push("Sowmiya");
    printArrayContents(students);

    console.log("************** After removal of an element *********************");
    students.pop();

    printArrayContents(students);
}

function printArrayContents(students){
    console.log(students);
    console.log("Size of the array : ", students.length);
    console.log("Last element of the array : ", students[students.length -1]);
    console.log("students[6] :- "+ students[6]);
}


arrayMethods();


