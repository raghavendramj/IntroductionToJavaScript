function objectsExample() {
  var person = {
    firstName: "John",
    lastName: "Doe",
    age: 27,
    getFullName: function () {
      return this.firstName + " " + this.lastName;
    },
    address: {
      building: "Villa Apartments",
      road: "Rue La Roi",
      city: "Paris",
    },
  };

  for (var prop in person) {
    console.log("Key : ", prop);
    console.log("Value : ", person[prop]);
  }
}
objectsExample();

function pollQuestion() {
  var music = {
    rock: "guitar",
    classical: "violin",
  };
  var classical = "rock";
  var sound = music.classical;
  console.log(sound);
}


