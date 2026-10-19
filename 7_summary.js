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

//stack memory(primitive datatype) , heap memory(non-primitive datatype)
/*whenever stack memory is used,it's means that you get a copy of whatever
 variable you've decalre.that's why they not change in original
                &
 whenever heap memory is used used, you get a refrence to 
 the original value and any change you make will change the original one*/

 //stack
 let myYoutubename = "mahekjogiyoutube.com"
 let anothername = myYoutubename
//  anothername = "mahek"

 console.log(myYoutubename);
 console.log(anothername);

//heap
 let userOne = {
    email:"user@gmail.com",
    upi: "user@upi.com"
 }
let userTwo = userOne
userTwo.email = "mahek@gmail.com"
console.log(userOne)
console.log(userTwo)

console.log(userOne.email)
console.log(userTwo.email)
