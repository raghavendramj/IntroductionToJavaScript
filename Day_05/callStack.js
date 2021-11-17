function C() {
	var x= 10;
	var y= 20; 
}

function B() {
	var c = 10;
	var d= 20;	
	C();
}

function A() {
	var a = 10;
	var b= 20;	
	B();
}

function main() {
	var m=12, n=10
	A();
}
main();


// STACK FRAME -> 3 -> x=10, y=20 
// STACK FRAME -> 2 -> B -> c=10, d = 20;
// STACK FRAME -> 1 -> A -> a=10, b=20
// STACK FRAME -> 0 -> main -> m=12, n=10