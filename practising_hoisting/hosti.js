'use strict';
console.log(this);
const calcAge = function(birthAge) {
    console.log(2017 - birthAge);
    //console.log(this);
};
calcAge();

const calcAgearrow = birthAge => {
    console.log(2017 - birthAge);
    //console.log(this);
};

calcAgearrow(1994);

const man = {
    fullName: 'moses',
    years: 1994,
    calcAge: function() {
        console.log(this);
        console.log(2022 - this.years);
    },
};

man.calcAge();

const maltida = {
    years: 2017,
};

maltida.calcAge = man.calcAge;
maltida.calcAge();

// primitive data type
let age = 30;
let oldage = age;
age = 31;
console.log(age, oldage);

const me = {
    name: 'bola',
    age: 67,
};

const friend = me;
friend.age = 60;
console.log('Friend:', friend);
console.log('ME:', me);

// primitives Types
let LastName = 'Janet';
let oldLastName = LastName;
LastName = 'williams';
console.log('Single:', oldLastName);
console.log('Married:', LastName);

//Reference Types
const Janet = {
    firstname: 'Jassica',
    LastName: 'willams',
    age: 27,
};

const MarriedJanet = Janet;

// Copying OBject

const Janet2 = {
    firstname: 'Jassica',
    LastName: 'willams',
    age: 27,
    family: ['Alice', 'AMOS'],
};
// it is used to match two object together
// it enable change on the value of the properites once it change but only value that is been ulter that change
const JanetCopy = Object.assign({}, Janet2);
JanetCopy.LastName = 'Davis';
Janet2.family.push('Abraham');
Janet2.family.push('John');

console.log('Single:', Janet2);
console.log('Married:', JanetCopy);