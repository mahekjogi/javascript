let score = 33
//operator to find the type of a variable
console.log(typeof score);
//also use method type to know the  the type of a variable using()parenthesis
console.log(typeof(score));

let marks = "33abc"
//operator to find the type of a variable
console.log(typeof marks);

//convert the value from string to number
let valueInNumber = Number(marks)
console.log(typeof valueInNumber);
console.log(valueInNumber);

let marks1 = null
//operator to find the type of a variable
console.log(typeof marks);

//convert the value from string to number
let valueInNumber1 = Number(marks1)
console.log(typeof valueInNumber1);
console.log(valueInNumber1);

let marks2= true
//operator to find the type of a variable
console.log(typeof marks2);

//convert the value from string to number
let valueInNumber2 = Number(marks2)
console.log(typeof valueInNumber2);
console.log(valueInNumber2);

let marks3= "mahek"
//operator to find the type of a variable
console.log(typeof marks3);

//convert the value from string to number
let valueInNumber3 = Number(marks3)
console.log(typeof valueInNumber3);
console.log(valueInNumber3);

/*  "33" convert in 33 
    "33abc" that not convert in number and show NaN (NOT A NUMBER)
    true convert in 1 AND false convert in 0*/

//what the output if i went convert in boolean
let isLoggedIn = 1//return 1
let booleanIsLoaggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoaggedIn);

let isLoggedIn2 = ""//return false beacuse of empty
let booleanIsLoaggedIn2 = Boolean(isLoggedIn2)
console.log(booleanIsLoaggedIn2);

let isLoggedIn3 = "mahek"//return true
let booleanIsLoaggedIn3 = Boolean(isLoggedIn3)
console.log(booleanIsLoaggedIn3);

//what the output if i went convert into string
let someNumber = 33;
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);