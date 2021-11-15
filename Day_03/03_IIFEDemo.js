function myFuc2() {
    console.log("myFuc2");
}
myFuc2(); 
undefined
var myFuncVar = function(){
    console.log("My Func Var");
}
myFuncVar(); 
undefined
(function(){
    console.log("My Func Var");
})(); 


var calculator = (function(){

    var addCounter = 0;
    var mulitplyCounter = 0;

    function addition(a, b) {
        addCounter += (a + b); 
        return a + b;
    }
    
    function multiplication(a, b) {
        mulitplyCounter += (a * b);
        return a * b;    
    }

    return {
            add : addition,
            mulitply: multiplication,
            addCounter: this.addCounter,
            mulitplyCounter: this.mulitplyCounter        
    }

})();


