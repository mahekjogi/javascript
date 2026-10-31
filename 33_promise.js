// fetch('http://somthjing').then()//if respone so is in the then()
// .catch()//if error so in the .chach
// .finally()// all in the

//how to create a promise
//NOTE: Promise is an object reprensening the eventual completion or failure of asynchronous operation.

// new :- if you need another instance of an object, it's almost the same as a class
//promise use like a function using promise keyword and promise also use call back function 
//resolve means assceept and reject means reject
const promiseOne = new Promise(function(resolve, reject){
    //do an async task 
    //db calls, cryptography, network
    setTimeout(function(){
        console.log('asyanc task is compelete');
        resolve()//use to connect resolve and then() recall it
    },1000)
})
//how to consume paromise
promiseOne.then(function(){//this function work is above function whatever values you need to return so use this 
    console.log("promise consumed")
})//resolve connection with then()
//with out store in a variable
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async 2");
        resolve()
    },1000)
}).then(function(){
    console.log("asycn 2 resolve");
    
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"mahek", email: "mahek@gmail.com"})
    },1000)
//you can also give a perameter in resolve
})
promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "mahek" , password: "123"})
        }
        else{
            reject('ERROR: SOMTHING WENT WRONG')
        }
    }, 1000)
})
promiseFour
.then((user) => {
    console.log(user);
    return user.username
    
})
.then((username) => {
    console.log((username));
    
})
.catch(function(error){
    console.log((error));
    
}).finally(() => console.log("the promise is either resolved or rejected "))
//finally use like a default

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "js" , password: "123"})
        }
        else{
            reject('ERROR: js WENT WRONG')
        }
    },1000)
})
 async function consumePromiseFive() {
    try {
     const respone =  await promiseFive
     console.log(respone);
    } catch (error) {
         console.log(error); 
    }
 }
consumePromiseFive()

/*async function getAlluser() {
  try {
     const respone = await fetch('https://jsonplaceholder.typicode.com/users')
   const data = await respone.json()
   console.log(data);
   
  } catch (error) {
    console.log("e:" , error);
    
  }
}
getAlluser()*/
//using then and catch 
//fetch methode starts the process of fetching a resource from the network
//promise whichs the fullfiled once the response is available
 fetch('https://jsonplaceholder.typicode.com/users')
 .then((respone) => {
     return respone.json()
 })
 .then((data) => {
     console.log(data);
  
 })
 .catch((error) => console.log(error));



