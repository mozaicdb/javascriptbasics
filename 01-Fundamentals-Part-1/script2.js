'use strict'; // strict is a keyword in javaScript that help a programmer to write a neat code i.e it help to indicate anytime that there is an error in code
// what is a functions
//  A Functions is Piece of Code that can be reused
// also a functions can hold one or more complete line of Code

// This Function is an Examples of Non-return Function
//function Logger() {
//  console.log('My name is MOSES ABIODUN ILUYEMI ');

//}
// calling / running / invoking function
//Logger();

// FUNCTION THAT RETURE A VALUE
/* MORE EXPANATION ON FUNCTIONS :- FUNCTIONS IS MORE LIKE A MACHINE COS A MACHINE
accept raw food and Process them before bring out an output for the food */
// Parameters are like varibles that are been  Specific to that same function that is been decleared on
// examples Of this Function is Return Function.

// Functions is the fundamental building blocks for JavaScript
// Functions Help to re-use code

/*
function fruitProcessor(apples, oranges) {
    const juice = `Juice wiith ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

// declare another passing in a function to a New Variable-Name
const appleOrangeJuice = fruitProcessor(4, 34);
console.log(appleOrangeJuice);

// We have Build-in Fuctions and User-Define Functions
// examples of Build-in Functions are 
Number('23')// is a buiding function in JavaScript that convert a String to Numbers 
const num = Number('23');
console.log(num);

//Functions Declaraton and Expression 
/* The difference beteen Parameters and Agrument.
 is simply when a varaiable is declared but not yet assign while  an Argument is when a variable that is already declare is been given a value 
 */
// Examples of a Function Declaration
/*function calculateage(birthdate) {
    return 2022 - birthdate;
}

const newage = calculateage(1992);
console.log(newage);*/

// Fuctions of Expression  is when functions is declarce without the name and stored directly to a variable
// Examples of Functions Expression
/*const Calcuage2 = function (birthyeah) {
    return 2031 - birthyeah
}
const age2 = Calcuage2(1996)
console.log(age2, newage)*/

// Arrow Functions
//const arrowstuff = birthyeah => 2037 - birthyeah;
//const age3 = arrowstuff(1996);

//console.log(age3);

// ARROW FUNCTIONS FOR MORE THAN ONE VALUES
/*const yearsUntilRetirement = (birthyeah, firstName) => {
    const age = 2037 - birthyeah;
    const retirement = 65 - age;

    // return retirement;
    return `${firstName} retires in ${retirement} 
    years`;
}
console.log(yearsUntilRetirement(1990, 'MOSES'));
console.log(yearsUntilRetirement(1986, 'TUNDE'));

// PRACTISING ARROW FUNCTION 
const ageArrow = birthmonth => 2022 - birthmonth;
const newArrow = ageArrow(1991)
console.log(newArrow);

function cutFruitPieces(fruit) {
    return fruit * 4
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice wiith ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));
*/

/*const calcAge = function (birthyeah) {
    return 2037 - birthyeah;
}
const yearsUntilRetirement = function (birthyeah, firstName) {
    const age = calcAge(birthyeah);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} will retire once he is  ${retirement} 
        return retirement;
        years old`);
    }
    else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
}
// return retirement;

console.log(yearsUntilRetirement(1991, 'MOSES'));
console.log(yearsUntilRetirement(1950, 'BOLA'));
*/

// challenges 2 for  Functions

/*const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));
const scorceDolphis = calcAverage(44, 23, 71);
const scorceKoalos = calcAverage(65, 54, 49);
console.log(scorceDolphis, scorceKoalos);
const checkwinner = function (avgDolphins, avgkoalas) {
    if (avgDolphins >= 2 * avgkoalas) {

        console.log(`Dolphis win (${avgDolphins} vs. ${avgkoalas})`);
    }
    else if (avgkoalas >= 2 * avgDolphins) {
        console.log(`Kolas win (${avgkoalas} vs. ${avgDolphins})`);
    }
    else {
        console.log(`No team wins `)
    }

}
checkwinner(scorceDolphis, scorceKoalos)


const dolphinsScorce = calcAverage(85, 54, 41);
const kolasScorce = calcAverage(23, 34, 27);


const checkwinners = function (avgDolphins, avgkoalas) {
    if (avgDolphins >= 2 * avgkoalas) {

        console.log(`Dolphis win (${avgDolphins} vs. ${avgkoalas})`);
    }
    else if (avgkoalas >= 2 * avgDolphins) {
        console.log(`Kolas win (${avgkoalas} vs. ${avgDolphins})`);
    }
    else {
        console.log(`No team wins `)
    }

}
checkwinners(dolphinsScorce, kolasScorce)
checkwinners(576, 111);


//ARRAYS
// ARRAYS are use to store bigs values

const friend = 'MOSES'
const friend2 = 'bisiola'
const friend3 = 'Amos'
const friend4 = 'DAVID'

console.log(`${friend} 
${friend2}
${friend3}
${friend4}`)
// Examples of an ARRAYS 
const friends = ['MICHEAL', 'STEVEN', 'PETER', 'JUDE']
console.log(friends);

// Arrays are large containers that store large amount of variable which later can be reference to when needed
// programmng is all about data

/* Typical Array Functions makes use of the keyword NEW
*/
// the keyword new Array is use to create a new length of an empty array
//const y = new Array(1991, 1984, 2008, 2020);
//console.log(years);
// printing out the First value of and Array and the first value of an Array are counted from zero
/*console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends[3]);


// to change the element  in array or replace the Element of an Array  
//friends[3] = 'jay';
console.log(friends);
// the examples of the below is to know the number of element in array 
console.log(friends.length);
// the examples of array below help to know the last Element of an Array 

console.log(friends[friends.length - 1]);

// ARRAYS CAN ACCEPT BOTH VARAIABLE NAMES, VALUES, NUMBERS AND OPERATORS ETC.
const firstName = 'Jonas';
const Jonas = [firstName, 'Iluyemi', 2037 - 1991, 'teacher', friends];
console.log(Jonas);
console.log(Jonas.length);

// using fuction for with an Array
const calcAge = function (birthYeah) {
    return 2027 - birthYeah;
}

// introducing Array into the functions 
const years = [1990, 1967, 2002, 2010, 2018];
calcAge(years);
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
const age4 = calcAge(years[3]);
const age5 = calcAge(years[4]);

// the last Element in the minus the value of the functions 
const age6 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3, age4, age5);

/* NOW USING THE MAIN ARRAY TOGETHER WITH FUNCTIONS WERE
STORING ALL THE ARRAYS VALUES AND SUBRACT IT WITH THE VALUE
OF A FUNCTION 
*/
/*const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[3]),
calcAge(years[years.length - 1])];
console.log(ages);*/

//BASIC ARRAY OPERATION (METHOD)
//const friends = ['MOSES', 'JUDE', 'AMOS'];
//friends.push('Jay');
/* push is a method in array i.e can also 
call a function cos it has parenthesis
it also help to add element to an array*/
//const newlength = friends.push('tobi')
/* push method can also be used to know the total amount of Element 
in array when is be stored in a variable*/

//console.log(friends);
//console.log(newlength);

//  unshift Method add element to the beginning of an Array
//friends.unshift('john');
//console.log(friends);

// pop element remove the element from the Array
//friends.pop();
// this line of code shows the element that is been reomove from the array
//const popped = friends.pop();
//console.log(popped);
//console.log(friends);
// shift method help to remove the the first element from the array
//friends.shift();
//console.log(friends);

//when stored in a variable it help to show the element that is been remove from array
//const shittted = friends.shift();
//console.log(shittted);
// index method is used to specify the position of were an element is in an array
//console.log(friends.indexOf('JUDE'));
// includes method act as an if statement which reture true of false in a element is in the arrray
//console.log(friends.includes('AMOS'));
//friends.push(23);
//console.log(friends);
//console.log(friends.includes(23));
// THIS IS JUST AN EXERCISES USE INCUDES METHOD INSIDE AND IF STATEMENT

//if (friends.includes('AMOS')) {
//console.log('you have a friend call AMOS')
//}
/*else {
    console.log('you dont have a friend call MOSES')
}*/
//EXERCISE FOR ARRAY (CHANLLEGE)

//const calcTip = function (billvalues) {

/* if (billvalues >= 50 && billvalues <= 300) {
     return billvalues * 0.15;
 }
 else {
     return billvalues * 0.2
  
 }
}*/
//const values = calcTip(35);
//console.log(values)

//const bills = [125, 555, 44];
//const tips1 = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
//const totals = [bills[0] + tips1[0], bills[1] + tips1[1], bills[2] + tips1[2]];

//console.log(bills, tips1, totals);

// introduction to OBJECT
// object is also known as Data-Structute.

/*const newOBJECT = {
    FirstName: 'MOSES',
    LastName: 'Iluyemi',
    job: 'Teacher',
    age: 2037 - 1991,
    friends: ['jude', 'amos', 'bola', 'tinubu']

};
console.log(newOBJECT);

// how to retrive data from Object and how change data in object using bracket and dot notation.
console.log(newOBJECT.job);
console.log(newOBJECT['LastName']);
// another examples of using bracket notation
const nameKey = 'Name';
console.log(newOBJECT['First' + nameKey]);
console.log(newOBJECT['Last' + nameKey]);
// The code above illustrate how to concantinate the properties of an OBJECT and different variable together

// Access or using prompt built in function
// the Reason why angle bracket is better to use a than dot notation
const interestin = prompt(`what do you want to know about my newObject? Choose between 
FirstName, LastName, job, age  and friends`);
console.log(interestin);
console.log(newOBJECT[interestin]);
if (newOBJECT[interestin]) {
    console.log(newOBJECT[interestin]);
}
else {
    console.log(`wrong request! Choose between FirstName, 
     LastName, job, age  and friends `)
}

//using dot and bracket to add new properity to the Object
newOBJECT.location = 'Abuja';
newOBJECT['twitter'] = '@mozaicteck';
console.log(newOBJECT);

// challenge
console.log(`${newOBJECT.FirstName} has  ${newOBJECT.friends.length}  friends, and his best friend is called ${newOBJECT.friends[2]}  `);*/

// object(method)
// any function that is attach to an Object is called a method
// object method can be define as a function which is been used in an OBJECT
// method of an Object is also called a properities that hold a value of a functions
// examples of  OBJECT METHOD
//const abiodun = {
//  firstName: 'Moses',
//LastName: 'ILUYEMI',
//BirthYeah: 1992,
//job: 'teacher',
//friends: ['Mohammed', 'Bola', 'Amos'],
//hasDriversLicense: true,
//calcAge: function (birthYeah) {
// return 2037 - birthYeah;
//}
//};
//console.log(abiodun.calcAge(1992));
//console.log(abiodun['calcAge'](1992));

// introducing this keyword to the object
//the THIS keyword is used to refered to the value of the varaiable declare inside a functions
// where by calling that variable to a method in the class
/*const abiodun = {
    firstName: 'Moses',
    LastName: 'ILUYEMI',
    BirthYeah: 1992,
    job: 'teacher',
    friends: ['Mohammed', 'Bola', 'Amos'],
    hasDriversLicense: true,
    calcAge: function () {
        console.log(this);
        return 2037 - this.BirthYeah;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} year old ${abiodun.job}, and he has ${this.
            hasDriversLicense ? 'a' : 'no'} driver's license.`
    }

}; */
//console.log(abiodun.calcAge());
//console.log(abiodun.getSummary());

//ARRAY are also called an Object cos it has and inbuilt functions and method in dem

// 3 CHALLENGE FOR OBJECT
/*const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }





}*/

/*const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi
    }


}; */

/*console.log(john.calcBMI());
console.log(mark.calcBMI());

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI ${john.bmi}!`)
}
else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI ${mark.bill}!`)
} */

//LOOPS are Fundamental asect of every programming language cos it help to ultimate repetative task
//console.log('lifting weight repetition 1')
//console.log('lifting weight repetition 2')
//console.log('lifting weight repetition 3')
//console.log('lifting weight repetition 4')
//console.log('lifting weight repetition 5')
//console.log('lifting weight repetition 6')
//console.log('lifting weight repetition 7')
//console.log('lifting weight repetition 8')
//console.log('lifting weight repetition 9')
//console.log('lifting weight repetition 10')

// for loop keeps runnning while condition is True
//for (let rep = 1; rep <= 10; rep++) {
//  console.log(`lifting weight repetition`);
//}

// Looping Arrays, Breaking and Continuing
//looping inside

// how to output an array using for loop statement
// Therefore Array also Serve as an Object
//const mohammed = [
//'amos',
//'mohammed',
//2037 - 1991,
//'teacher',
//['Micheal', 'Peter', 'Steven'],
//true,
//'bola'
//];
// declaration of an Empty Array
//const types = [];
//for (let i = 0; i < mohammed.length; i++) {
//  console.log(` this is the value of the Array ${mohammed[i]}`)
// Reading from Mmohammed Arrays
//  console.log(mohammed[i], typeof mohammed[i]);

//fill the empty arrays with the values gotten from the MOHAMMED-ARRAY and give the type of datatype of that values
//types[i] = typeof mohammed[i];
//};
//console.log(types);

// creation of an array that are fill with values
//const years = [1992, 2007, 1986, 2020] // (TAKE THIS CODE VERY IMPORTANT FOR LOOPING IN ARRAYS)
// creating an empty arrays called ages
//const ages = [];
//for (let i = 0; i < years.length; i++) /*this for loop statement check
//if i is less than the length of years*/ {
//  ages.push(2037 - years[i]);// it collect the result of years and populate it to a ages arrays
//}
/* this for loop Statement above populate
 the age empty array with values gotten 
 from the result of the  years array after Computation*/
//console.log(ages);// finally executation or print out result

// FOR LOOP CONTINUE STATEMENT
//console.log('---ONLY STRINGS----')
//for (let i = 0; i < mohammed.length; i++) {
//if (typeof mohammed[i] !== 'string') continue;

//console.log(mohammed[i], typeof mohammed[i]);

//};

// FOR LOOP BREAK STATEMENT
//console.log('--- THIS IS A BREAK STATEMENT ----')
//for (let i = 0; i < mohammed.length; i++) {
//  if (typeof mohammed[i] === 'number') break;

//console.log(mohammed[i], typeof mohammed[i]);

//};

//const mohammed = [
//'amos',
//'mohammed',
//2037 - 1991,
//'teacher',
//['Micheal', 'Peter', 'Steven'],r
//true,
//'bola'
//];

//   For Loop an array  backward
//for (let i = mohammed.length - 1; i >= 0; i--) {
//console.log(i, mohammed[i]);

//}

// for Loop inside another Loop Statement
//for (let exercise = 1; exercise <= 4; exercise++) {

//  console.log(`------ Starting An ${exercise} ------`);
//for (let rep = 1; rep < 6; rep++) {
//  console.log(`lifting weight repetition ${rep}`);
//}

//}

// chanellage on for Loop statement

/*const calcTip = function (billvalues) {
  if (billvalues >= 50 && billvalues <= 300) {
    return billvalues * 0.15;
  } else {
    return billvalues * 0.2;
  }
};

// declaration of Array with values
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = []; // Empty array
const totals = []; // Empty Array
// the loop here is refering to the array created with values
for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]); // here declare a varible call tip and assign it to a function call CALCTIP and pass the values of arrays in it
  tips.push(tip); // push the new value of arrays inside the new call call TIPS
  totals.push(tip + bills[i]); // Add the Values of Arrays in tip and Bills then push the result to the new Arrays call totals
}
console.log(bills, tips, totals); // output the result

/* to calcukate the average of the 
total of number in an array the 
code below clarify it 

*/
//BONUS CHALLENGE FOR LOOP  IN ARRAY (FUNCTION TOGETHER WITH LOOP TO CALCULATE THE AVERAGE OF AN ARRAY)
/*const calcAverage = function (arry) {
  let sum = 0;
  for (let i = 0; i < arry.length; i++) {
    //sum = sum + arry[i] // the expression here is the same as the expression below
    sum += arry[i];
  }
  return sum / arry.length;
};
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));

//psalm3 psalm 7 psalm 109 psalm 125
*/
