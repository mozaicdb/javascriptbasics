'use strict';

//this functions passes default parameters by assigning values to them
const bookings = [];
const createBoooking = function(
    // ES6 ways of assign default values to parameters
    flightNum,
    numPassengers = 1,
    price = 199 * numPassengers
) {
    const booking = {
        flightNum,
        numPassengers,
        price,
    };
    console.log(booking);
    bookings.push(booking);
};
// calling the functions and assigning values directly to default parameter
createBoooking('LH123');
createBoooking('LH123', 2, 750);
//PASSING A VALUES TO FUNCTONS PUT A UNDEFINED VALUE TO SKIP THE VALUES
createBoooking('LH1234', undefined, 6000);

//Passing argument using  values and Reference

const flight = 'LH567';
const moses = {
    name: 'moses iluyemi',
    passport: 466577777777,
};
const checkIn = function(flightNum, passenger) {
    flightNum = 'LH99';
    passenger.name = 'Mr ' + passenger.name;
    if (passenger.passport === 466577777777) {
        alert('Checked In');
    } else {
        alert('Wrong passport!');
    }
};
checkIn(flight, moses);
console.log(flight);
console.log(moses);

//passing an object to a function parameters
const flightNum = flight;
const passenger = moses;

// passing by value is not allow in Javascript
//  Creating a Function
const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 10000000000);
};
newPassport(moses);
checkIn(flight, moses);