const name = "mahek"
const repoCount = 5

/*you want to writen morden way use back text,the advantage of string interpolation
you create place holders whatever variable is inside them you can directly inject there
using ${} in breces write a variable name */

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//2nd method of declare string
const gameName = new String('mahek-hc-com')//string is a object here
console.log(gameName)//return: string{'mahek'}
//new is a keyword ,you crate an object and use it string and inside its constructor you gave name 
console.log(gameName[1]);
//prototype can also accessed, many syntaxes to access it.
console.log(gameName.__proto__);//return object
//prototype method
console.log(gameName.length);//string length
console.log(gameName.toUpperCase());//string in uppercase
console.log(gameName.charAt(2));//which charecter on this position 
console.log(gameName.indexOf('k'));//this charecter on which position

const newString = gameName.substring(0,2)
console.log(newString);//use to divied a string in to small part and give staring number and end number of string

const anotherString = gameName.slice(0,3)
console.log(anotherString);

const newStringOne = "      mahek      "
console.log(newStringOne);
console.log(newStringOne.trim())//trim use for remove a ectra scapce

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))//replace use to replace any kind of thing(charecter,space,special charecter etc...)
console.log(url.includes('hitesh'))//use to know about any kind of thing in the url have or not
console.log(gameName.split('-'));
