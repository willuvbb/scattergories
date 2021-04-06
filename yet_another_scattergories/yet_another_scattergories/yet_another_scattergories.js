// Background variables
const CATEGORIES_LIST = [
  "A Boy's Name",
  "U.S. Cities",
  "Things That Are Cold",
  "School Supplies",
  "Pro Sports Teams",
  "Insects",
  "Breakfast Foods",
  "Furniture",
  "T.V. Shows",
  "Things That Are Found in the Ocean",
  "Presidents",
  "Product Names",
  "Appliances",
  "Types of Drink",
  "Personality Traits",
  "Articles of Clothing",
  "Desserts",
  "Car Parts",
  "Things Found on a Map",
  "Athletes",
  "4-Letter Words",
  "Items in a Refrigerator",
  "Farm Animals",
  "Street Names",
  "Things on a Beach",
  "Colors",
  "Tools",
  "A Girl's Name",
  "Villains/Monsters",
  "Footwear",
  "Something You're Afraid Of",
  "Terms of Measurement",
  "Book Titles",
  "Heroes",
  "Gifts/Presents",
  "Kinds of Dances",
  "Things That Are Black",
  "Vehicles",
  "Tropical Locations",
  "College Majors",
  "Dairy Products",
  "Things in a Souvenir Shop",
  "Items in Your Purse/Wallet",
  "Famous Females",
  "Medicine/Drugs",
  "Things Made of Metal",
  "Hobbies",
  "People in Uniform",
  "Things You Plug In",
  "Animals",
  "Languages",
  "Names Used in the Bible",
  "Junk Food",
  "Things That Grow",
  "Companies",
  "Video Games",
  "Electronic Gadgets",
  "Board Games",
  "Things That Use a Remote",
  "Card Games",
  "Internet Lingo",
  "Offensive Words",
  "Wireless Things",
  "Computer Parts",
  "Software",
  "Websites",
  "Game Terms",
  "Things in a Grocery Store",
  "Reasons to Quit Your Job",
  "Things That Have Stripes",
  "Tourist Attractions",
  "Diet Foods",
  "Things Found in a Hospital",
  "Food/Drink That Is Green",
  "Weekend Activities",
  "Acronyms",
  "Seafood",
  "Christmas Songs",
  "Words Ending in -N",
  "Words With Double Letters",
  "Childrens Books",
  "Things Found at a Bar",
  "Sports Played Indoors",
  "Names Used in Songs",
  "Foods You Eat Raw",
  "Places in Europe",
  "Olympic Events",
  "Things You See at the Zoo",
  "Math Terms",
  "Animals in Books or Movies",
  "Things to Do at a Party",
  "Sandwiches",
  "Items in a Catalog",
  "World Leaders/Politicians",
  "School Subjects",
  "Excuses for Being Late",
  "Ice Cream Flavors",
  "Things That Jump/Bounce",
  "Television Stars",
  "Things in a Park",
  "Foreign Cities",
  "Stones/Gems",
  "Musical Instruments",
  "Nicknames",
  "Things in the Sky",
  "Pizza Toppings",
  "Colleges/Universities",
  "Fish",
  "Countries",
  "Things That Have Spots",
  "Historical Figures",
  "Terms of Endearment",
  "Items in This Room",
  "Fictional Characters",
  "Menu Items",
  "Magazines",
  "Capitals",
  "Kinds of Candy",
  "Items You Save Up to Buy",
  "Footware",
  "Something You Keep Hidden",
  "Items in a Suitcase",
  "Things With Tails",
  "Sports Equipment",
  "Crimes",
  "Things That Are Sticky",
  "Awards/Ceremonies",
  "Cars",
  "Spices/Herbs",
  "Bad Habits",
  "Cosmetics/Toiletries",
  "Celebrities",
  "Cooking Utensils",
  "Reptiles/Amphibians",
  "Parks",
  "Leisure Activities",
  "Things You're Allergic To",
  "Restaurants",
  "Notorious People",
  "Fruits",
  "Things in a Medicine Cabinet",
  "Toys",
  "Household Chores",
  "Bodies of Water",
  "Authors",
  "Halloween Costumes",
  "Weapons",
  "Things That Are Round",
  "Words Associated With Exercise",
  "Sports",
  "Song Titles",
  "Parts of the Body",
  "Ethnic Foods",
  "Things You Shout",
  "Birds",
  "Methods of Transportation",
  "Items in a Kitchen",
  "Flowers",
  "Things You Replace",
  "Famous Duos and Trios",
  "Things Found in a Desk",
  "Vacation Spots",
  "Diseases",
  "Words Associated With Money",
  "Items in a Vending Machine",
  "Movie Titles",
  "Games",
  "Things That You Wear",
  "Beers",
  "Things at a Circus",
  "Vegetables",
  "States",
  "Things You Throw Away",
  "Occupations",
  "Cartoon Characters",
  "Types of Drinks",
  "Musical Groups",
  "Store Names",
  "Things at a Football Game",
  "Trees",
  "Kinds of Soup",
  "Things Found in New York",
  "Things You Get Tickets For",
  "Things You Do at Work",
  "Foreign Words Used in English",
  "Things You Shouldn't Touch",
  "Spicy Foods",
  "Things at a Carnival",
  "Things You Make",
  "Places to Hang Out",
  "Computer Programs",
  "Honeymoon Spots",
  "Things You Buy for Kids",
  "Things That Can Kill You",
  "Reasons to Take Out a Loan",
  "Words Associated With Winter",
  "Things to Do on a Date",
  "Historic Events",
  "Things You Store Items In",
  "Things You Do Every Day",
  "Things You Get in the Mail",
  "Things You Save Up to Buy",
  "Things You Sit In/On",
  "Reasons to Make a Phone Call",
  "Types of Weather",
  "Titles People Can Have",
  "Things That Have Buttons",
  "Items You Take on a Trip",
  "Things That Have Wheels",
  "Reasons to Call 911",
  "Things That Make You Smile",
  "Ways to Kill Time",
  "Things That Can Get You Fired",
  "Holiday Activities",
];

// Utility functions
const generateRandomColor = () => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  console.log(randomColor);
  return randomColor;
};

const getRandomLetter = () => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)];
  return randomCharacter;
};

const hasDuplicates = (arrayOfIndicies) => {
  //   console.log(arrayOfIndicies);
  arrayOfIndicies.sort(function (a, b) {
    return a - b;
  });
  //   console.log(arrayOfIndicies);
  for (let i = 0; i < arrayOfIndicies.length - 1; i++) {
    if (arrayOfIndicies[i] === arrayOfIndicies[i + 1]) {
      return true;
    }
  }
  return false;
};

// catScroller = document.querySelector(".categoryScroller")

const getNUniqueIndicies = (nValues, kRange) => {
  // kRange should be (CATEGORIES_LIST.length - 1)
  let sanity = 0;
  let result = [];
  while (sanity < 1000) {
    for (let i = 0; i < nValues; i++) {
      result[i] = Math.floor(Math.random() * kRange);
    }
    if (hasDuplicates(result) === false) return result;
    sanity++;
  }
  return null;
};

const generateCategoryWrap = (index_input, category_input) => {
  const categoryWrap = document.createElement("div");
  categoryWrap.classList = "categoryWrap";
  const number = document.createElement("div");
  number.classList = "number";
  number.innerText = index_input;
  const category = document.createElement("div");
  category.classList = "category";
  category.innerHTML = `<span>${category_input}</span>`;
  categoryWrap.appendChild(number);
  categoryWrap.appendChild(category);

  return categoryWrap;
};

const renderCategories = (
  n = categoriesCount,
  parentElement = document.querySelector(".categoryScroller")
) => {
  //   console.log(CATEGORIES_LIST.length);
  // get the categories from the categories list (get a list of indicies first...)
  const catListIndexArray = getNUniqueIndicies(n, CATEGORIES_LIST.length - 1);
  //   console.log(catListIndexArray);
  parentElement.innerHTML = "";
  let indInput = 1;
  for (let ind of catListIndexArray) {
    // console.log("ind:", ind);

    let catInput = CATEGORIES_LIST[ind];
    // console.log("catInput: ", catInput);
    // console.log("indInput = ", indInput);
    let catWrap = generateCategoryWrap(indInput++, catInput);
    // console.log("indInput = ", indInput);
    parentElement.appendChild(catWrap);
  }
};

// function timeToString(time) {
//   let diffInHrs = time / 3600000;
//   let hh = Math.floor(diffInHrs);

//   let diffInMin = (diffInHrs - hh) * 60;
//   let mm = Math.floor(diffInMin);

//   let diffInSec = (diffInMin - mm) * 60;
//   let ss = Math.floor(diffInSec);

//   let diffInMs = (diffInSec - ss) * 100;
//   let ms = Math.floor(diffInMs);

//   let formattedMM = mm.toString().padStart(2, "0");
//   let formattedSS = ss.toString().padStart(2, "0");
//   let formattedMS = ms.toString().padStart(2, "0");

//   return `${formattedMM}:${formattedSS}:${formattedMS}`;
// }

let startTime;
let elapsedTime = 0;
let timerInterval;

let totalTime = 120000;
let remainingTime;

let timeIsBeingEdited = false;

function start() {
  if (timeIsBeingEdited) setTime();
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function printTime() {
    elapsedTime = Date.now() - startTime;
    remainingTime = totalTime - elapsedTime;
    timerValue.innerText = Math.round(remainingTime / 1000);
  }, 1000);
  playButton.classList.add("hide");
  pauseButton.classList.remove("hide");
  showCategories();
}

function pause() {
  clearInterval(timerInterval);
  playButton.classList.remove("hide");
  pauseButton.classList.add("hide");
  hideCategories();
}

function resetTime() {
  if (timeIsBeingEdited) setTime((calledFromReset = true));
  clearInterval(timerInterval);
  remainingTime = totalTime;
  // print(timeToString(totalTime));
  timerValue.innerText = Math.round(totalTime / 1000);
  elapsedTime = 0;
  playButton.classList.remove("hide");
  pauseButton.classList.add("hide");
}

function resetLetteryBois() {
  renderCategories();
  reroll();
  hideCategories();
}

// forEach method, could be shipped as part of an Object Literal/Module
var forEach = function (array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]); // passes back stuff we need
  }
};

const hideCategories = () => {
  let myCategories = document.querySelectorAll(".category");
  forEach(myCategories, function (index, value) {
    console.log(index, value); // passes index + value back!
    value.classList.add("hiddenCategory");
  });
};

const showCategories = () => {
  let myCategories = document.querySelectorAll(".category");
  forEach(myCategories, function (index, value) {
    console.log(index, value); // passes index + value back!
    value.classList.remove("hiddenCategory");
  });
};

// Add buttons and event listeners
const playButton = document.querySelector("#playButton");
playButton.addEventListener("click", () => {
  console.log("play button clicked!");
  // $(#playButton).toggleClass("hide");
  // $(#pauseButton).toggleClass("hide");
  start();
});

const pauseButton = document.querySelector("#pauseButton");
pauseButton.addEventListener("click", () => {
  console.log("pause button clicked!");
  pause();
});

const resetButton = document.querySelector(".restartCol");
resetButton.addEventListener("click", () => {
  console.log("reset button clicked!");
  resetTime();
  resetLetteryBois();
});

const currentLetter = document.querySelector(".bigLetter");

const reroll = () => {
  currentLetter.innerHTML = getRandomLetter();
};

const rerollButton = document.querySelector("#rerollButton");
rerollButton.addEventListener("click", () => {
  console.log("reroll letter button clicked");
  //   console.log(getRandomLetter());
  reroll();
});

const editTime = () => {
  timeIsBeingEdited = true;
  timerDisp.classList.add("hide");
  timerInput.classList.remove("hide");
  setTimeButton.classList.remove("hide");
  // timerInput.value = totalTime / 1000;
  timerInput.value = timerValue.innerText;
  pause();
};

const setTime = (calledFromReset = false) => {
  console.log(timerInput.value);
  timerDisp.classList.remove("hide");
  timerInput.classList.add("hide");
  setTimeButton.classList.add("hide");
  totalTime = timerInput.value * 1000;
  if (!calledFromReset) resetTime();
  timeIsBeingEdited = false;
};

const changeTimeButton = document.querySelector("#changeTimeButton");
changeTimeButton.addEventListener("click", () => {
  console.log("change time button clicked");
  timeIsBeingEdited ? setTime() : editTime();
});

const setTimeButton = document.querySelector("#setTimeButton");
setTimeButton.addEventListener("click", () => {
  console.log("set time button clicked");
  setTime();
});

const timerDisp = document.querySelector("#timer");
const timerInput = document.querySelector(".timerInput");

const flipColors = () => {
  let color1 = document.documentElement.style.getPropertyValue(
    "--main-text-color"
  );
  console.log("color1", color1);
  let color2 = document.documentElement.style.getPropertyValue(
    "--main-bg-color"
  );
  console.log("color2", color2);
  document.documentElement.style.setProperty("--main-text-color", color2);
  document.documentElement.style.setProperty("--main-bg-color", color1);
};
const flipColorsButton = document.querySelector("#flipColorsButton");
flipColorsButton.addEventListener("click", () => {
  console.log("flip colors button clicked");
  flipColors();
});

const changeColors = () => {
  document.documentElement.style.setProperty(
    "--main-text-color",
    generateRandomColor()
  );
  document.documentElement.style.setProperty(
    "--main-bg-color",
    generateRandomColor()
  );
};

const changeColorsButton = document.querySelector("#changeColorsButton");
changeColorsButton.addEventListener("click", () => {
  console.log("change colors button clicked");
  changeColors();
});

const decrementButton = document.querySelector("#decrementButton");
decrementButton.addEventListener("click", () => {
  if (categoriesCount > 0) {
    categoriesCount -= 1;
    categoriesCounter.innerText = categoriesCount;
  }
  console.log("decrement button clicked!");
});

const incrementButton = document.querySelector("#incrementButton");
incrementButton.addEventListener("click", () => {
  if (categoriesCount < 15) {
    categoriesCount += 1;
    categoriesCounter.innerText = categoriesCount;
  }
  console.log("increment button clicked!");
});

// Initial document setup
// Categories Count--set to 5 on init
let categoriesCount = 5;
const categoriesCounter = document.querySelector("#categoriesCounter");
categoriesCounter.innerText = categoriesCount;
changeColors();
reroll();
hideCategories();

//Initial timer
let timerCountDownFrom = 120;
const timerValue = document.querySelector(".timer");
timerValue.innerText = timerCountDownFrom;

// $(".category").toggleClass("hiddenCategory")
