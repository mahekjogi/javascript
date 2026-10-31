const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripter);
/*output:{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}*/


// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);
//YOU TRY T OOVERWRITE BUT VALUE CAN'T CHANGE

const chai = {
    name:'ginger',
    price:250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nahi bani");
        
    }

}
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
    
    
}