const fetchPromise = fetch("https://www.themealdb.com/api/json/v1/1/search.php?s");
fetchPromise.then(
    (response) => console.log(response.json()),
    (error) => console.log(error)
);  