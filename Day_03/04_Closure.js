function createAdder(number1) {
  function addNumber(number2) {
    return number1 + number2;
  }
  return addNumber;
}

var sixAdder = createAdder(6);
sixAdder(10);

function printMessage() {
  //Outer Function..
  var orgName = "upGrad";
  function displayNameOfTheOrg() {
    //inner function..
    console.log(orgName);
  }
  return displayNameOfTheOrg;
}
var orgNameTestVar = printMessage();
orgNameTestVar();

function createEmployeeID() {
  var prefix = "employee";
  var generateID = function () {
    for (var i = 0; i < 5; i++) {
      console.log(prefix + i);
    }
  };
  return generateID;
}
var print = createEmployeeID();
print();


function printTest (x) {
    var prefix = "employee";
    function printEmployees(y) {
        for (var i = x; i < y; i++) {
          console.log(prefix +" : "+ i);
        }
    };
    return printEmployees;
}
var testEmp = printTest(2);


var salaryOfEmployee = (
  function(){
      var salary = 60000;            
      function changeSalaryBy(amount){
          // CLOSURE -> PRESERVE OUTER FUNCTION's SALARY VARIBLE -> 60000
          salary += amount;
      }

      return {
           raise :  function() {
                changeSalaryBy(5000);   
           },
           lower : function(){
              changeSalaryBy(-5000);   
           },
           currentSalary: function() {
              return salary;
           }
      }
  }
)();