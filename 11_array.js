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
// add any number dy default they removing a last number of array
console.log(myArr);

myArr.unshift(9)//used of unshift is add number at the starting of array
console.log(myArr);

myArr.shift()//work like a pop() but they removing number at the starting
console.log(myArr);

console.log(myArr.includes(9));//includes use for know about the number is available or not
console.log(myArr);//answer in true and false

console.log(myArr.indexOf(3));//indexOf use for know which index number have which

