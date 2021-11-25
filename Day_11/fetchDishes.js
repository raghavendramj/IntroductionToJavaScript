let dishesObjectList = new Array();

const fetchDishes = async () => {
  const result = await fetch( "https://www.themealdb.com/api/json/v1/1/search.php?s");
  const respObject = await result.json();
  respObject.meals.forEach((element) => {
    let eachMeal = {
      mealName: element.strMeal,
      mealArea: element.strArea,
      mealId: element.idMeal,
      thumbnail: element.strMealThumb,
    };
    dishesObjectList.push(eachMeal);
  });
  createMealListAndAttachToUL(dishesObjectList);
};

const fetchDishesUsingAjax = () => {
  let xhr = new XMLHttpRequest();
  let url = "https://www.themealdb.com/api/json/v1/1/search.php?s";
  xhr.open("GET", url, true);
  xhr.send();

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let respObject = JSON.parse(xhr.response);
      //console.log("respObject -> ", respObject);

      respObject.meals.forEach((element) => {
        let eachMeal = {
          mealName: element.strMeal,
          mealArea: element.strArea,
          mealId: element.idMeal,
          thumbnail: element.strMealThumb,
        };
        dishesObjectList.push(eachMeal);
      });
      //console.log("dishesObjectList -> ", dishesObjectList);
      createMealListAndAttachToUL(dishesObjectList);
    }
  };
};

const createMealListAndAttachToUL = (dishesArrayList) => {
  const allDishesStringAppended = dishesArrayList
    .map((dishObject) => {
      return `<li class="dishes" id="${dishObject.mealId}">
                    <h3> ${dishObject.mealName} </h3>
                    <p> ${dishObject.mealArea} </p>
                    <img src="${dishObject.thumbnail}"></img>
                </li>`;
    })
    .join("");
  console.log(allDishesStringAppended);

  //attach the response array of <li>s  in dishlist -> UL
  const dishListUL = document.getElementById("dishList");
  dishListUL.innerHTML = allDishesStringAppended;
};

// Search the dish list
const searchBarDiv = document.getElementById("searchbar");

searchBarDiv.addEventListener("keyup", (searchEventObject) => {
  let mealAreaSearch = searchEventObject.currentTarget.value.toLowerCase();
  const filteredSearchList = dishesObjectList.filter((eachDish) =>
    eachDish.mealArea.toLowerCase().includes(mealAreaSearch)
  );
  createMealListAndAttachToUL(filteredSearchList);
});

fetchDishes();
