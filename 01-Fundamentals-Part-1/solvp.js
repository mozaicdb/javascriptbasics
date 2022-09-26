'use strict';
// PROBLEM1:
/* We work for a Company building a Smart home 
thermometer. our most recent task is this: "give an 
array of temperature of one day, calculate the temperature amplitude.
keep in mind that sometimes there might be a sensor error;"*/

//The array Given Values are
const temperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
//HOW TO SOLVE THE PROBLEM
//- UNDERSTANDING THE PROBLEM
// - WHAT IS TEMP AMPLITUDE? ANSWER : DIFFERENCE BETWEEN HIGHEST AND LOWEST TEMP
// - HOW TO COMPUTE MAX AND MINI TEMPERATURE?
// - WHAT IS A SENSOR ERROR? AND WHAT TO DO?
// 2) BREAKING UP INTO SUB-PROBLEMS
// - How to ignore errors?
// - find max value in temp array
// - find min value in temp array
//- Subract min from max (amplitude) and return it.

// solution to the ProblemcurTempt calcTempAmplitude = function (curTemp) {

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperature);
console.log(amplitude);

//PROBLEM:2
// the functions to now receive 2 Arrays of temps

// - with 2 Arrays should we implement functionslity twice? NO: just merge two arrays
// -how to Merge 2 arrays?

// typical examples of combining arrays together
//const array1 = ['a', 'b', 'c']; // the examples here illustrate array and also declaration of array1
//const array2 = ['d', 'e', 'f'];// declaration of array2
//const array3 = array1.concat(array2); // typical examples of concanting array1 and array2 together (conbination of array1 and array2)

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2); // combining two arrays declare in the function Parameters
  console.log(temps);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

//Challenging  Questions For the Next Array
// Solutions
// understanding the questions
// - Array transformed to String, seperated by ...
// what is the Xdays? answers
