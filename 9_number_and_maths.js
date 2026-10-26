const score = 100
console.log(score);

const balance =  new Number(200.5)//i defind new object thier type is number 
console.log(balance);

console.log(balance.toString());//use to convert into sting
console.log(balance.toString().length);//uset to know about a leangth
console.log(balance.toFixed(3));//use to the how many number you want after the point(.)

const otherNumber = 23.567
console.log(otherNumber.toPrecision(4));//use to how many number you want befor and after point total number
console.log(otherNumber.toPrecision(2));

const hundreds = 1000000
console.log(hundreds.toLocaleString());//use to sepraete with , comma and make easy to read 
console.log(hundreds.toLocaleString('en-IN'));//use to sepraete with , comma and make easy to read IN INDIAN NUMBER

//********************Maths********************* 
//math is a libarary
console.log(Math);
console.log(Math.abs(-4));//abs use negative sign into possitive BUT not possitive into negative
console.log(Math.round(4.3));//round is a funation
console.log(Math.round(4.7));//round use to convert number decimal to round figure

console.log(Math.ceil(4.3));//method name is ceiling & ceil use highest number like 4.2 is 5
console.log(Math.floor(4.3));//use to lowest number like 4.2 is 4 not 4.2 or 5
//sqrt(squre root) , pow(power) , min(to find lowest value in array), max(to find highest value in array)
console.log(Math.min(4,2,5,1));

console.log(Math.random());//math.random values are alwayes between 0 to 1
console.log(Math.random()*10);
console.log((Math.random()*10)+1);//if any number started with 0.0 to slowed this problem use this
console.log(Math.floor(Math.random()*10)+1);//use to round figure in singal digit

const min = 10//min value is 10
const max = 20//max value is 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
//max-min means min value substration from the max value ANSWER IS 10 
//+1 means digit was not with 0 is always start with 1 or more than
/*+min beacuse we are using math.floor so answer in 1(singal digit)
 but i want 10 digit so, i add +min now show answer in 10 digit*/