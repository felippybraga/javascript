/*
'use strict'
let hasDriversLicence = false
const passTest = true

if (passTest) hasDriversLicence = true
if(hasDriversLicence) console.log('I can drive :D')
*/

//function
function nome() {
    console.log("I'm Felippy")
}
//calling the function
nome()
nome()
nome()

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges)
    const juice =`juice with ${apples} apples and ${oranges} oranges.`
    return juice
}

const appleJuice = fruitProcessor(5, 0)
console.log(appleJuice)

//functio declaration
function calcAge1(birthYear) {
    return 2024 - birthYear
}

const age1 = calcAge1(2005) // I can call this functio before that I create


//function expression
const calcAge2 = function (birthYear) {
    return 2024 - birthYear
}

const age2 = calcAge2(2005)

console.log(age1, age2)

//arrow function
const calcAge3 = birthYear => 2024 - birthYear
const age3 = calcAge3 (2005)
console.log(age3)

const yearsUntilRetirement = (birthYear, fistName) => {
    const age = 2024 - birthYear
    const retirement = 65- age
    return `${fistName} retires in ${retirement} years`
}
console.log (yearsUntilRetirement(2005, 'felippy'))
console.log (yearsUntilRetirement(2010, 'giovanna'))
console.log (yearsUntilRetirement(1990, 'maria'))
console.log (yearsUntilRetirement(2000, 'joao'))

//functions calling other functions
function cutFruitPieces (fruit) {
    return fruit * 4
}

function fruitProcessor (apples, oranges) {
    const applePiece = cutFruitPieces(apples)
    const orangePiece = cutFruitPieces(oranges)

    const juice = `juice with ${applePiece} pieces of apples and ${orangePiece} pieces of oranges`
    return juice
}

console.log (fruitProcessor(2, 3))