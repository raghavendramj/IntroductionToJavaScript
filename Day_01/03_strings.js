function escapeExampl() {
  var statement =
    'The nickname "Red Devils" is given to the players playing for Manchester United FC.';
  var statement =
    "The nickname 'Red Devils' is given to the players playing for Manchester United FC.";
}

function indexMethods() {
  var str = "Hello World!";
  console.log("Hello World -> str.length :- ", str.length);
  console.log("str.indexOf('World') :- ", str.indexOf("World"));

  var stmt = "I have to visit to United KKKingdom";
  console.log("str.indexOf('to') :- ", stmt.indexOf("to"));
  console.log("str.lastIndexOf('to') :- ", stmt.lastIndexOf("to"));
  console.log("str.indexOf('K') :- ", stmt.indexOf("K"));
  console.log("str.lastIndexOf('K') :- ", stmt.lastIndexOf("K"));
  console.log("str.indexOf('England') :- ", stmt.indexOf("England"));
}

function subStringMethod() {
  var str = "My favorite country is India";
  console.log("str.substring(3, 11) :- ", str.substring(3, 11));
}
function subStrMethod() {
  var str = "My favorite country is India";
  //second param -> length to be extacted
  console.log("str.substr(3, 11):- ", str.substr(3, 11));
  console.log("str.substr(3) :- ", str.substr(3));
}

function replaceMethod() {
  var stmt = "I have to visit to United Kingdom of the entire kingdom";
  console.log(stmt.replace("/Kingdom/g", "States of America"));
}

function sliceMethod() {
  var stmt = "I have to visit to United Kingdom";
  console.log("stmt.slice(10, 15) :- ", stmt.slice(10, 15));
  console.log("stmt.slice(10) :- ", stmt.slice(10));
}

sliceMethod();
