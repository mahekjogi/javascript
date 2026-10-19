//primitive
/*1.String
2.Number
3. Boolean 
4.null(means empty)
5.undefined(assigned variable but not assigned value)
6.symbol(for value uniqueness)
7.BigInt
*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;
// you write same value in two symbols their are diffrent beacuse of the diffrent variable
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754n
//non-primitve(reference)
/*1. array
2.Objects
3.Functions*/
//array
const heros = ["shaktiman", "naagraj", "doga"];
//object
let myObj = {
    name: "hitesh",
    age: 22,
}
//function
function add(a, b) {
    return a + b;
}

console.log(add(10, 20)); // 30


console.log(typeof add);//function
console.log(typeof heros);//object
console.log(typeof myObj);//object
console.log(typeof anotherId);//symbol
