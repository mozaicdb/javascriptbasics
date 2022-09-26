/*'use strict';
const x = '23';
if (x === 23) console.log(23);
const calcAge = birthYear => 2037 - birthYear;
console.log(calcAge(1996));

//looping in ARRAY
// also note that arrays is called an object

const bola = [
  'moses',
  'jude',
  ['amos', 'david', 'mohammed', 'GoodLuck'],
  2031 - 1993,
  true,
];
console.log(bola);
const types = [];

for (let i = 0; i < bola.length; i++) {
  console.log(bola, typeof bola[i]);
  types[i] = typeof bola[i];
}
console.log(types);

const yryears = [1992, 1993, 1995, 1996, 1997];
const listofages = [];
for (let i = 0; i < yryears.length; i++) {
  listofages.push(2037 - yryears[i]);
}
console.log(listofages);

console.log('ONLY---Number');
for (let i = 0; i < bola.length; i++) {
  if (typeof bola[i] !== 'number') continue;
  {
    console.log(bola[i], typeof bola);
  }
}

//const x = 10;
//var z = 20;
let w = 23 + 19;
w += 10;
console.log(w);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

const calcAge2 = function (birthYeah) {
  return 2027 - birthYeah;
};

const years1 = [1990, 1967, 2002, 2010, 2018];
calcAge2(years1);
const age1 = calcAge2(years1[0]);
const age2 = calcAge2(years1[1]);
const age3 = calcAge2(years1[2]);
const age4 = calcAge2(years1[3]);
const age5 = calcAge2(years1[4]);
const age6 = calcAge2(years1[years1.length - 1]);
console.log(age6);
const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[3]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
*/
