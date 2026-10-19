/*let value = 3
let negValue = -value
console.log(negValue);*/

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**3)
console.log(2/2)
console.log(2%2)

let str1 = "hello"
let str2 = " jogi"

let str3 = str1 + str2
console.log(str3)

/*if at starting you get value in 
 string so return all the value in string*/
console.log("1" + 2);//return 12
console.log(1 + "2");//return 12
//print 122 because startning with  the string
console.log("1" + 2 + 2);//return 122
//1+2 = 3 and print 2 
console.log(1 + 2 + "2");//return 32

//if you like to multiple operasion write in () first get their opersion and and add seceond operasion in the first operasion value
//console.log((3 + 4) * 5 % 3 )

console.log(+true);//return 1
console.log(+"");//return 0

//for asign same value in diffrent variable but this is not a right way to write
let num1,num2,num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 50
//prefixe increment
++gameCounter;
//postfix increment
gameCounter++;
console.log(gameCounter);
