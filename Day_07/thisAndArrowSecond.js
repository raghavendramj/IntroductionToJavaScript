let car = {
  model: "Creta",
  make: "2018",
  getDetails: function () {
    console.log("getDetails FUNCTION: ", this);
    //console.log("Car is of model : ", this.model, " and made in the year : ", this.make);
    let localToGetDetails = function () {
      console.log("localToGetDetails FUNCTION: ", this);
    };
    localToGetDetails();
  },
};
car.getDetails();

let car = {
  model: "Creta",
  make: "2018",
  getDetails: function () {
    console.log("getDetails FUNCTION: ", this);
    //console.log("Car is of model : ", this.model, " and made in the year : ", this.make);
    let localToGetDetails = () => {
      console.log("localToGetDetails FUNCTION: ", this);
    };
    localToGetDetails();
  },
};
car.getDetails();
