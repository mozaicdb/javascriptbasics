'use strict';

/*
    Topic on Array Destructuring :- is an ES6 Features which is a way of unpacking 
    values from an array or An Object in seperate variable
    Or Destructuring is to break a complex datastructure down into a smaller
    data-structure like a varible.
    */

//simple Examples of reteving and Array
//const arr = [2, 3, 4]; // An array was declare called 2,3,4
//example 1 when tryin to access the Array
//const a = arr[0]; // Trying to access or retrive the Array
//const b = arr[1];
//const c = arr[2];
//console.log(a, b, c); // outputing the array that is been declared

// Example 2 trying to Access the Array using the Destructing way to access that ARRAY
//const [x, y, z] = arr; // a simply way to access an array from a already declared array called arr
//console.log(x, y, z);

//The Code below is an examples of A Complex Array
// Examples of Questions for Destructing and  Array
/*
const resturant = {
    name: 'Classico Italancion',
    location: 'Via Angelo Tavanti 23, Firenze, Italzy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 23,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        },
    },

    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    //passing an object inside a functions
    orderDelivery: function({
        starterIndex = 1,
        mainIndex = 0,
        time = '20:00',
        address,
    }) {
        console.log(
            `order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
          will be delivered to ${address} at ${time}`
        );
    },
    orderPasta: function(ing1, ing2, ing3) {
        console.log(
            `here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
        );
    },
    orderPizza: function(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
};
*/

// resturant.orderDelivery({
// time: '22:30',
// address: 'Via del Sole, 21',
// mainIndex: 2,
// starterIndex: 2,
//});

//resturant.orderDelivery({
//  address: 'Via del Sole, 21',
//starterIndex: 1,
//});

// Destructing  ARRAY
//const [first, , second] = resturant.categories;
//console.log(first, second);
// switching Varibles
//let [main, , secondary] = resturant.categories;
//[main, secondary] = [secondary, main];
//console.log(main, secondary);
//console.log(resturant.order(2, 0)); //this output display the result in form of the array
//destructing the variable 'accessing a value from the array inside an object'
//const [startercouse, maincourse] = resturant.order(2, 0);
//console.log(startercouse, maincourse); // this output display the result when after the destructing

//Example 2 destructing the nexted Array:- which simply means destructing array inside another ARRAY
//const nested = [2, 4, [5, 6]];
//const [i, , j] = nested;
//console.log(i, j);
//Destructing arrays
//const [i, , [j, k]] = nested; // Another varible name was created to access the varible in the nested array
//console.log(i, j, k);

//default value in array
//const [p = 1, q = 1, r = 1] = [8, 9];
//console.log(p, q, r);

// HOW TO DESTRUCT AN OBJECT
//const { name, openingHours, categories } = resturant;
//console.log(name, openingHours, categories);

// A different name was given to the properities of an Object and been initialize to that same new-properities
//const {
//name: resturantName,
//openingHours: hours,
//categories: section,
//} = resturant;
//console.log(resturantName, hours, section);

//setting default value with and empty properities which is not display in the object when decleared
//const { menu = [], starterMenu: starter = [] } = resturant;
//console.log(menu, starter);

//mutating Variables it also means switching variables
//let a = 12;
//let b = 14;
//let c = 20;
//const obj = { a: 100, b: 300, c: 450 };
//({ a, b } = obj); // changing the value alredy declared to the value of the property in the object
//console.log(a, b);

//nested Object
//const {
//fri: { open: o, close: ju },
//} = openingHours;
//console.log(o, ju);

//Long Array which is been control by Spread operator
//const arr4 = [7, 8, 9];
//const badNewArr = [1, 2, arr4[0], arr4[1], arr4[2]];
//console.log(badNewArr);
//this is the main Spread operator that help to reduce long Array
// The spread operator is used whenever we need the element of an Array individually
// MULTIPLE VALUES OF AN ARRAY
//BUILD NEW ARRAYS ALSO TO EXPAND AND ARRA
// SPREAD OPERATOR IS TO UPACK AN ARRAY
//const newArr = [1, 2, ...arr4];
//console.log(newArr);

//const newspread = [...resturant.mainMenu, 'youkiu'];
//console.log(newspread);
// A real World Examples
//const ingredients = [
//prompt("Let's make pasta! ingredient 1?"),
//prompt(' Ingredient 2?'),
//prompt(' Ingredient 3?'),
//];
//console.log(ingredients);
//resturant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
//resturant.orderPasta(...ingredients);

// Object that uses Spread Operator
//const newRestaurant = {
//foundedIn: 1998,
//...resturant,
//founder: 'Guiseppe',
//};
//console.log(newRestaurant);

//const resturantCopy = {...resturant };
//resturantCopy.name = 'Ristorante Roma';
//console.log(resturantCopy.name);
//console.log(resturant.name);

// REST PATTERN AND PARAMETERS IS USED TO PARK ELEMENT INTO AN ARRAY
//EXAMPLES ON REST PATTERN

// for destructuing
//we used spread operator at the right-hand side of the operator
//const arrr = [1, 2, ...[3, 4]];

//const [a1, b1, ...others] = [1, 2, 3, 4, 5];
//console.log(a1, b1, others);

//const [pizza, , risotto, ...othersFood] = [
//...resturant.mainMenu,
//...resturant.starterMenu,
//];
//console.log(pizza, risotto, othersFood);

//using Rest pattern on Object
//const { sat, ...weekdays } = resturant.openingHours;
//console.log(weekdays);

// Using REST Parameters on Functions
//const add = function(...numbers) {
//let sum = 0;
//for (let i = 0; i < numbers.length; i++) sum += numbers[i];

//console.log(sum);
//};

//add(2, 3);
//add(5, 3, 7, 2);
//add(8, 2, 5, 3, 2, 1, 4);

//const x1 = [23, 5, 7];
//add(...x1);

/* THE DIFFERENCES BETWEEN REST AND SPREAD SYNTAX (OPERATORS)
        The Spread operator is used when we write values that are Seperated with commas
        while the Rest patterns is used when we write variables that are Seperated with commas*/

/* NOTE ON SHORT CIRCUITING  LOGICAL OPERATOR
         Three Properities of Logical operator (||)
         * They can use any Datatype
         * they can return any Datatype
         * they are short circuiting Evaluation 
        */

// Examples of using Logical Operators

/* 
        console.log('-- --OR-- --');

        console.log(3 || 'Jonas');
        console.log('' || 'Jonas');
        console.log(true || 0);
        console.log(undefined || null);

        console.log(undefined || 0 || '' || 'Hello' || 23 || null);

        // Using tenary Operator
        const guests1 = resturant.numGuests ? resturant.numGuests : 10;
        console.log(guests1);

        const guest2 = resturant.numGuests || 10;
        console.log(guest2);

        console.log('-- --AND-- --');
        console.log(0 && 'Jonas');
        console.log(7 && 'Jonas');

        console.log('Hello' && 23 && null && 'jonas');
        //Practical examples
        if (resturant.orderPizza) {
            resturant.orderPizza('mushrooms', 'spinach');
        }

        resturant.orderPizza && resturant.orderPizza('mushroom', 'spinach');

        // Nullish Coalescing Operator

        //Coding Challenge1
        //Building a Football Betting Application

        const game = {
            // this are two teams
            team1: 'Bayern Munich', //team1
            team2: 'Borrussia Dortmund', //team2
            players: [
                // this is a nexted array
                [
                    'Neuer',
                    'Pavard',
                    'Martinez',
                    'Alaba',
                    'Davies',
                    'Kimmich',
                    'Goretska',
                    'Coman',
                    'Muller',
                    'Gnarby',
                    'Lewandowski',
                ],
                [
                    'Burki',
                    'Schulz',
                    'Hummels',
                    'Akanji',
                    'Hakimi',
                    'Weigl',
                    'Witsel',
                    'Hazard',
                    'Brandt',
                    'Sancho',
                    'Gotze',
                ],
            ],

            scorce: '4.0',
            scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
            date: 'Nov 9th, 2037',
            odds: {
                team1: 11.33,
                x: 3.25,
                team2: 6.5,
            },
        };
        //SOLUTIONS TO THE QUESTIONS ABOVE

        // DESTRUCTING THE ARRAYS
        // A two new varibles is Been delcared that will break those nexted Arrays into Players for each teams
        //1
        const [players1, players2] = game.players;
        console.log(players1, players2);

        //2 using the pattern opertors in accessing the arrays
        const [gk, ...fieldPlayers] = players1;
        console.log(gk, fieldPlayers);

        //3 Arrays with all the Players using spread operator
        const allplayers = [...players1, ...players2];
        console.log(allplayers);

        //4
        const playersfinal = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

        //5
        const {
            odds: { team1, x: draw, team2 },
        } = game;
        console.log(team1, draw, team2);

        //6
        const printGoals = function(...players) {
            console.log(`${players.length} goals were scored`);
        };

        //printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
        //printGoals('Davies', 'Muller');

        printGoals(...game.scored);
        //7
        team1 < team2 && console.log('Team 1 is more likely to win');
        team1 > team2 && console.log('Team 2 is more likely to win');
        //End of the Challenge
        

//shortcut use for loop over arrays
//const menu1 = [...resturant.starterMenu, ...resturant.mainMenu];

for (const item of menu1) console.log(item);
//Part of ES6 FEATURES FOR DECLARING ARRAYS
for (const [i, el] of menu1.entries()) {
    console.log(item);
    console.log(`${i + 1}: ${el}`);
}
console.log(menu1.entries());

//Enhance Object Literals 
*/

// Logical Operator
const rest1 = {
    name: 'Capri',
    //numGuess: 20,
    numGuess: 0,
};

const rest2 = {
    name: 'La Piazza',
    owner: 'Giovanni Rossi',
};

//Using Logical Operator

//rest1.numGuess = rest1.numGuess || 10;
//rest2.numGuess = rest2.numGuess || 10;

//NULLISH ASSIGNMET OPERATOR
//rest1.numGuess ?? = 10;
//rest2.numGuess ?? = 10;

//SET AND MAPS ARE BUILD-IN DATASTRUCTURES IN PROGRAMMING LANGUAGE
//Set is basicaly collection of unique values
//A Set does not collect duplicate

//CREATION OF SET
//const ordersSet = new Set(['Pasta', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
//console.log(ordersSet);
//PASSING A STRING INSIDE A OUTPUT METHOD
//console.log(new Set('MOSES'));
// GETTING THE SIZE OF A SET
//console.log(ordersSet.size);
//TO CHECK IF AN ELEMENT IS PRESENT IN A SET
//console.log(ordersSet.has('Pizza'));
//console.log(ordersSet.has('Bread'));
//ordersSet.add('Garlic Bread');
//ordersSet.add('Garlic Bread');
//ordersSet.clear;
//console.log(ordersSet);
// looping in SET
//for (const order of ordersSet) console.log(order);

//EXAMPLE 1
//Using Passing an Array into A Set
//const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']; // The Code Above is the Declaration of an Array with 6 values and four Repeated values
//const staffUnique = new Set(staff); // Simply means refrences an Array into a set(so therefore the set helps to remove duplicate)
//const staffUnique1 = [...new Set(staff)]; // this is done using the Spread operator to include the newly created set into and array
//console.log(staffUnique);
//console.log(staffUnique1);

// To Know the Size of the Array which is declare into Set
//console.log(
//  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
//);
// SET use to know the size of my name without duplicate
//console.log(new Set('iluyemimosesAbiodun').size);

/* MAPS IN JAVASCRIPT
 A Map is a datastructure that we can use to mark values to keys
map is like and object 
differences Between maps and Object
Object :- Data is store in key values Peers in MAPS
DIFFERENCES BETWEEN OBJECT AND MAPS
In Maps the keys can have any datatypes 
 in Object the keys are always Strings 
 also in map the keys can be object arrays or String

 Map works as key in javascript were by the keys point to the values attach to that keys the  
 Values point to the keys Can either be Primitives Values, Strings, Object or ARRAYS   

*/
// calling the set does not only update the values in the maps but it also return the maps
//Examples of Maps
//const rest = new Map(); // Constructor Method
//rest.set('name', 'Classico Italiano'); // set is used to fill up the map declared as rest
//rest.set(1, 'Firenze, Italy');
//console.log(rest.set(2, 'Lisbon, Portugal'));

//rest
//  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//.set('open', 11)
//.set('close', 23)
//.set(true, 'We are open :D')
//.set(false, 'We are Closed :(');
// the get method is use to retrieve values from a map
//console.log(rest.get('name'));
//console.log(rest.get(false));
//console.log(rest.get('categories'));
//console.log(rest.get('close'));

//const time = 21;
//console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// method use to check map method
//console.log(rest.has('categories'));
// to delete in map
//rest.delete
//console.log(rest.size); // .size is used to check the values of an element in the maps

//console.log(rest.set(99, 'vim'));
//const arrt = [23, 16];
//rest.set(arrt, 'david');
//rest.set(document.querySelector('h1'), 'Heading');
//console.log(rest.get(arrt));
// Map iteration

//const question = new Map([
//  ['question', 'What is the best programming language in the world'],
// [1, 'C'],
//[2, 'Java'],
//['correct', 3],
//[true, 'Correct'],
//[false, 'Try again!'],
//]);
//question.get('question');
//console.log(question.get('question'));
//console.log(question.get(true));
//console.log(question);
//console.log(Object.entries(openingHours));

/*for (const [key, value] of 'question') {
    if (typeof key === 'number')
        console.log(`Answer $
    {key}: ${value}`);
}
//const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);
console.log(question.get(question.get('correct') === answer));

//Converting Map to an Array
console.log([...question]);
console.log(question.entries());
console.log(question.keys());
console.log(question.values());
*/

//Coding challenge for datastructure 2
const gameEvents = new Map([
    [17, 'GOAL'],
    [36, 'Substitution'],
    [47, 'GOAL'],
    [61, 'Substitution'],
    [64, 'Yellow Card'],
    [69, 'Red Card'],
    [70, 'Substituton'],
    [72, 'Substitution'],
    [76, 'Goal'],
    [80, 'Goal'],
    [92, 'Yellow Card'],
]);
// creating an array 'events' of the different game events that happened (no duplicates)
// 1. Answer Putting this Map into an array upacking the Arrays

const events = [...new Set(gameEvents.values())];
console.log(events);

// 2 deleting the Game Event
gameEvents.delete(64);

/* Print the following string to the console 
An event happened, on average, every 9 minutes"
(keep in mind that a game has 90 minutes) */

//3.
console.log(
    `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
    `An event happened, on average, every ${time / gameEvents.size} minutes`
);
// 4 Loop through the Map
// Using Advance for loop statement
for (const [min, event] of gameEvents) {
    const half = min <= 45 ? 'FIRST' : 'SECOND';
    console.log(`[${half} HALF] ${min}: ${event}`);
}

// string
const airlines = 'TAP Air Nigeria';
const plane = 'A320';
// each position of character in string can be gotten
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);

//to know the size of a string
console.log(airlines.length);
console.log('B737'.length);

console.log(airlines.indexOf('r'));
console.log(airlines.lastIndexOf('r'));

// Examples of method in String
/* the slice method is used to extract 
part of String with the position sprcify on it 

*/
// slice method break a string den display the string after the number been display
console.log(airlines.slice(4));
console.log(airlines.slice(7, 15));
// using indexof method is to show the position of the string
console.log(airlines.slice(0, airlines.indexOf(' ')));
console.log(airlines.slice(airlines.lastIndexOf(' ')));

console.log(airlines.slice(-2));
console.log(airlines.slice(1, -1));

/*
 A Functions that receive an Airplane Seat and log into the console 
 weither it is a middle seat or not   
*/
const checkMiddleSeat = function(seat) {
    // The Middle of the Seat is B and E
    const s = seat.slice(-1);
    if (s === 'B' || s === 'E') console.log('You got the middle seat ');
    else console.log('You got Lucky ');
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('moses'));
console.log(typeof new String('moses'));

//More Method in String
console.log(airlines.toLowerCase());
console.log(airlines.toUpperCase());

//How to fixed or correct using string method
const passenger = 'mOsEs';
const passengerLower = passenger.toLowerCase();
const passengeCorrect =
    passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengeCorrect);

const housethings = 'sPoON';
const newHousehold = housethings.toLowerCase();
const newhouseCorrect = newHousehold[0].toUpperCase() + newHousehold.slice(0);
console.log(newhouseCorrect);

const correctpassengerName = function(aMOs) {
    const newName = aMOs.toLowerCase();
    const changeName = newName[0].toUpperCase() + newName.slice(1);

    return console.log(changeName);
};
correctpassengerName('aMOs');

const announcement =
    'All passengers come to boarding door 23. Boarding  door 23!';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

// Practice this function
const checkAirplane = function(items) {
    const baggage = items.toLowerCase();
    if (baggage.includes('knife') || baggage.includes('gun')) {
        console.log('You are not permitted to enter the Plane');
    } else console.log('You can enter the plane now ');
};

checkAirplane('Am about to enter the plane with knife ');
checkAirplane('Am about to enter the plane with Gun  ');
checkAirplane('am about to enter the plane i am from becos no spoon  on me  ');

// split method enables us to split strings into mulitple divided strings
console.log('moses+abiodun+iluyemi'.split('+'));
const [firstName, LastName] = 'Moses Iluyemi'.split(' ');

//console.log(firstName, LastName);
// using split, join and toUpperCase method in String
const newName = [
    'Mr.'.toUpperCase(),
    firstName.toUpperCase(),
    LastName.toUpperCase(),
].join(' ');
console.log(newName);

// Declaring a Function that captalize some names
const captalizeName = function(name) {
    const names = name.split(' ');
    const namesUpper = [];
    for (const n of names) {
        namesUpper.push(n[0].toUpperCase() + n.slice(1));
    }
    console.log(namesUpper.join(' '));
};
captalizeName('bola, jude, ifenyi');
captalizeName('spoon, kinfe, pot, plate, jog');

// Padding in String is used for hiding the rest of atm card numbers and showing only the last two digit
const maskCreditCard = function(number) {
    const str = number + '';
    const last = str.slice(-2);
    return last.padStart(str.length, '*');
};
console.log(maskCreditCard(6458976665));

// Repeat Method in String

const planesInline = function(n) {
    console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};
planesInline(10);
planesInline(4);
planesInline(10);