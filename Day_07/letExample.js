let arr = [1, 2, 3, 4, 5];
let numberToFind = 4;

// finding index of the given numberToFind in the given array arr
for (let index = 1; index <= 10; index++) {
  if (arr[index] === numberToFind) {
    //console.log(index);
    break;
  }
}

console.log(index);