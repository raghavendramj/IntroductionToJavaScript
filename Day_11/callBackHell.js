let login = () => {
  //console.log("Login...");
  getUsername((username) => {
    //console.log("getUsername...");
    validateUsername(username, () => {
      //console.log("validateUsername...");
      getPassword((password) => {
        //console.log("getPassword...");
        validatePassword(password, () => {
          //console.log("validatePassword...");
          done();
        });
      });
    });
  });
};

let getUsername = () => {
    console.log("Testing... ");
}

let done = () => {
  console.log("done...");
};

login();
