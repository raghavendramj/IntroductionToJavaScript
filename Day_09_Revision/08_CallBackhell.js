function callBackHellExample() {
  //Scenario => GitHub User => user => repos => 1st Repo => check all the commits.
  //Using Only Callbacks
  let user = { name: "Raghavendra", email: "raghav@gmail.com" };
  let repos = ["JavaScript", "Core Java"];
  let commits = ["Basic Code", "Intermediate Code", "Advanced Code"];

  getAllCommitsFromFirstRepoForUser(user, (user) => {
    console.log("User", user);
    getRepositories(user.name, (repos) => {
      console.log("Repos: ", repos);
      getCommit(repos[0], (commits) => {
        console.log("Repos: ", commits);
      });
    });
  });

  console.log(test);
}

function usingPromises() {
  let getUser = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Reading from database...");
        resolve({ id: 1, name: "Raghavendra" });
      }, 2000);
    });
  };

  getUser(1).then((user) => console.log(user));
}

usingPromises();
