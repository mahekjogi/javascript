//in forin loop you show that it directly picks up the keys and 
// forof loop you show that it directly picks up the value 

const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby"
}
//for a object loops you use the forin loop

for (const key in myObject) {
//    console.log(myObject[key]);
//use for print a key in object myobject 
    console.log(`${key} shortcut is for ${myObject[key]}`)   
}
//also array have a keys that is a index number 
const programming = ["js", "rb", "py","java"]
for (const key in programming) {
    //console.log(key);//print keys like 0,1,2,3,....
    console.log(programming[key]);
    //if you write in consol.log only keys print index number in a array
    //but you write a array name (variable name and then write in a [] keys so print a full array values)
}
//forin loop work in a map or not
/*const map = new Map()
map.set('IN', "India")
map.set('USA', "United Stats of Americas")
map.set('IN', "India")
// console.log(map);
for (const key in map) {
    console.log(key);
}*/
//it can not print
//for in loop not iterable for map

