//primeiras aulas
/*
let js = "amazing"

console.log (40+8+23-10)

console.log("felippy") 
console.log(23)

let firstName = "felippy" 

console.log(firstName)

let felippy_benicio = "FB"
let $function = 27;  //this case, if didn't has a dollar sign this varible wouldn't has velue

let person = "Jonas"
let PI = 3.1415

//better option 
let myFirstJob = 'programmer'
let myCurrentJob = 'teacher'

//worse option
let job1 = 'programmer'
let job2 = 'teacher'

console.log = (myFirstJob)
*/

//aulas sobre tipos de variveis
/*
let javascriptIsFun = true
console.log(javascriptIsFun)

//console.log(typeof true)
console.log(typeof javascriptIsFun)
//console.log(typeof 23)
//console.log(typeof 'felippy')


javascriptIsFun = 'yes'
console.log(typeof javascriptIsFun)
*/


/*
//as diferenças entre LET, VAR and CONST:
let age = 31
console.log(age)
age = 45
console.log(age)

const birthYear = 2005
console.log(birthYear)
birthYear = 2010 // ERRO
console.log(birthYear) // ERRO

var nome = 'felippy' 
console.log (nome) // deu ERRO por algum motivo
*/

/*
//IF ELSE
const age = 15
if (age >= 18) {
    console.log('sarah can start sriving licence')
} else {
    const yearLeft = 18 - age
    console.log(`sarah is too young. wait another ${yearLeft} years`)
}

const birthYear = 2012

let century
if (birthYear <= 2000) {
    century = 20
} else {
    century = 21
}
console.log(century)
*/

/*
//convertion
//string to number
const inputYear = '1991'
//                  number       string     
console.log(Number(inputYear), inputYear)
console.log(inputYear + 18)//string
console.log(Number(inputYear) + 18)//number

console.log(Number('Jonas'))
console.log(typeof NaN)

//number to string
//              string number
console.log(String(23), 23)

//something to boolean
console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean('jonas'))
console.log(Boolean({}))
console.log(Boolean(''))

const money = 100
if(money) {
    console.log("don't spend it all")
} else {
    console.log("you should get a job")
}
*/
/*
//Logica Operators
const hasDrivesLicence = true
const hasGoodVision = false

console.log(hasDrivesLicence && hasGoodVision)
console.log(hasDrivesLicence || hasGoodVision)
console.log(!hasDrivesLicence)

if(hasDrivesLicence && hasGoodVision) {
    console.log('sarah is able to drive')
} else {
console.log('someone else shuold to drive...')
}
*/

/*
//switch
const day = 'wednesday'

switch(day) {
    case 'monday':
        console.log('plan couse structure')
        console.log('go to coding meetup')
        break
    case 'tuesday':
        console.log('prepare theory videos');
        break
    case 'wednesday':
        break
    case 'thusday':
        console.log('write code examples')
        break
    case 'friday':
        console.log('Record videos')
        break
    case 'saturday':
        break
    case 'sunday':
        console.log('enjoy the weekend')
        break
    default:
        console.log('not valible day')
}
*/

//IF ELSE simplify
const age = 23
age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water')

//more simplify
const drink = age >= 18 ? 'wine' : 'water'
console.log(drink)

// we can use
console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`)