const done = () => {
  console.log("DONE!!!");
};

const getContinents = (callback) => {
  // callback = getCountries()
  setTimeout(() => {
    // code to get all continents
    let continent = "Asia";
    console.log(continent);
    callback(continent);
  }, 3000);
};
const getCountries = (continent, callback) => {
  // callback = getStates()
  setTimeout(() => {
    // code to get all countries
    let country = "India";
    console.log(continent, country);
    callback(country);
  }, 3000);
};

const getStates = (country, callback) => {
  // callback = getCities()
  setTimeout(() => {
    // code to get all states
    let state = "Maharashtra";
    console.log(country, state);
    callback(state);
  }, 3000);
};
const getCities = (state, callback) => {
  // callback = done()
  setTimeout(() => {
    // code to get all cities
    let city = "Mumbai";
    console.log(state, city);
    callback();
  }, 3000);
};
const getAddress = () => {
  getContinents((continent) => {
    getCountries(continent, (country) => {
      getStates(country, (state) => {
        getCities(state, () => {
          done();
        });
      });
    });
  });
};
getAddress();