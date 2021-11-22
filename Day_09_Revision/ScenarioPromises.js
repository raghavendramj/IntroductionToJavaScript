let userPromise = (id) => {
    return new Promise(
        (resolve, reject) => {
            console.log("Finding in database....");
            if(id === 1) {
                 resolve({ id: 1, name: "Raghavendra" });
            } else {
                 reject("User Id not found!");
            }
        }
    );
};

let repositoryPromise = (user) => {    
    return new Promise(
        (resolve, reject) => {
                console.log(`Extracting the repos for user : ${user.name}...`);
                resolve(["repos1", "repos2", "repos3"]);
        }
    );
}

let commitPromise = (repo) => {
    return new Promise(
        (resolve, reject) => {
            console.log(`Extracting commits for repo: ${repo} ...`);
            resolve(["Java", "JavaScript", "Frameworks"]);
        }        
    );    
}

userPromise(1)
    .then((user) => repositoryPromise(user))
    .then((repos) => commitPromise(repos[0]))
    .then((commits) => console.log("All The Commits are.. : ", commits))
    .catch((error) => console.log("Error: ", error.message));