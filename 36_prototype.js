// let myNmae = "mahek     "
// console.log(myNmae.truelength);

let myHeros = ["thor", "spiderman"]
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spider power is ${this.spiderman}`);
        
    }
}
Object.prototype.mahek = function(){
    console.log(`mahek is pesent in all object`);
    
}
Array.prototype.hiMahek = function(){
    console.log(`mahek is pesent`);
    
}
myHeros.mahek()
myHeros.hiMahek()
//heroPower.mahek()

//inheritense
const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}
const TeacherSupport = {
    isAvailable: false
}
const TASupport = {
   makeAssignment: 'js',
   fullTime: true,
   __prot__: TeacherSupport
}
Teacher.__prot__ = User

//morden syntax
//setPrototypeOf : set the prototype of a specified object oto object proto or numm. returns the object o.
Object.setPrototypeOf(TeacherSupport, Teacher)

let anotherUsername = "chai    "
String.prototype.trueLength = function(){
    
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);  
}
anotherUsername.trueLength()
"mahek".trueLength()
"jogi".trueLength()