function objectDest() {
  let person = {
    firstName: "John",
    lastName: "Doe",
  };

  // let firstName = person.firstName;
  // let lastName = person.lastName;

  let { firstName, lastName, middleName } = person;

  console.log("firstName :", firstName);
  console.log("lastName :", lastName);
  console.log("middleName :", middleName);

  console.log("\n\nSetting default values.. -- OBJECTS");
}

function settingDefaultValues() {
  let person = {
    firstName: "John",
    lastName: "Doe",
  };

  let {
    firstName: fName,
    lastName,
    middleName = "",
    currentAge: age = 18,
  } = person;
  console.log("firstName :", fName);
  console.log("middleName :", middleName);
  console.log("currentAge :", age);
}

function nullObjectDest() {
  let getPerson = () => {
    return null;
  };

  let { firstName, lastName } = getPerson() || {};
  console.log(firstName, lastName);
}

function nestedObjectDest() {
  let employee = {
    id: 1001,
    name: {
      firstName: "John",
      lastName: "Doe",
    },
  };
  let { name: { firstName, lastName }, } = employee;
  console.log("name :", name);
  console.log("firstName :", firstName);
  console.log("lastName :", lastName);
}
nestedObjectDest();

// It looks less verbose especially when you use many properties of the argument object.
// This technique is often used in React.
