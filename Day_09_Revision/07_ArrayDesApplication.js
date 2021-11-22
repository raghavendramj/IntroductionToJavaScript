let a = 10,
  b = 20;

[a, b] = [b, a];

console.log("A", a);
console.log("B", b);

let statistics = (a, b) => {
  return [a + b, a - b, (a + b) / 2, a * b];
};


let [sum, difference, average, product] = statistics (45, 25);
console.log(sum, difference, average, product);