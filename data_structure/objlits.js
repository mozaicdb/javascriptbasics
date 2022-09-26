'use strict';
/*Enhancement in ES6 javascript is a way of adding New features to Javascript
 putting changeing the old way of writing code to a better way and more easier 
 or is more of an improvement in javascript code.
*/
//Computing Properties Names into the object 'hours'
/*const weekdays = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
];
// how to use Advance Object Literals
const hours = {
    [weekdays[3]]: {
        open: 12,
        close: 23,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0,
        close: 24,
    },
};

const resturant = {
    name: 'Classico Italancion',
    location: 'Via Angelo Tavanti 23, Firenze, Italzy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    //passing an object inside a functions
    //ES6 Enhanced object Literals (calling object into another object)
    //openingHours,(we change the object name from opeminghours to hours)
    hours,
    // using Enhanced ES6 on functions
    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    // using Enhanced ES6 on functions

    orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
        console.log(
            `order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
  will be delivered to ${address} at ${time}`
        );
    },
    // using Enhanced ES6 on functions
    orderPasta(ing1, ing2, ing3) {
        console.log(
            `here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
        );
    },
    // using Enhanced ES6 on functions
    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
};

resturant.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2,
});

resturant.orderDelivery({
    address: 'Via del Sole, 21',
    starterIndex: 1,
});*/