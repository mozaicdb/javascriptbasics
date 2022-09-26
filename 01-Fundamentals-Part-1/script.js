/*let js = 'amazing';

console.log(40 + 8 + 23 - 10);

console.log('moses');
console.log("jude");
let firstName = 'amose';
console.log(firstName);

console.log(firstName);
console.log(firstName);

const ageMoses = 2022 - 1992;
const ageBisiola = 2022 - 2000;
const ageBimbola = 2022 - 1991;
console.log(ageBimbola);
console.log(ageMoses);
console.log(ageBisiola, ageMoses)
console.log(ageMoses * 2, ageMoses / 10)
const thirdName = 'Abimbola';
const fourtName = 'Iluyemi';
console.log(thirdName + ' ' + fourtName);
let x = 23 + 19;
console.log(x);
x += 10; // x + 10 which  means the value of x =42 + 10
const x = x + 10

console.log(x);
x++;
x--;
x *= 4;
x++;
x--;
console.log(x);



// Coding Chanllege

const markWeight = 78;
const markheight = 1.69;
const johnWeight = 92;
const johnHeigh = 1.95;
const bmiMark = markWeight / markheight ** 2;

const bmiJohn = johnWeight / (johnHeigh * johnHeigh);

console.log(bmiMark, bmiJohn);
const markHeigherBMI = bmiMark > bmiJohn
console.log(bmiMark, bmiJohn, markHeigherBMI);

// Test2 challenge
const WeightofMark = 95;
const HeightofMark = 1.88;
const WeightofJohn = 85;
const HeightofJohn = 1.76;

const bmiofMark = WeightofMark / (HeightofMark * HeightofMark);

const BmiofJohn = WeightofJohn / HeightofJohn ** 2;

console.log(bmiofMark, BmiofJohn);

const markHeigherBMI2 = bmiofMark > BmiofJohn;
console.log(bmiofMark, BmiofJohn, markHeigherBMI2);



const myNmame = 'MOSES';
const job = 'teacher';
const birthyear = '1992';
const currentYear = '2022';
const mozaic = "I 'm " + myNmame + ', a ' + (currentYear - birthyear) + ' years old ' + job + ' ! ';
console.log(mozaic);
const mozaicnew = `I 'm ${myNmame}, a ${currentYear - birthyear}, years old, ${job}, !`;
console.log(mozaicnew);

console.log('multiple line string \n\
amos\n\
good');
console.log(`multiple line string
amos
good`);


const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving License')

} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years`);

}


const birthYear = 1998;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;

}
console.log(century);

//const markWeight = 78;
//const markheight = 1.69;
const johnWeight = 92;
const johnHeigh = 1.95;
const bmiMark = markWeight / markheight ** 2;

const bmiJohn = johnWeight / (johnHeigh * johnHeigh);
console.log(bmiMark, bmiJohn);
if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI (${bmiMark}) is higher than  John's (${bmiJohn})!`);
}
else {
    console.log(`john (${bmiJohn}) is less than Mark (${bmiMark})`);
}




// Lessson on type Conversion
// type Coversion can be define as conversion of string to number and also conversion from other value type to another

const inputyear = '1992'
console.log(Number(inputyear) + 18);
console.log(Number(inputyear));
console.log(inputyear);
console.log(Number('Jude'));

const favourite = Number(prompt("what is your favourite number"));
console.log(Number(favourite));
console.log(typeof Number(favourite))
if (favourite === 23) {
    console.log('cool! 23 is an amazimg number!');

} else if (favourite === 7) {
    console.log('7 is also a cool Number');
} else if (favourite === 9) {
    console.log('cool! 9 is an amazimg number!')

}
else {
    console.log('Number is not 23 or 7');
}




const hasDriversLicense = true;//A
const hasGoodVision = true; //B

// C
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && !isTired);


if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!')
} else {
    console.log('Someone else should drive')
}
// code Chanllege 3
const dolphinsAverageScore = (96 + 108 + 89) / 3
const koalasAverageScore = (88 + 100 + 110) / 3

console.log(` The average scorce for both teams are (${dolphinsAverageScore}), (${koalasAverageScore})`);

if (dolphinsAverageScore > koalasAverageScore) {
    console.log(`dolphins is the winner of the match with the average score of  (${dolphinsAverageScore}) `)

}
else if (dolphinsAverageScore === koalasAverageScore) {
    console.log(`dolphonis (${dolphinsAverageScore}) and koaloas (${koalasAverageScore}) as the same average score`)

}
else if (koalasAverageScore > dolphinsAverageScore) {
    console.log('kolas win the Trophy')
}


else {
    console.log('No team win the Trophy')
}

//bonus 1 for the 3rd Challenge
const dolphinsTotalScore = (97 + 112 + 101) / 3
const koalasTotalScore = (109 + 95 + 123) / 3
console.log(`the total Score for dolphins is (${dolphinsTotalScore}) and the total score for Koalas is (${koalasTotalScore})`)
if (dolphinsTotalScore >= 100 && dolphinsTotalScore > koalasTotalScore) {
    console.log(`dolphins is the winner of the match with the scorce of (${dolphinsTotalScore})`)


} else if (dolphinsTotalScore === koalasTotalScore && dolphinsTotalScore && koalasTotalScore >= 100) {
    console.log('both teams draw the match ')
}
else if (koalasTotalScore >= 100 && koalasTotalScore > dolphinsTotalScore) {
    console.log(`Koalas is the winner of the match with the scorce of (${koalasTotalScore}) `)

}


else {
    console.log(`No Team win the Match `)
}

/* what is statement and Expression
statement can be define as word that does not produce a  value. examples of statement are variables
Expression can be as an Expression that  Produces a value

CONDITIONAL OPERATOR 0R TERNARY :- THIS ARE OPERATOR THAT ARE USED LIKE AND IF AN STATEMENT
*/
// EXAMPLES OF AN CONDITIONAL OPERATOR
//const age = 5
/*age >= 18 ? console.log('I Like to drink wine') :
    console.log('i like to drink water')*/

//const drink = age >= 18 ? 'wine' : 'water'
//console.log(drink)
// Using a tenary in a literal Template
//console.log(`I Like to drink ${age >= 18 ? 'wine' : 'water'} `);

/*const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip} , and the total value ${bill + tip}`); 
*/
