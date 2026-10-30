//for of loop
//["" ,"", ""]in array you write a string
//[{},{},{}]in array you write a object

const arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(num);
}
const greetings = "hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}
//maps like a arrays
//map can't store duplicate keys and values if you write they can't excute
//map allways store a unique keys and values
const map = new Map()
map.set('IN', "India")
map.set('USA', "United Stats of Americas")
map.set('IN', "India")
console.log(map);

//if you write only key all the values are print  in a array
//if you like a output as separetly you wtite a key in a []and also write , values 
for (const [key,value] of map) {
    console.log(key,':-', value);
    //show the ouput like this IN :- India
    //USA :- United Stats of Americas
}
//this way map is iterable but object not iterable
const myObject = {
    //'game1' : 'nfs',
    //'game2' : 'spiderman'
    game1 : 'nfs'//if you write without '' it's also not iterable
}
// for (const [key ,value] of myObject) {
//     console.log(key, ':-' , value);
// }//here the myObject is not iterable


