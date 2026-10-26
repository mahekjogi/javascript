//object constructer
//const tinderUser = new Object()//you write like this call a singleton object
const tinderUser = {}//you write like this call a non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regularUsesr = {
    email : "mahek@gmail.com",
    fullname:{
        userfullname:{
            firstname: "mahek",
            lastname: "jogi"
        }
    }
}

console.log(regularUsesr.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
// const obj3 = {obj1 , obj2}
//{} for all these values will combine and a specigic result is gunranteed
//const obj3 = Object.assign({},obj1, obj2)//assign use for copy the values of all the enumerable 
//own properties from one or more source object to a target object.Returns the target object
//console.log(obj3);
const obj3 = {...obj1, ...obj2}
console.log(obj3);

const users = [
    {
        id: 1,
        email: "m@gmail.com"
    },
    {
        id: 1,
        email: "m@gmail.com"
    },
    {
        id: 1,
        email: "m@gmail.com"
    }
]
users[1].email//access 1st value of array email
console.log(tinderUser);
console.log(Object.keys(tinderUser));//collect all keys and put in the array now to can run a loop over it and mnay other places
console.log(Object.values(tinderUser));//collect all values and put in the array 
console.log(Object.entries(tinderUser));//covert all the key values in a array

console.log(tinderUser.hasOwnProperty('isLoggedIn'));//use for know about that property is in or not


//object destructure
const course = {
    coursenmae: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//access the value or key their syntax is course.courseInstructor
const {courseInstructor} = course
console.log(courseInstructor);
//change key(name)
const {courseInstructor:instructor} = course
console.log(instructor);

//react purpose
// const navbar = ({company}) => {

// }
// navbar(company = "mahek")

/*JSON
you creat a object using{} and not get name so it's treated like JSON
but in a proper JSON structure keys in a string
{
    "name": "mahek",
    "coursename": "js in hindi"
    "price":"free"
}
*/
