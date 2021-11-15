function foo() {
  var x = 390;
  bar();
  x = 750;
}
function bar() {
  console.log(x);
}
foo();
