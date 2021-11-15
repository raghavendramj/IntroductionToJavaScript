function arrMethods() {
  var students = ["Ajith", "Amit", "Anish", "Uthra", "Sagar"];
  console.log(students);

  var joinedNames = students.join("--");
  console.log(joinedNames);

  delete students[0];
  console.log(students);

  //students[0] = "Raghav"
  console.log("students.toString() :- ", students.toString());
}

function shiftUnShiftExample() {
  var students = ["Ajith", "Amit", "Anish", "Uthra", "Sagar"];
  console.log("Before Removal : ", students);
  var removedElement = students.shift();
  console.log("After Removal : ", students);

  console.log("removedElement :- ", removedElement);

  students.unshift("Sanjuna");
  console.log("After Addition : ", students);

  students.pop();
  console.log("After POP : ", students);

  students.push("Saurabh");
  console.log("After PUSH : ", students);
}

function mergeTwoArrays() {
  var arr1 = ["Bangalore", "Mumbai", "Delhi"];
  var arr2 = ["Kolkata", "Chennai", "Hydrebad"];

  var cities = arr1.concat(arr2);
  console.log(cities);
}

function spliceExample() {
  var cities = [
    "Bangalore",
    "Mumbai",
    "Delhi",
    "Kolkata",
    "Chennai",
    "Hydrebad",
  ];

  //params
  // 1 -> pos where new elements needs to be added
  // 2 -> how many elements needs to be removed
  // ... -> new elements to be added

  console.log("Before splice() -> ", cities);
  cities.splice(2, 2, "Kerala", "Gujurat");
  console.log("After splice() -> ", cities);

  // -> Removing specific location
  // -> Removing element(s) from specific location
  // -> inserting element(s) from specific location.

  cities.splice(3, 3);
  console.log(cities);
  //VM2236:2 (3) ['Bangalore', 'Mumbai', 'Delhi']
  undefined;
  cities.splice(3, 3);
  console.log(cities);
  //VM2280:2 (3) ['Bangalore', 'Mumbai', 'Delhi']
  undefined;
  cities.splice(3, 0, "Kolkata");
  console.log(cities);
  //VM2389:2 (4) ['Bangalore', 'Mumbai', 'Delhi', 'Kolkata']
  undefined;
  cities.splice(0, 0, "Chennai", "Hydrebad");
  console.log(cities);
}

function sliceExample(){
    
}

sliceExample();
