function getScores() {
  return [70, 80, 90, 45, 12];
}

let scores = getScores();

// let x = scores[0],
//   y = scores[1],
//   z = scores[2];

//Array destructuring
let [x, y, z] = getScores();

console.log("X :", x);
console.log("Y :", y);
console.log("Z :", z);

function getItems() {
  return [10, 20, 45];
}

let items = getItems();
let thirdItem = items[2] != undefined ? items[2] : 0;

// let [a, b, c = 0] = getItems();
let [a = 1, b = 2, c = 3] = [10, 23, 45, 78];
console.log("\nSetting default values");
console.log("A :", a);
console.log("B :", b);
console.log("C :", c);

function getProfile() {
  return ["Raghavendra", "M J", ["9898656589", "raghav@gmail.com"]];
}

let [firstName, lastName, [phone, email]] = getProfile();

console.log("\nNested array destructuring");
console.log("firstName", firstName);
console.log("lastName", lastName);
console.log("Contact phone", phone);
console.log("Contact email", email);

