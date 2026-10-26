const myArr = [0,1,2,3,4,5]//declare number basis array
console.log(myArr[4]);
const myHeros = ["shaktiman","balveer"]//declare name basis array

//2nd method to declare a array
const myArr2 = new Array(1,3,5,7,8)
console.log(myArr2[4]);

//Array methods
myArr.push(8)//push to add a particular number in array
console.log(myArr);

myArr.pop()//pop use for remove a number you not need to
// write any number dy default they removing a last number of array
console.log(myArr);

myArr.unshift(9)//used of unshift is add number at the starting of array
console.log(myArr);

myArr.shift()//work like a pop() but they removing number at the starting
console.log(myArr);
//include is a quentionnarire methode
console.log(myArr.includes(9));//includes use for know about the number is available or not
console.log(myArr);//answer in true and false

console.log(myArr.indexOf(3));//indexOf use for know which index number have which

//join works for Adds all the elements of an array into string
const newArr = myArr.join()
console.log(myArr);
console.log(typeof newArr);//string

//slice, splice
console.log("A ",myArr);
const myNew1 = myArr.slice(1,4)//slice returns a copy of a section of an array

console.log(myNew1);
console.log("B", myArr);//original array

const myNew2 = myArr.splice(1,4)
console.log("C ",myArr);//print only some number who not write in splice
console.log(myNew2);//splice change original array

const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","datman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);


//concat works for combaones two or more arrays.this method returns a new array without modifying any existing array.
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

//its use to seperat  elements works like a concat but in a batter,modifing and popular way 
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
//flat use for returns a new array with all sub-array elements
const real_another_array = another_array.flat(1)//write deapth of array also write infinity for all array
console.log(real_another_array);

console.log(Array.isArray("mahek"))//isArray use for a question this is array or not
console.log(Array.from("mahek"))//srom use for a convert into array

console.log(Array.from({name: "mahek"}))//result is empty
//you need to specifing what you like to convert key or value

let score1 = 100
let score2 = 200
let score3 = 300
//.of use for a returns a new array from a set of elements.
console.log(Array.of(score1, score2, score3));