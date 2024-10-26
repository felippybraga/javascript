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

//convertion

//string to number
const inputYear = '1991'
console.log(Number(inputYear/*number*/), inputYear/*string*/)
console.log(inputYear + 18)//string
console.log(Number(inputYear) + 18)//number

console.log(Number('Jonas'))
console.log(typeof NaN)

//number to string
console.log(String(23/*string*/), 23/*number*/)

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

