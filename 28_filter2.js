const myNumbers = [1,2,3,4,5,6,7,8,9,10]
//map also callback function

//const newNums = myNumbers.map( (num) => num +10)
// console.log(newNums);

//map also return automataclly 
//const newNums = myNumbers.map( (num) => {num +10}) if you write in a scope that show undefined 
//if you like write in a scope also you need to write a return keyword so give you a output 


//chaine method , more than one map you can use that call a chaine methode
//in the chaine methode 2nd map each num we have what's thire value ? that value never have one , at the above methode have one value that the 2nd methode value
const newNums = myNumbers
    .map( (num) => num * 10 )
    .map( (num) => num +1)//store first methode value and add new methode
    .filter( (num) => num >= 40)
console.log(newNums);
