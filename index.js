// Global variables
const burgers = ['Hamburger', 'Cheeseburger'];  // Changed to const
let featuredDrink = 'Strawberry Milkshake';     // Stays as let

// Function with function-scoped variable
function addBurger() {
    const newBurger = 'Flatburger';  // Changed to const
    burgers.push(newBurger);
}

// Block-scoped variable inside if(true)
if (true) {
    const anotherNewBurger = 'Maple Bacon Burger';  // Changed to const
    burgers.push(anotherNewBurger);
}

// Function to change featured drink
function changeFeaturedDrink() {
    featuredDrink = 'The JavaShake';  // Fixed the string
}

// Optional: Call functions if needed for testing
addBurger();  // Call to add Flatburger

console.log('Burgers menu:', burgers);
console.log('Featured drink:', featuredDrink);