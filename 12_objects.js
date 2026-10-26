//two way to declare objects.
//1st literal
//2nd is a constructor

/*singleton is you created using any constructor that means it's the only object of its kind.
but you use another way to create it, it's a multiple instances .it's not a singleton*/

//NOTE : if you create with literal that's not a singleton , if you create with constructor that's a singleton

//object constructor
//Object.create//singleton function is created within it.

//object literals
const mySym = Symbol("key1")//need symbol and defined is

const JsUser = {
    name:"mahek",
    "fullname":"mahek jogi",
    //defined symbol act as a key
    [mySym]: "myKey1",//declare symbole you need write in [] other wise js thinks this is a string
    age: 19,
    location: "jamnagar",
    email: "mahek@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","sunday"]
}
//access object
console.log(JsUser.email)
console.log(JsUser["email"])//beacuse js thoght that email is a string so you can also access like this
console.log(JsUser["fullname"])//if you write using string you can't access using . dot method , this is a only one way to access
console.log(JsUser[mySym]);//for access not need to witer a "" beacus this is not string need only []

//How change values
JsUser.email = "mahek@gmail.com"//override values using =
//Object.freeze(JsUser)//freeze use for a feerze a objrct after that you can change any this in a object
//JsUser.email = "mahek@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello js")
}
//console.log(JsUser.greeting);//you not write a () they get only refrence a function
console.log(JsUser.greeting());//you like to access a function need to write a () 

JsUser.greetingTwo = function(){
    console.log(`hello js user,${this.name}`)

    //you like to add name refrence from this object , you do convert from the string to ``backtick  that call a string interpolation and write a
    //  $ and after that write{} in that for access a variable write a this.and varibale name 
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())
