// Search the dish list
const searchBarDiv = document.getElementById("searchbar");

//attach the response array of <li>s  in dishlist -> UL
const dishListUL = document.getElementById("dishList");

const fetchDishes = () => {
  let xhr = new XMLHttpRequest();
  let url = "https://www.themealdb.com/api/json/v1/1/search.php?s";
  xhr.open("GET", url, true);
  xhr.send();

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let respObject = JSON.parse(xhr.response);
      let dishListULObj = document.getElementById('dishList');
      let firstFoodElement = JSON.parse(xhr.response).meals[0];

      let mealName = firstFoodElement.strMeal;
      let mealArea = firstFoodElement.strArea;
      let thumbNail = firstFoodElement.strMealThumb;

      const liString = 
        `<li>
            <h3> ${mealName} </h3>
            <p> ${mealArea} </p>
            <img src="${thumbNail}">
        </li>`

      dishListULObj.innerHTML = liString;       
    }
  };
};

fetchDishes();
