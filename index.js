// Global variables
let burgers = ['Hamburger', 'Cheeseburger'];
let featuredDrink = 'Strawberry Milkshake';

// Function with function-scoped variable
function addBurger() {
    let newBurger = 'Flatburger';
    burgers.push(newBurger);
}
addBurger();  

// Block-scoped variable  if(true)
if (true) {
    let anotherNewBurger = 'Maple Bacon Burger';
    burgers.push(anotherNewBurger);
}

// Function to change featured drink
function changeFeaturedDrink() {
    featuredDrink = 'The JavaShake';
}

console.log("Burgers menu:", burgers);
console.log("Featured drink:", featuredDrink);