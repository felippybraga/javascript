/* Write your code below. Good luck! 🙂 */

let scoreDolphins = (96 + 108 + 89) / 3
let scoreKoalas = (88 + 91 + 110) / 3

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log ("Dolphins win the trophy")
} else if (scoreKoalas > scoreDolphins && scoreKoalas >=100) {
    console.log ("Koalas win the trophy")
}else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >=100){
    console.log ("Both win the trophy")
} else {
    console.log("no one wins the trophy")
}