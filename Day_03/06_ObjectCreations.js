function Book(name, author, year) {
    this.name = name;
    this.author = author;
    this.year = year;
    this.getDetails = function(){
        return this.name + " by "+ this.author +" published in year "+ this.year;
    }    
}
var book = new Book("Angels and Demons", "Dan Brown", "2000");
book.getDetails();

function Circle(radius){
    console.log("this -> ", this);
    this.radius = radius;
    this.draw = function() {
                    console.log("Constructor function - draw ", this.radius);
               }
}
var firstCircle = new Circle(10);
// 1. new operator -> create a empty object -> {} => that
// 2. it will set 'this' to that object
// 3. It returns the object from that function -> this happens automatically
firstCircle.draw();

function Employee(id, fname, lname, city){
    this.id = id;
    this.fname = fname;
    this.lname = lname;
    this.city = city;
    this.fullName = function() {
        return this.fname + " "+ this.lname;
    }    
}
var employee = new Employee(1, 'raghav', 'mj', 'bangalore');
