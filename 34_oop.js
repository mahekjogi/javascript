//NOTES:
//js and classes
//oop
//object is the collection of properties and methode like toLower, toUpper, date , promise...

/*parts of oop :-
 Object literal means object literaly{}
 constructor function
 prototyes
 classes
 instances(new , this)
 */
/*Abstraction means detailes hide ex.ftech
Encapsulation means rape it
Inheritance 
Polymorphism  */

const user = {
    username: "mahek",
    loginCount: 8,
    signedIn: true,

    getUserDetailes :function(){
        //console.log("got user detailes from database")
        //console.log(`Username: ${this.username}`)
        console.log(this);
        
    }

}
console.log(user.username);
//console.log(user.getUserDetailes());
//console.log(this);//show enpty {}

//constractor
//new keyword is actually a constructor function, it just allows you to have
//  single object, you can crete multiple instances from a single object literal
//const promiseOne = new Promise()

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn
    //this all are the properties
    //return this you write this or not implictly defined 
    //now methodes
    this. greeting = function(){
        console.log(`welcome ${this.username}`);
        
    }
}
//you write new keyword so other prototypes or methodes not add in output like fetch, crypto and all....
const userOne =  new User("mahek" , 12 , true )
const userTwo =  new User("jogi" , 10 , false )
//without new keyword constructor overwrite the values for slove it you need to use new keyword
console.log(userOne);
console.log(userTwo);
console.log(userOne.constructor);

//Note:-
//step 1: using new keyword crete a new object
//step 2: write your constructor function called because of the new keyword
//step 3: that whatever arguments etc.. you have written in your'this' keyword all of them get injected inside it
//step 4: you get the function's inside, as we have

