const user = {
    username: "mahek",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        //here this keyword use for current context
        console.log(this)//here only this print before change context and after change context
    }
}
user.welcomeMessage()
user.username = "sam"//change the context(value)
user.welcomeMessage()
//console.log(this)//here you wite this output was empty{} parenthesis or empty object

// function chai(){
//     let usernmae = "mahek"
//     //if you write this in the function means in a block show many lines of  output 
//     console.log(this);
// }
// chai()

/*const chai = function(){
    let usernmae = "mahek"
    console.log(this.username);
}
chai()//here you write like this using chai variable output is undefined*/

//for arrow function you the function key word and add => a signed after () brekets thats call a arrow function 
const chai = () => {
    let usernmae = "mahek"
    console.log(this)
}
chai()

/*basic syntax of arrow fuction is () => {}
    you also hold in a variable */
//this is a expliste return means you need to write return keyword
const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3,4))

//inplesite returen means you not need write a {} and return keyword 
//also write in a one line      
const addTwo1 = (num1, num2) =>  num1 + num2
//if you write in a () you not need write a return key word
const addTwo2 = (num1, num2) =>  (num1 + num2)
console.log(addTwo(3,4))
//how to return object
//const addtwo3 = (num1, num2) => {username: "mahek"} you write like this output was undefined
//for return a object you need to write a object in ()
const addtwo3 = (num1, num2) => ({username: "mahek"})

const myArry = [2,3,5,7,8,9]

//myArry.forEach(function() {})//get foreach loop and add function method and their values 
//myArry.forEach(() => {})//you also add arrow function in array foreach loop
